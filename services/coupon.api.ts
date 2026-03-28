export async function applyCouponRequest(code: string) {
  const res = await fetch("/api/coupon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Failed to apply coupon");
  }

  return data;
}