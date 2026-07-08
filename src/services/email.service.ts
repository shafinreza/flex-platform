type OrderEmailItem = {
  name: string;
  quantity: number;
  price: number;
};

export type OrderEmailData = {
  orderId: string;
  customerEmail: string;
  customerName: string;
  items: OrderEmailItem[];
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
  address: string[];
  trackingNumber?: string | null;
  trackingUrl?: string | null;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.ORDER_EMAIL_FROM || "FLEX <team@eatflex.uk>";
const INTERNAL_EMAIL = process.env.ORDER_NOTIFY_EMAIL || "team@eatflex.uk";

function money(value: number) {
  return `£${value.toFixed(2)}`;
}

function orderNumber(id: string) {
  return id.slice(0, 8).toUpperCase();
}

function itemRows(items: OrderEmailItem[]) {
  return items
    .map(
      (item) => `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #eadfcf;">
            <strong>${item.name}</strong><br/>
            <span style="color:#31574a;">Qty ${item.quantity}</span>
          </td>
          <td style="padding:14px 0;border-bottom:1px solid #eadfcf;text-align:right;">
            ${money(item.price * item.quantity)}
          </td>
        </tr>`
    )
    .join("");
}

function flexTemplate({
  title,
  intro,
  data,
  banner,
  ctaLabel,
  ctaUrl,
}: {
  title: string;
  intro: string;
  data: OrderEmailData;
  banner?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}) {
  return `
  <div style="margin:0;padding:0;background:#f6ead8;font-family:Arial,sans-serif;color:#173b2f;">
    <div style="max-width:660px;margin:0 auto;padding:32px 18px;">
      <div style="text-align:center;margin-bottom:18px;">
        <div style="font-size:34px;font-weight:900;letter-spacing:-2px;color:#173b2f;">FLEX</div>
        <div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:2px;color:#6f855f;">Natural Fuel. Every Day.</div>
      </div>

      <div style="background:#fffaf0;border-radius:30px;padding:30px;border:1px solid #173b2f1a;">
        <h1 style="margin:0;font-size:36px;line-height:1;letter-spacing:-1.5px;color:#173b2f;">
          ${title}
        </h1>

        <p style="margin:18px 0 0;color:#31574a;font-size:16px;line-height:1.6;">
          ${intro}
        </p>

        ${
          banner
            ? `<div style="margin-top:22px;background:#173b2f;color:#f8ead4;border-radius:22px;padding:18px;font-size:15px;line-height:1.6;">
                ${banner}
              </div>`
            : ""
        }

        <div style="margin-top:24px;background:#f6ead8;border-radius:22px;padding:18px;font-size:14px;line-height:1.7;">
          <strong>Order:</strong> #${orderNumber(data.orderId)}<br/>
          <strong>Customer:</strong> ${data.customerName || data.customerEmail}<br/>
          <strong>Email:</strong> ${data.customerEmail}
        </div>

        <table style="width:100%;border-collapse:collapse;margin-top:24px;font-size:15px;">
          ${itemRows(data.items)}
        </table>

        <div style="margin-top:22px;font-size:15px;">
          <p style="display:flex;justify-content:space-between;margin:9px 0;">
            <span>Subtotal</span><strong>${money(data.subtotal)}</strong>
          </p>
          <p style="display:flex;justify-content:space-between;margin:9px 0;">
            <span>Delivery</span><strong>${data.delivery === 0 ? "Free" : money(data.delivery)}</strong>
          </p>
          ${
            data.discount > 0
              ? `<p style="display:flex;justify-content:space-between;margin:9px 0;color:#6f855f;">
                  <span>Discount</span><strong>-${money(data.discount)}</strong>
                </p>`
              : ""
          }
          <p style="display:flex;justify-content:space-between;margin:20px 0 0;font-size:22px;">
            <span>Total</span><strong>${money(data.total)}</strong>
          </p>
        </div>

        <div style="margin-top:24px;background:#fff7e8;border-radius:22px;padding:18px;">
          <strong>Delivery address</strong><br/>
          <span style="color:#31574a;line-height:1.7;">
            ${data.address.filter(Boolean).join("<br/>")}
          </span>
        </div>

        ${
          data.trackingUrl
            ? `<a href="${data.trackingUrl}" style="display:block;margin-top:24px;background:#173b2f;color:#f8ead4;text-align:center;text-decoration:none;border-radius:999px;padding:16px 22px;font-weight:900;">
                Track your FLEX
              </a>`
            : ctaLabel && ctaUrl
              ? `<a href="${ctaUrl}" style="display:block;margin-top:24px;background:#173b2f;color:#f8ead4;text-align:center;text-decoration:none;border-radius:999px;padding:16px 22px;font-weight:900;">
                  ${ctaLabel}
                </a>`
              : ""
        }

        <p style="margin-top:26px;color:#31574a;font-size:13px;line-height:1.6;text-align:center;">
          Thanks for supporting FLEX — a small independent UK peanut butter brand.
        </p>
      </div>

      <p style="margin:18px 0 0;text-align:center;color:#31574a;font-size:12px;line-height:1.5;">
        FLEX Natural Peanut Butter · No palm oil · No added sugar · Everyday fuel
      </p>
    </div>
  </div>`;
}

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY missing. Skipping email.");
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("Resend email failed:", error);
  }
}

export async function sendOrderEmails(data: OrderEmailData) {
  await Promise.all([
    sendEmail(
      data.customerEmail,
      `Your FLEX is confirmed 🥜`,
      flexTemplate({
        title: "Your FLEX is confirmed 🥜",
        intro:
          "Thanks for your order. We have received it and we will get your peanut butter ready shortly.",
        banner:
          "Your order is now paid and ready to pack. We will email you again when your FLEX is on the way.",
        data,
        ctaLabel: "Shop FLEX again",
        ctaUrl: "https://www.eatflex.uk/shop",
      })
    ),
    sendEmail(
      INTERNAL_EMAIL,
      `New FLEX order — ready to pack #${orderNumber(data.orderId)}`,
      flexTemplate({
        title: "New FLEX order",
        intro: "A new paid order has arrived and is ready to pack.",
        banner: "Action needed: pack this order and update fulfilment when dispatched.",
        data,
        ctaLabel: "Open Admin",
        ctaUrl: `https://www.eatflex.uk/admin/orders/${data.orderId}`,
      })
    ),
  ]);
}

export async function sendShippedEmail(data: OrderEmailData) {
  await sendEmail(
    data.customerEmail,
    "Your FLEX is on the way 🚚",
    flexTemplate({
      title: "Your FLEX is on the way 🚚",
      intro:
        "Good news — your order has been packed and dispatched. The wait is almost over.",
      banner: data.trackingNumber
        ? `Tracking number: <strong>${data.trackingNumber}</strong>`
        : "Your order has been marked as shipped.",
      data,
    })
  );
}

export async function sendRefundedEmail(data: OrderEmailData) {
  await sendEmail(
    data.customerEmail,
    "Your FLEX refund has been processed",
    flexTemplate({
      title: "Your refund has been processed",
      intro:
        "Your order has been cancelled/refunded. The refund has been processed on our side and should return to your payment method depending on your bank.",
      banner:
        "Refund timing is usually 5–10 working days, depending on your card provider or bank.",
      data,
      ctaLabel: "Return to FLEX",
      ctaUrl: "https://www.eatflex.uk",
    })
  );
}
