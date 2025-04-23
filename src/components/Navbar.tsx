import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow relative"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-xl font-bold text-white">Olivia Mallon</div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-white">
        {navItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{
              scale: 1.15,
              textShadow: "0px 0px 8px rgb(255 255 255 / 80%)",
            }}
          >
            <Link to={item.path} className="text-lg font-semibold">
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Burger Icon */}
      <button
        className="md:hidden z-50 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-gray-800 text-white p-6 flex flex-col space-y-4 z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;