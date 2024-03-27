import Header from "./components/NavBar/Header";
import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
