"use client"

import Logo from "./logo"

export default function LogoShowcase() {
  return (
    <div className="space-y-12 p-8 bg-background">
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Logo Variations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Full Logo */}
          <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg border border-border">
            <Logo variant="full" size="lg" />
            <p className="mt-4 text-sm text-muted-foreground">Full Logo (Stacked)</p>
          </div>

          {/* Horizontal Logo */}
          <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg border border-border">
            <Logo variant="horizontal" size="lg" />
            <p className="mt-4 text-sm text-muted-foreground">Horizontal Logo</p>
          </div>

          {/* Icon Only */}
          <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg border border-border">
            <Logo variant="icon" size="lg" />
            <p className="mt-4 text-sm text-muted-foreground">Icon Only</p>
          </div>
        </div>
      </div>

      {/* Size Variations */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Size Variations</h2>

        <div className="flex items-center gap-8 p-8 bg-card rounded-lg border border-border">
          <div className="flex flex-col items-center gap-2">
            <Logo variant="icon" size="sm" />
            <p className="text-xs text-muted-foreground">Small</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="icon" size="md" />
            <p className="text-xs text-muted-foreground">Medium</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logo variant="icon" size="lg" />
            <p className="text-xs text-muted-foreground">Large</p>
          </div>
        </div>
      </div>

      {/* Color Palette */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-foreground">Color Palette</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-primary" />
            <p className="text-xs font-medium">Primary</p>
            <p className="text-xs text-muted-foreground">#0891b2</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-secondary" />
            <p className="text-xs font-medium">Secondary</p>
            <p className="text-xs text-muted-foreground">#4f46e5</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-accent" />
            <p className="text-xs font-medium">Accent</p>
            <p className="text-xs text-muted-foreground">#ea580c</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-green-600" />
            <p className="text-xs font-medium">Success</p>
            <p className="text-xs text-muted-foreground">#16a34a</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-lg bg-red-600" />
            <p className="text-xs font-medium">Error</p>
            <p className="text-xs text-muted-foreground">#dc2626</p>
          </div>
        </div>
      </div>
    </div>
  )
}
