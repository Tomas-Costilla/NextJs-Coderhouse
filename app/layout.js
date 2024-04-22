import Header from "./components/NavBar/Header";
import { CartProvider } from "./components/context/CartContext";
import "./globals.css";
import { Providers } from "./providers";
import { ChakraProvider } from "@chakra-ui/react"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <CartProvider>
          <Providers>
            <ChakraProvider>
              <Header />
              {children}
            </ChakraProvider>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
