'use client'

import BaseLayout from '@/components/BaseLayout'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
