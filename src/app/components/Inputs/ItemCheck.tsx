'use client';

import { useState } from 'react';

interface Props {
   label: string;
   attribute: string;
   item: any;
   onEditValue: (value: any, attribute: string) => void;
   disabled?: boolean;
}

export default function ItemCheck(props: Props) {
   const { label, attribute, item, onEditValue, disabled = false } = props;

   return (
      <div className="flex justify-between w-full">
         <label htmlFor={`${attribute}-checkbox`}>{label}: </label>
         <input
            id={`${attribute}-checkbox`}
            type="checkbox"
            className="mr-2 w-8 h-8"
            checked={item[attribute]}
            onChange={(e) => onEditValue(e.target.checked ? true : false, attribute)}
            disabled={disabled}
         />
      </div>
   );
}
