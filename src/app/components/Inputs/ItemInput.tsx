'use client';

import React, { useState } from 'react';

interface Props {
   label: string;
   onEditValue: (value: string, attribute: string) => void;
   value: string;
   attribute: string;
   type?: string;
   disabled?: boolean;
}

export default function ItemInput(props: Props) {
   const {
      label,
      onEditValue,
      value,
      attribute,
      type = 'text',
      disabled = false,
   } = props;

   return (
      <React.Fragment>
         <div className="flex justify-between">
            <label htmlFor={`${attribute}-input`}>{label}:&nbsp;</label>
            <input
               id={`${attribute}-input`}
               className="text-black rounded-md p-1"
               type={type}
               placeholder={label}
               value={value}
               onChange={(e) => onEditValue(e.target.value, attribute)}
               disabled={disabled}
            />
         </div>
      </React.Fragment>
   );
}
