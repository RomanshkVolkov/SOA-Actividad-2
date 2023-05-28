import React from 'react';

interface Props {
   theads: any;
   tbody: any[];
}
export const Table = (props: Props) => {
   const { theads, tbody } = props;
   return (
      <div className="flex justify-center w-full">
         <table className="w-full">
            <thead>
               <tr>
                  {Object.keys(theads).map((key, index) => (
                     <th key={index}>{key}</th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {tbody.map((row, index) => (
                  <tr key={index}>
                     {Object.values(row).map((value, index) => (
                        <td key={index}>{value as any}</td>
                     ))}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};
