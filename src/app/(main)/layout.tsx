'use client'
export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div>header</div>
        <main>{children}</main>
        <div>footer</div>
      </div>
    </div>
  )
}
