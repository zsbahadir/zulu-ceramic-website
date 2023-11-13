//Import Components
import Footer from '@/components/layout/Footer'

interface HomeLayoutProps {
  children: React.ReactNode
}

export default function HomeLayout (props: HomeLayoutProps) {
  const { children } = props
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
