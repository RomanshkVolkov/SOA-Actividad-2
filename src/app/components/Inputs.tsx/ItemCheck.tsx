'use client';

import { useState } from 'react';

interface Props {
   label: string;
   attribute: string;
   item: any;
   onEditValue: (value: any, attribute: string) => void;
}

export default function ItemCheck(props: Props) {
   const { label, attribute, item, onEditValue } = props;

   return (
      <div className="flex justify-between w-full">
         <div className="flex items-center">
            <label htmlFor={`${attribute}-checkbox`}></label>
            <input
               type="checkbox"
               className="mr-2"
               checked={item[attribute]}
               onChange={(e) => onEditValue(e.target.checked ? true : false, attribute)}
            />
            <p>{item.label}</p>
         </div>
      </div>
   );
}
