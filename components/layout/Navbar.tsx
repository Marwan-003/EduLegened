"use client";

import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Career Paths", href: "#career-paths" },
  { label: "Mentors", href: "#mentors" },
  { label: "About", href: "#about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      }, {rootMargin:"-10%"}
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleLinkClick(event: React.MouseEvent, href: string) {
  event.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  setIsOpen(false);
}

  return (
    <header className="relative border-b border-slate-200 py-4 lg:py-6">
      <div className="container flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded text-2xl font-bold  lg:text-3xl"
          
        >
          <GraduationCap
            aria-hidden="true"
            className="size-10 rounded-2xl bg-(--color-primary-500) p-2 text-white lg:size-12"
          />
          EduLegend
        </Link>

        <Button
          variant="text"
          className="px-2.5 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-7" />
          ) : (
            <Menu aria-hidden="true" className="size-7" />
          )}
        </Button>

        <nav
          id="main-menu"
          aria-label="Main"
          className={`${isOpen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col border-b border-slate-200 bg-white p-4 lg:static lg:flex lg:w-full lg:flex-row lg:items-center lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-6">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => handleLinkClick(event , link.href)}
                    className={`block rounded py-2 text-lg  ${
                      isActive
                        ? "font-semibold text-(--color-primary-700)"
                        : "text-slate-600 hover:text-(--color-primary-700)"
                    }`}
                    
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex flex-col gap-3 lg:mt-0 lg:ml-auto lg:flex-row lg:gap-5">
            <Button variant="text" className="w-full lg:w-auto">
              Sign In
            </Button>
            <Button variant="content" rounded className="w-full lg:w-auto">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;