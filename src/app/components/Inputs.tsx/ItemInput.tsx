'use client';

import React, { useState } from 'react';

interface Props {
   label: string;
   attribute: string;
   value: string;
   onEditValue: (value: string, attribute: string) => void;
}

export default function ItemInput(props: Props) {
   const { label, attribute, value, onEditValue } = props;

   return (
      <React.Fragment>
         <div className="flex justify-between">
            <label htmlFor={`${attribute}-input`}>{label}:&nbsp;</label>
            <input
               id={`${attribute}-input`}
               className="text-black rounded-md p-1"
               type="text"
               placeholder={label}
               value={value}
               onChange={(e) => onEditValue(e.target.value, attribute)}
            />
         </div>
      </React.Fragment>
   );
}
