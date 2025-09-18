'use client'

import { NavigationMenuDemo } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full">
        <NavigationMenuDemo />
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="w-full mt-14 md:mt-60">
        <Footer />
      </footer>
    </div>
  )
}
