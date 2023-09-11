'use client'
import React from "react"
import Logo from "../../public/assets/logos/irm.png"
import HamMenu from "../../public/assets/icons/hamburger-menu.svg"
import CloseMenu from "../../public/assets/icons/close-menu.svg"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    const [menu, setmenu] = React.useState(false)
    const handleMenu = () => {
        setmenu(!menu)
    }
    return (
        <div className="drop-shadow-lg m-auto w-full fixed">
            <nav className="w-full h-12 md:h-20 bg-hijau-layout flex justify-between m-auto max-w-screen-2xl">
                <div className="flex my-auto mx-3">
                    <Image src={Logo} alt="Logo" className="w-[26px] h-[27px] md:w-16 md:h-16" />
                    <h1 className="px-2 m-auto text-[12px] md:text-2xl font-bold text-abu-tulisan">HIMA IRM</h1>
                </div>
                <ul className="hidden md:flex text-slate-800 ">
                    <li className="m-auto px-3 hover:bg-[#97ada1] rounded-lg"><Link href="/">Home</Link></li>
                    <li className="m-auto px-3 hover:bg-[#97ada1] rounded-lg"><Link href="/about">About</Link></li>
                    <li className="m-auto px-3 hover:bg-[#97ada1] rounded-lg" ><Link href="/activities">Activities</Link></li>
                    <li className="m-auto px-3 hover:bg-[#97ada1] rounded-lg"><Link href="/">Blog</Link></li>
                    <li className="m-auto px-3 hover:bg-[#97ada1] rounded-lg"><Link href="/">Informations</Link></li>
                </ul>
                <div className="md:hidden w-4 mx-3 my-auto cursor-pointer" onClick={handleMenu}>
                    <Image src={!menu ? HamMenu : CloseMenu} alt="" />
                </div>
            </nav>
            <ul className={!menu ? "hidden" : "w-full h-56 bg-[#7f9488] opacity-80 text-center absolute md:hidden z-10 text-sm"}>
                <li className="p-3 px-3"><Link href="/">Home</Link></li>
                <li className="p-3 px-3"><Link href="/about">About</Link></li>
                <li className="p-3 px-3"><Link href="/activities">Activities</Link></li>
                <li className="p-3 px-3"><Link href="/">Blog</Link></li>
                <li className="p-3 px-3"><Link href="/">Informations</Link></li>
            </ul>
        </div>
    )
}

export default Navbar