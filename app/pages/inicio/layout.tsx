export default function InicioLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {children}
    </main>
  )
}