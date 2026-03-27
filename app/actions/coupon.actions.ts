"use server";

import { getCouponByCode } from "@/services/coupon.service";

export async function applyCouponAction(code: string) {
  if (!code) return null;

  const coupon = await getCouponByCode(code.toUpperCase());

  return coupon;
}