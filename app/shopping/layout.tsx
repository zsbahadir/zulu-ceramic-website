//'use client'
import { AuthContextProvider } from '@/app/context/AuthContext'

//Import Components
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata = {
  title: 'Zulu Ceramics Shopping',
  description: 'Zulu Ceramic Shopping Page'
}

interface ShoppingLayoutProps {
  children: React.ReactNode
}

export default function ShoppingLayout (props: ShoppingLayoutProps) {
  const { children } = props
  return (
    <html lang='en'>
      <body>
        <AuthContextProvider>
          <Header homePage={false} hasLine hasAuth={true} />
          {children}
          {/* <Footer /> */}
        </AuthContextProvider>
      </body>
    </html>
  )
}
