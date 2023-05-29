import React from 'react';
import ItemInput from '../Inputs.tsx/ItemInput';

interface Props {
   options: any[];
   onEditValue: (value: any, attribute: string) => void;
   item: any;
}

export default function EmployeeDetails(props: Props) {
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
                  label="Apellido"
                  onEditValue={onEditValue}
                  value={item['Apellidos']}
                  attribute="Apellidos"
               />
               <div className="mt-3" />

               <ItemInput
                  label="Fecha de nacimiento"
                  onEditValue={onEditValue}
                  value={item['Fecha de nacimiento']}
                  attribute="Fecha de nacimiento"
               />
               <div className="mt-3" />

               <ItemInput
                  label="Correo"
                  onEditValue={onEditValue}
                  value={item['Correo']}
                  attribute="Correo"
               />
               <div className="mt-5" />
            </div>
         </div>
      </React.Fragment>
   );
}
