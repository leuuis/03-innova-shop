'use client'

import { titleFont } from "@/app/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

import { useUIStore } from "@/store"

export const TopMenu = () => {

  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>Innova</span>
          <span className="text-sm text-gray-500"> | Shop</span>
        </Link>
      </div>

      {/* Menu */}
      {
        // TODO: To verify behavior when links are clicked since the second click 
      }
      <div className="hidden sm:block">
        <Link href="category/men" className="m-2 p-2 rounded-md transition-all hover:bg-gray-200 text-sm text-gray-500">Men</Link>
        <Link href="category/women" className="m-2 p-2 rounded-md transition-all hover:bg-gray-200 text-sm text-gray-500">Women</Link>
        <Link href="category/kid" className="m-2 p-2 rounded-md transition-all hover:bg-gray-200 text-sm text-gray-500">Kids</Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <div className="relative">
          <span className="absolute text-xs rounded-full px-1 font-bold top-3 -right-2   bg-blue-700 text-white">3</span>
          <Link href="/cart" className="mx-2">
            <IoCartOutline className="w-5 h-5" />
          </Link>
        </div>

        <button className="mx-2 rounded-md transition-all hover:bg-blue-600 p-2"
          onClick={() => openSideMenu()}
        >
          Menu
        </button>
      </div>

    </nav>
  )
}
