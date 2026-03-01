"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Styling for highlighting the currently active link:
    // TODO make it work with .startsWith() so that when /products/{id} is visited it still highlights the "products" nav link

    // User navigation
    const linkStyle = (path: string) =>
        `transition-colors ${pathname === path
            ? "text-green-700 font-semibold"
            : "text-gray-600 hover:text-green-600"
        }`;

    // Admin navigation
    const adminLinkStyle = (path: string) =>
        `block py-2 transition-colors ${pathname === path
            ? "text-orange-600 font-semibold"
            : "text-orange-500 hover:text-orange-700"
        }`;

    return (
        <nav className="bg-white shadow-md border-b border-green-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                {/* TODO add a custom image */}
                <div className="text-2xl font-bold text-green-700">
                    BG Bio Borsa
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">

                    {/* User Nav */}
                    <ul className="flex gap-6 text-sm font-medium items-center">
                        <li>
                            <Link href="/" className={linkStyle("/")}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className={linkStyle("/products")}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className={linkStyle("/cart")}>
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link href="/login" className={linkStyle("/login")}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/register" className={linkStyle("/register")}>
                                Register
                            </Link>
                        </li>
                    </ul>

                    {/* Divider */}
                    <div className="h-6 w-px bg-gray-200" />

                    {/* Admin Nav */}
                    <ul className="flex gap-6 text-sm font-medium items-center">
                        <li>
                            <Link href="/admin" className={adminLinkStyle("/admin")}>
                                Admin Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/products" className={adminLinkStyle("/admin/products")}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/products/add" className={adminLinkStyle("/admin/products/add")}>
                                + Add Product
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Hamburger Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5">
                    <span className={`h-0.5 w-6 bg-green-700 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`h-0.5 w-6 bg-green-700 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-green-700 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-4 pb-4 space-y-4 text-sm font-medium">

                    {/* User Links */}
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className={linkStyle("/")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                onClick={() => setIsOpen(false)}
                                className={linkStyle("/products")}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/cart"
                                onClick={() => setIsOpen(false)}
                                className={linkStyle("/cart")}
                            >
                                Cart
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className={linkStyle("/login")}
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className={linkStyle("/register")}
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-4" />

                    {/* Admin Links */}
                    <ul className="space-y-2">
                        <li className="text-xs uppercase tracking-wider text-gray-400">
                            Admin
                        </li>
                        <li>
                            <Link
                                href="/admin"
                                onClick={() => setIsOpen(false)}
                                className={adminLinkStyle("/admin")}
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/products"
                                onClick={() => setIsOpen(false)}
                                className={adminLinkStyle("/admin/products")}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/products/add"
                                onClick={() => setIsOpen(false)}
                                className={adminLinkStyle("/admin/products/add")}
                            >
                                + Add Product
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};