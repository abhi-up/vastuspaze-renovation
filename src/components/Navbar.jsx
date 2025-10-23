import { useState } from "react"
import logo from "../assets/logo.webp"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"
import { LINKS } from "../constants/index"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="border-b-2 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <img src={logo} width={150} height={40} alt="Homespire Logo" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-neutral-50 w-full border-t-2`}
      >
        <div className="flex flex-col space-y-4 py-4 px-6">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              onClick={() => setIsOpen(false)}
              className="uppercase text-sm font-medium hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
