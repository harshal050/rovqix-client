"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-5"
    >
      <div
        className={cn(
          "glass-panel flex w-full max-w-5xl items-center justify-between gap-4 rounded-full px-3 py-2 transition-shadow duration-300 sm:px-4",
          scrolled && "shadow-[0_8px_40px_-12px_rgba(255,255,255,0.15)]"
        )}
      >
        <Link href="/" className="flex items-center pl-2">
          <Image
            src="/logo.png"
            alt="ROVQIX"
            width={504}
            height={100}
            className="h-5 w-auto dark:invert"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-foreground/[0.06]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="sm"
            className="hidden rounded-full sm:inline-flex"
          >
            Start a Project
            <ArrowUpRight data-icon="inline-end" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" className="rounded-full lg:hidden" />
              }
            >
              <MenuIcon className="size-4" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader>
                <SheetTitle className="font-heading">ROVQIX</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
                      pathname === link.href && "bg-foreground/5 text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <ThemeToggle />
                <Button
                  render={<Link href="/contact" onClick={() => setOpen(false)} />}
                  nativeButton={false}
                >
                  Start a Project
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
