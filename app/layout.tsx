import "@/styles/reset.css";
import "@/styles/globals.css";


//Import Components
// import Footer from "../components/Footer";



export const metadata = {
  title: "Zulu Ceramics",
  description: "Zulu Ceramic Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      {/* <Header/> */}
      <main>{children}</main>
      {/* <Footer/> */}
      </body>
    </html>
  );
}


