type AnalyticsEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  product_id?: string;
  quantity?: number;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", event.action, {
      event_category: event.category ?? "engagement",
      event_label: event.label,
      value: event.value,
      product_id: event.product_id,
      quantity: event.quantity,
    });
  }

  if (window.clarity) {
    window.clarity("event", event.action);
  }
}

export function trackAddToCart(productId: string, quantity = 1) {
  trackEvent({
    action: "add_to_cart",
    category: "ecommerce",
    label: productId,
    product_id: productId,
    quantity,
  });
}

export function trackCheckoutStarted(value: number) {
  trackEvent({
    action: "begin_checkout",
    category: "ecommerce",
    value,
  });
}

export function trackPurchaseCompleted() {
  trackEvent({
    action: "purchase_completed",
    category: "ecommerce",
  });
}
