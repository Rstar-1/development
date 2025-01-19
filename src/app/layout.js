import "./styles/globals.scss";
import "./styles/structure.scss";
import "./styles/font.scss";
import { Poppins, Open_Sans } from "next/font/google";
import StoreProvider from "./redux/StoreProvider";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "500", "400"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-opensans",
});

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        <div>
          <Navbar />
          <StoreProvider>{children}</StoreProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
