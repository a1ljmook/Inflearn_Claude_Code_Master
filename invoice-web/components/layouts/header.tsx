"use client";

import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="h-16 border-b bg-background px-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md w-full hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="검색..."
            className="pl-9"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive border-2 border-background" />
        </Button>
        <ThemeToggle />
        <div className="h-8 w-8 rounded-full bg-muted overflow-hidden border">
          <img
            src="https://github.com/shadcn.png"
            alt="User Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
