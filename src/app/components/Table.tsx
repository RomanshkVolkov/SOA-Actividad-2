'use client';
import React from 'react';
import collections from '@/utils/CrudsCollections';

interface Props {
   theads: any;
   tbody: any[];
   collectionName: string;
}
export const Table = (props: Props) => {
   const { theads, tbody, collectionName } = props;
   const handleDelete = async (id: number) => {
      await collections[collectionName].deleteItem(id);
      window.location.reload();
   };

   return (
      <div className="flex justify-center w-full">
         <table className="w-full">
            <thead>
               <tr>
                  {Object.keys(theads).map(
                     (key, index) => index !== 0 && <th key={index}>{key}</th>
                  )}
                  <th />
               </tr>
            </thead>
            <tbody>
               {tbody.map((row, index) => (
                  <tr key={index}>
                     {Object.values(row).map((value, index) => (
                        <React.Fragment key={index}>
                           {index !== 0 && <td>{value as any}</td>}
                        </React.Fragment>
                     ))}
                     <td>
                        <button onClick={() => handleDelete(row.id)}>Eliminar</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};
