import { getCouponByCode } from "@/services/coupon.service"

// Endpoint: /api/coupon
export async function POST(req: Request) {
    try {
        const { code } = await req.json()

        if (!code) {
            return Response.json(
                { error: "Code is required" },
                { status: 400 }
            );
        }

        const coupon = await getCouponByCode(code);

        if (!coupon) {
            return Response.json(
                { error: "Invalid coupon" },
                { status: 404 }
            );
        }

        return Response.json(coupon);

    } catch (error) {
        return Response.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}