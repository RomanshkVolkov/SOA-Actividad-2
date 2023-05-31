'use client';
import React from 'react';
import Link from 'next/link'

export const Header = () => {
  const listPages = [
  { title: "Empleados", path: "/empleados" },
  { title: "Activos", path: "/activos" },
];
   return (
     <div style={{display: 'flex', width: '95vw', marginBottom: "10vh", justifyContent: "end"}}>
            {listPages.map((page, index) => (
              <Link href={page.path} key={index}>
                <div
                  style={{ backgroundColor: "#33658A", padding: "1vh 4vw", textAlign: "center", marginRight: "1vw", borderRadius: "8px", marginTop: "3vh", color: "#FDFDFD"}}>
                  {page.title}
                </div>
              </Link>
            ))}
          </div> 
   );
};
