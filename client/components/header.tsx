"use client"

import { useState } from "react"
import Logo from "./logo"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-6 py-2 text-primary border border-primary rounded-lg hover:bg-primary/10 transition-colors font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all font-medium">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#features" className="block text-foreground/70 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-foreground/70 hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="block text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
