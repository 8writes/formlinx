import "./globals.css";

export const metadata = {
  title: "Formlinx | Html form API ",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
      {children}
      </body>
    </html>
  );
}

