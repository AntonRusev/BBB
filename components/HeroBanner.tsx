import Link from "next/link";

export default function HeroBanner() {
    return (
        <section className="
      relative
      rounded-2xl
      overflow-hidden
      bg-linear-to-r
      from-green-500
      to-emerald-600
      text-white
      p-8
      md:p-12
      mb-12
    ">

            {/* Content */}
            <div className="max-w-xl z-10 relative">

                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Fresh & Organic Groceries Delivered
                </h1>

                <p className="text-green-100 mb-6">
                    Discover the best fruits, vegetables and nuts from around the world.
                </p>

                <div className="flex gap-4">
                    <Link
                        href="/products"
                        className="
              bg-white
              text-green-700
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-green-100
              transition
            "
                    >
                        Shop Now
                    </Link>

                    {/* TODO Make the Organic Only button work with the querry */}
                    <Link
                        href="/products?organic=true"
                        className="
              border
              border-white/50
              px-6
              py-3
              rounded-xl
              hover:bg-white/10
              transition
            "
                    >
                        Organic Only
                    </Link>
                </div>

            </div>

            {/* Decorative background element */}
            <div className="
        absolute
        right-0
        top-0
        w-1/2
        h-full
        opacity-20
        bg-[radial-gradient(circle_at_center,white,transparent)]
      " />

        </section>
    );
}