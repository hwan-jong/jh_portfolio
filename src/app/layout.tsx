import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JH | Java Backend Developer',
  description: '포트폴리오 · 4년차 Java 백엔드 개발자 (프론트/레거시 고도화 경험)',
  openGraph: {
    title: 'JH | Java Backend Developer',
    description:
      '운영형 업무시스템에서 데이터 정합성과 성능을 함께 챙기며 백엔드를 중심으로 안정적인 서비스 흐름을 만드는 개발자 포트폴리오',
    url: 'https://jh-portfolio-eight.vercel.app/',
    siteName: 'JH Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
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
