import { siteMetaData } from "@config/siteMetaData";
import { Providers } from "@components/Providers";
import "./globals.css";

export const metadata = {
  // metadataBase: new URL("url of website here"),
  title: siteMetaData.title,
  description: siteMetaData.description,
  openGraph: {
    title: siteMetaData.title,
    description: siteMetaData.description,
    type: "website",
    // locale: "en_US",
    // url: "url of website here",
    siteName: "CuciKereta",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
