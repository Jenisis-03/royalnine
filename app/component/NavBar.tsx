"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Home, Box, Edit, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { href: "#header", icon: <Home size={20} />, text: "Home" },
    { href: "#products", icon: <Box size={20} />, text: "Products" },
    { href: "#blog", icon: <Edit size={20} />, text: "Blog" },
    { href: "#footer", icon: <Mail size={20} />, text: "Contact" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="min-h-screen flex">
        <nav className="fixed top-0 left-0 h-full z-50">
          {/* Desktop Sidebar */}
          <div
            className={`hidden lg:flex flex-col ${
              isCollapsed ? "w-20" : "w-64"
            } h-full transition-all duration-300 bg-[#000401] shadow-lg`}
          >
            <div className="flex items-center justify-between px-4 py-4">
              <h1
                className={`text-2xl font-bold transition-all duration-300 ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold font-merriweather text-[#bcfd49]">
                      Royal
                    </span>
                    <span className="text-5xl font-extrabold text-[#ffc400] ml-2">
                      9
                    </span>
                  </div>
                  <span className="text-2xl font-semibold font-merriweather text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f00] to-[#bcfd49] italic">
                    Engine Oil
                  </span>
                </div>
              </h1>
              <Button
                variant="ghost"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="text-[#bcfd49] hover:text-[#bcfd49]"
              >
                {isCollapsed ? <Menu size={24} /> : <X size={24} />}
              </Button>
            </div>

            <ul className="space-y-6 mt-10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-4 px-4 py-2 hover:text-[#bcfd49] transition text-[#bcfd49]"
                  >
                    {item.icon}
                    {!isCollapsed && <span>{item.text}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              aria-label="Open Menu"
              className="fixed top-4 left-4 bg-[#000401]"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} className="text-[#bcfd49]" />
            </Button>

            {/* Mobile Sidebar */}
            {isOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                className="fixed top-0 left-0 w-64 h-full bg-[#000401] shadow-lg"
              >
                <div className="flex justify-between p-4">
                  {/* Title aligned to the left */}
                  <div className="text-left space-y-2">
                    <h1 className="text-3xl font-extrabold text-[#bcfd49] transition-all duration-300">
                      <div className="text-4xl font-extrabold text-[#fff]">
                        Royal{" "}
                        <span className="text-5xl font-extrabold text-[#ffc400]">
                          9
                        </span>
                      </div>
                    </h1>
                    <div className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff6f00] to-[#bcfd49] italic">
                      Engine Oil
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="C"
                  >
                    <X size={24} className="text-[#bcfd49]" />
                  </Button>
                </div>

                <ul className="space-y-6 mt-8 p-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex items-center justify-center space-x-4 py-2 text-[#bcfd49] hover:text-[#bcfd49] transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </nav>

        <main
          className={`flex-1 transition-all duration-300 ${
            isCollapsed ? "lg:ml-20" : "lg:ml-64"
          } ml-0 text-[#bcfd49]`}
        ></main>
      </div>
    </>
  );
};

export default NavBar;
