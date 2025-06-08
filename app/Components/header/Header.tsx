"use client"
import Link from "next/link"
import { MenuItem } from "../menuItem/Menuitem"
import { useState } from "react";
import { AlignJustify } from "lucide-react";

export const Header = () => {
    
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };
  return (
    <header className="border-b-2 border-b-blue-300 bg-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 max-md:hidden">
        <Link href="/pages/inicio" className="flex items-center gap-2">
          <span className="text-xl font-bold">SOS</span>
        </Link>
        <nav>
          <ul className="flex gap-6">
            <MenuItem link="/pages/inicio">Zonas</MenuItem>
            <MenuItem link="/pages/centralajuda">Central</MenuItem>
          </ul>
        </nav>
      </div>

      <div className="mb-[2%] flex justify-between p-7 min-md:hidden">
            <div>
                <Link href='/pages/inicio' className="text-blue-700 font-bold">SOS</Link>
            </div>
              <a href="#" onClick={toggleMenu} className="text-blue-500"><AlignJustify/></a>
      </div>
        {menu && (
           <nav id="lista_nav" className="hover:text-blue-950">
               <ul className="text-[16px] flex justify-around list-none mb-2 min-md:hidden">
                   <li>
                       <Link href='/pages/inicio'>Zonas</Link>
                   </li>
                   <li>
                        <Link href='centralajuda'>Central</Link>
                   </li>
               </ul>
           </nav>
        )}
    </header>
  )
}
