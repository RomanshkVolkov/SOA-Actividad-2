import { Header } from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOA WEB CRUD",
  description: "crud web app for soa",
};

const listPages = [
  { title: "Empleados", path: "/empleados" },
  { title: "Activos", path: "/activos" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", background: "#FDFDFD", margin: "1vh 4vw"}}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
