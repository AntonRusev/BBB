import Link from "next/link";

export default function NavBar() {
    return (
        <nav>
            {/* User Nav */}
            <ul className="flex gap-2">
                {/* Home Page */}
                <li>
                    <Link href='/'>Home</Link>
                </li>
                {/* Products Page */}
                <li>
                    <Link href='/products'>Products</Link>
                </li>
                {/* Cart Page */}
                <li>
                    <Link href='/'>Cart</Link>
                </li>
                {/* Login Page */}
                <li>
                    <Link href='/'>Login</Link>
                </li>
                {/* Register Page */}
                <li>
                    <Link href='/'>Register</Link>
                </li>
            </ul>

            {/* Admin extra Nav */}
            <ul className="flex gap-2">
                {/* Admin Page */}
                <li>
                    <Link href='/admin'>Admin Page</Link>
                </li>
                {/* Admin Products Page */}
                <li>
                    <Link href='/admin/products'>Admin Products Page</Link>
                </li>
                {/* Add New Item Page */}
                <li>
                    <Link href='/admin/products/add'>Add Product Page</Link>
                </li>
            </ul>
        </nav>
    );
};