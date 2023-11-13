//'use client'
import AuthContextProvider from '@/app/context/AuthContext'

//Import Components
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export const metadata = {
  title: 'Zulu Ceramics Shopping',
  description: 'Zulu Ceramic Shopping Page'
}

interface ShoppingLayoutProps {
  children: React.ReactNode
  isShoppingPage: boolean
}

export default function ShoppingLayout (props: ShoppingLayoutProps) {
  const { children, isShoppingPage } = props
  return (
    <AuthContextProvider>
      <html lang='en'>
        <body>
          <Header homePage={false} hasLine hasAuth={true} />
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </AuthContextProvider>
  )
}
