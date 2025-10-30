"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "/research" },
  { name: "Experiments", path: "/experiments" },
  { name: "Blog", path: "/blog" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
    >
      <motion.nav
        key={theme} // Key to force remount for theme changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`relative px-4 py-3 bg-[var(--primary-gray)]`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative flex items-center justify-between"
          >
            {/* Logo - Mobile only */}
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-[var(--primary-white)]"
              >
                Yuvraj Prajapati
              </Link>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <motion.div 
              className="flex-1 hidden md:flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <ul className="flex items-center space-x-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`px-4 py-2 text-xs font-medium text-[var(--primary-white)] ${
                          isActive ? "font-semibold" : ""
                        } transition-colors duration-200`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Right Side - Theme Toggle & Mobile Menu */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              {/* Theme Toggle Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg"
                aria-label="Toggle theme"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <AnimatePresence mode="wait">
                  {theme === "dark" ? (
                    <motion.svg
                      key="sun"
                      className="w-5 h-5 text-[var(--primary-white-muted)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: -180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <circle cx="12" cy="12" r="5" />
                      <line
                        x1="12"
                        y1="1"
                        x2="12"
                        y2="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="12"
                        y1="21"
                        x2="12"
                        y2="23"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4.22"
                        y1="4.22"
                        x2="5.64"
                        y2="5.64"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="18.36"
                        y1="18.36"
                        x2="19.78"
                        y2="19.78"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="12"
                        x2="3"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="21"
                        y1="12"
                        x2="23"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4.22"
                        y1="19.78"
                        x2="5.64"
                        y2="18.36"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <line
                        x1="18.36"
                        y1="5.64"
                        x2="19.78"
                        y2="4.22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="moon"
                      className="w-5 h-5 text-[var(--primary-white-muted)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ rotate: 180, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -180, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg
                  className="w-5 h-5 text-[var(--primary-white)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden pt-4 bg-[var(--primary-gray)] overflow-hidden"
              >
                <ul className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;

                    return (
                      <motion.li 
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block px-4 py-2.5 text-xs font-medium text-[var(--primary-white)] ${
                            isActive ? "font-semibold" : ""
                          } transition-colors duration-200`}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}