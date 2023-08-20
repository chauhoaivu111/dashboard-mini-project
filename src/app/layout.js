import "./globals.scss";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import { ThemeProviderMode } from "./context/themeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dash Doard",
  description: "Generated by create next app",
  icons: [{ rel: 'icon', url: 'favicon.ico' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <ThemeProviderMode>
            <AuthProvider>{children}</AuthProvider>
          </ThemeProviderMode>
        </main>
      </body>
    </html>
  );
}
