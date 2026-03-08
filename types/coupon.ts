export type Coupon = {
  code: string
  type: "percentage" | "fixed" // either % off of total price or fixed(for isntance, its always €5 discount, no matter if its €10 or €100 total price)
  value: number
  minOrderValue?: number  //allows discount based on cart subtotal (15% off if cart total price > €50)
  expiresAt?: Date // TODO when the Admin role can start creating coupons, they should come with expiration date
}