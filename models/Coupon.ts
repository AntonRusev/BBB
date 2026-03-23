import { Schema, model, models } from "mongoose"
import type { Coupon } from "@/types/coupon"

const couponSchema = new Schema<Coupon>({
    code: {
        type: String,
        unique: [true, "Coupon with this code already exists"],
        required: [true, "Coupon code is required"]
    },
    type: {
        type: String,
        enum: ["percentage", "fixed"],
        required: [true, "Coupon type is required"]
    },
    value: {
        type: Number,
        required: [true, "Coupon value is required"]
    },
    minOrderValue: {
        type: Number
    },
    isActive: {
        type: Boolean,
        default: true
    },
    expiresAt: {
        type: Date
    },
}, {
    timestamps: true // CreatedAt and UpdatedAt fields
});

const CouponModel = models.Coupon || model<Coupon>("Coupon", couponSchema);

export default CouponModel