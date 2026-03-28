import CouponModel from "@/models/Coupon";

import { Coupon } from "@/types/coupon";

export async function getAllCoupons(): Promise<Coupon[]> {
    const coupons = await CouponModel.find().lean()

    return coupons.map(c => ({
        // Converting the data into serializable values 
        _id: c._id.toString(),
        code: c.code,
        type: c.type,
        value: c.value,
        minOrderValue: c.minOrderValue,
        isActive: c.isActive,
        expiresAt: c.expiresAt,
    }));
}

export async function getCouponByCode(code: string): Promise<Coupon | null> {
    const coupon = await CouponModel.findOne({
        code: { $regex: `^${code}$`, $options: "i" } // matching the entire string, case-insensitive
    });

    if (!coupon || coupon.isActive === false) return null;  // check if coupon exists and if it is active

    return {
        ...coupon.toObject(),
        _id: coupon._id.toString()
    };
};