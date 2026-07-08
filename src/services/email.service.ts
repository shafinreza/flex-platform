type OrderEmailItem = {
  name: string;
  quantity: number;
  price: number;
};

type OrderEmailData = {
  orderId: string;
  customerEmail: string;
  customerName: string;
  items: OrderEmailItem[];
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
  address: string[];
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = process.env.ORDER_EMAIL_FROM || "FLEX <orders@eatflex.uk>";
const INTERNAL_EMAIL = process.env.ORDER_NOTIFY_EMAIL || "team@eatflex.uk";

function money(value: number) {
  return `£${value.toFixed(2)}`;
}

function orderHtml(data: OrderEmailData, internal = false) {
  const rows = data.items
    .map(
      (item) => `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #eadfcf;">
            <strong>${item.name}</strong><br/>
            <span style="color:#31574a;">Qty ${item.quantity}</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #eadfcf;text-align:right;">
            ${money(item.price * item.quantity)}
          </td>
        </tr>`
    )
    .join("");

  return `
  <div style="margin:0;padding:0;background:#f6ead8;font-family:Arial,sans-serif;color:#173b2f;">
    <div style="max-width:640px;margin:0 auto;padding:32px 20px;">
      <div style="background:#fffaf0;border-radius:28px;padding:28px;border:1px solid #173b2f1a;">
        <h1 style="margin:0;font-size:34px;line-height:1;letter-spacing:-1px;">
          ${internal ? "New FLEX order" : "Thanks for your order"}
        </h1>

        <p style="margin:16px 0 0;color:#31574a;font-size:16px;line-height:1.6;">
          ${internal ? "A new order has been paid and is ready to pack." : "We’ve received your order and we’ll get it ready shortly."}
        </p>

        <div style="margin-top:24px;background:#f6ead8;border-radius:20px;padding:16px;">
          <strong>Order:</strong> #${data.orderId.slice(0, 8).toUpperCase()}<br/>
          <strong>Customer:</strong> ${data.customerName || data.customerEmail}<br/>
          <strong>Email:</strong> ${data.customerEmail}
        </div>

        <table style="width:100%;border-collapse:collapse;margin-top:22px;">
          ${rows}
        </table>

        <div style="margin-top:20px;">
          <p style="display:flex;justify-content:space-between;margin:8px 0;">
            <span>Subtotal</span><strong>${money(data.subtotal)}</strong>
          </p>
          <p style="display:flex;justify-content:space-between;margin:8px 0;">
            <span>Delivery</span><strong>${data.delivery === 0 ? "Free" : money(data.delivery)}</strong>
          </p>
          ${
            data.discount > 0
              ? `<p style="display:flex;justify-content:space-between;margin:8px 0;color:#6f855f;">
                  <span>Discount</span><strong>-${money(data.discount)}</strong>
                </p>`
              : ""
          }
          <p style="display:flex;justify-content:space-between;margin:18px 0 0;font-size:22px;">
            <span>Total</span><strong>${money(data.total)}</strong>
          </p>
        </div>

        <div style="margin-top:24px;background:#173b2f;color:#f8ead4;border-radius:20px;padding:18px;">
          <strong>Delivery address</strong><br/>
          <span style="color:#f8ead4cc;line-height:1.6;">
            ${data.address.filter(Boolean).join("<br/>")}
          </span>
        </div>

        <p style="margin-top:24px;color:#31574a;font-size:14px;line-height:1.6;">
          FLEX Natural Peanut Butter — no palm oil, no added sugar, everyday fuel.
        </p>
      </div>
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
      `Your FLEX order #${data.orderId.slice(0, 8).toUpperCase()}`,
      orderHtml(data)
    ),
    sendEmail(
      INTERNAL_EMAIL,
      `New FLEX order #${data.orderId.slice(0, 8).toUpperCase()}`,
      orderHtml(data, true)
    ),
  ]);
}
