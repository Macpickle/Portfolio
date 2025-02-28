import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navbarItems = [
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Experience",
        link: "#experience"
    },
    {
        name: "Projects",
        link: "#projects"
    },
]

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-neutral-950 text-neutral-300 border border-neutral-900 p-4 absolute w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Dylan MacLeod</h1>
            <div className="hidden md:flex space-x-4">
                {navbarItems.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <a  href={item.link} className="hover:text-accent transition-colors duration-300">
                  {item.name}
                  </a>
                  {item.name !== "Projects" && <Separator orientation="vertical" className="h-4 bg-neutral-700" />}
                </div>
                ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6 transition-transform duration-300" /> : <Menu className="h-6 w-6 transition-transform duration-300" />}
            </button>
          </div>
          <div className={`md:hidden mt-4 space-y-2 transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            {navbarItems.map((item) => (
              <a key={item.name} href={item.link} className="hover:text-accent transition-colors duration-300 block">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
    );
}

export default Navbar;