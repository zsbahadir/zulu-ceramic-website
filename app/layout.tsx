import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}


{/* <html lang="en">
<body>
<Header/>
<main>{children}</main>
<Footer/>
</body>
</html> */}