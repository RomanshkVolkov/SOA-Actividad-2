import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'SOA WEB CRUD',
   description: 'crud web app for soa',
};

const listPages = [
   { title: 'Empleados', path: '/empleados' },
   { title: 'Activos', path: '/activos' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${inter.className} bg-stone-700`}>
            <main className="flex flex-col items-center justify-between p-24">
               <div
                  className="flex flex-col items-center justify-center w-full rounded-lg"
                  style={{ backgroundColor: '#2E2E2E' }}>
                  <div className="flex flex-col items-center justify-center">
                     <ul className="flex flex-col items-center justify-center">
                        <li className="flex flex-row items-center justify-center">
                           {listPages.map((page, index) => (
                              <Link href={page.path} key={index}>
                                 <div
                                    className="p-2 rounded-lg m-2"
                                    style={{ backgroundColor: '#4B515D' }}>
                                    {page.title}
                                 </div>
                              </Link>
                           ))}
                        </li>
                     </ul>
                  </div>
               </div>
            </main>
            {children}
         </body>
      </html>
   );
}
