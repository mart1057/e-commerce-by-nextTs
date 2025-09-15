'use client'

import { NavigationMenu } from '@/components/Navigation'
export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-gray-100">
        <NavigationMenu />
      </div>
      <div className="col-span-12">
        {children}
      </div>
    </div>
  )
}
