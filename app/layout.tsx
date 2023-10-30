import '@/styles/reset.css'
import '@/styles/globals.css'

import ShoppingLayout from './shopping/layout'
import HomeLayout from './home/layout'

//Import Components
// import Footer from "../components/Footer";

export const metadata = {
  title: 'Zulu Ceramics',
  description: 'Zulu Ceramic Website'
}

interface RootLayoutProps {
  children: React.ReactNode
  isShoppingPage?: boolean
}

export default function RootLayout (props: RootLayoutProps) {
  const { children, isShoppingPage } = props
  return (
    <html lang='en'>
      <body>
        {isShoppingPage ? (
          <ShoppingLayout>{children}</ShoppingLayout>
        ) : (
          <HomeLayout>{children}</HomeLayout>
        )}
        {/* <div id='modal-root'></div> */}
      </body>
    </html>
  )
}
