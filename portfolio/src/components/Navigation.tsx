import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/config/site";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#profile", label: "ABOUT" },
  { href: "#work", label: "WORK" },
  { href: "#capabilities", label: "SKILLS" },
  { href: "#journey", label: "JOURNEY" },
  { href: "#contact", label: "CONTACT" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <Link
            to="/"
            className="font-display text-xl tracking-[0.15em] text-white"
            onClick={() => setOpen(false)}
          >
            {SITE.shortName}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Magnetic strength={0.15}>
                  <a
                    href={link.href}
                    className="font-mono text-[11px] tracking-[0.2em] text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-primary)]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-display text-4xl tracking-[0.12em] text-[var(--color-text-primary)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
