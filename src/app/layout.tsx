import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'

const orbitron = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nexystem',
  description: 'Transformando ideias em soluções digitais inovadoras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
