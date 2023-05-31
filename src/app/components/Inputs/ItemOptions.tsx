'use client';
import React from 'react';

interface Props {
   label: string;
   selected: any;
   attribute: string;
   options: any[];
   onEditValue: (value: any, attribute: string) => void;
   disabled?: boolean;
}

export default function ItemOptions(props: Props) {
   const { label, selected, options, attribute, onEditValue, disabled = false } = props;
   console.log(selected);
   return (
      <React.Fragment>
         <div className="flex justify-between w-full">
            <label htmlFor={`${attribute}-input-select`}>{label}:&nbsp;</label>
            <select
               id={`${attribute}-input-select`}
               className="text-black p-1 rounded-md w-60"
               onChange={(e) => onEditValue(Number(e.target.value), attribute)}
               disabled={disabled}>
               <option value={selected?.id ?? '0'}>{selected?.label ?? 'Asignar'}</option>
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
