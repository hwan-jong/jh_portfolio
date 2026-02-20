import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JH | Full-stack Developer',
  description: 'My portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
