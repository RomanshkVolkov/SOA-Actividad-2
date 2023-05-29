'use client';
import React, { useState } from 'react';
import ItemInput from '../Inputs.tsx/ItemInput';
import ItemOptions from '../Inputs.tsx/ItemOptions';

interface Props {
   options: any[];
   onEditValue: (value: any, attribute: string) => void;
   item: any;
}

export default function ActiveDetails(props: Props) {
   const { options, onEditValue, item } = props;

   console.log(options);
   return (
      <React.Fragment>
         <div className="flex justify-center flex-col w-full">
            <h2>Detalles del empleado</h2>
            <div className="mt-2" />
            <div className="flex flex-col">
               <ItemInput
                  label="Nombre"
                  onEditValue={onEditValue}
                  value={item['Nombre']}
                  attribute="Nombre"
               />
               <div className="mt-3" />

               <ItemInput
                  label="Descrioción"
                  onEditValue={onEditValue}
                  value={item['Descripción']}
                  attribute="Descripción"
               />
               <div className="mt-3" />

               <ItemOptions
                  label="Empleado asignado"
                  selected={item['Empleado asignado']}
                  options={options}
                  attribute="Estado"
                  value={item['Estado']}
                  onEditValue={onEditValue}
               />
               <div className="mt-5" />
            </div>
         </div>
      </React.Fragment>
   );
}
