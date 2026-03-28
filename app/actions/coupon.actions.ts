"use server";

import { getCouponByCode } from "@/services/coupon.service";
import { Coupon } from "@/types/coupon";

export async function applyCouponAction(code: string): Promise<Coupon | null> {
  if (!code) return null;

  const coupon = await getCouponByCode(code.toUpperCase());

  return coupon;
}