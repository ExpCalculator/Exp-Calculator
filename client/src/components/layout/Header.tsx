import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Calculator" },
  { href: "/rules", label: "Rules" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/help", label: "Help" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-cyan-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-cyan-500">EXP Interest Calculator</h1>
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <span className="text-cyan-500 hover:text-cyan-400 cursor-pointer">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-cyan-500" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black border-cyan-500">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href}>
                    <span 
                      className="text-cyan-500 hover:text-cyan-400 cursor-pointer block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
