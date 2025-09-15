type BaseLayoutProps = {
  children: React.ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <div className="grid grid-cols-12 gap-4">{children}</div>
}
