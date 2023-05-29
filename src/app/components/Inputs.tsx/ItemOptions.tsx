'use client';
import React from 'react';

interface Props {
   label: string;
   selected: any;
   attribute: string;
   value: string;
   options: any[];
   onEditValue: (value: any, attribute: string) => void;
}

export default function ItemOptions(props: Props) {
   const { label, selected, options, attribute, value, onEditValue } = props;
   console.log(selected);
   return (
      <React.Fragment>
         <div className="flex justify-between w-full">
            <label htmlFor={`${attribute}-input-select`}>{label}:&nbsp;</label>
            <select
               id={`${attribute}-input-select`}
               className="text-black p-1 rounded-md w-60">
               <option value="0">Asignar</option>
               {options.map((option) => (
                  <option key={option.id} value={option.id}>
                     {option.label}
                  </option>
               ))}
            </select>
         </div>
      </React.Fragment>
   );
}
