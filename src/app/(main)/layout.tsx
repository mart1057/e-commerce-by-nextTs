'use client'

import { NavigationMenuDemo } from '@/components/Navigation'
export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <NavigationMenuDemo />
      </div>
      <div className="col-span-12">
        {children}
      </div>
    </div>
  )
}
