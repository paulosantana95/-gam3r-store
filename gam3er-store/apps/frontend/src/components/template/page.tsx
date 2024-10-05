import { Footer } from './footer'
import { Header } from './header'

export interface PaginaProps {
  children: any
  className?: string
  noHeader?: boolean
  noFooter?: boolean
}

export function Page({ children, className, noFooter, noHeader }: PaginaProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: 'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)' }}
    >
      <div
        className="flex-1 flex flex-col w-screen"
        style={{ background: 'url("/background.png")' }}
      >
        {!noHeader && <Header />}
        <main className={`flex-1 flex flex-col ${className ?? ''}`}>
          {children}
        </main>
        {!noFooter && <Footer />}
      </div>
    </div>
  )
}
