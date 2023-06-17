import "../styles/globals.css";
import { font } from "./font";
import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My first nextjs page</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
