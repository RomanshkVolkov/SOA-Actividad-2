import React from 'react';
import ItemInput from '../Inputs/ItemInput';
import ItemDate from '../Inputs/ItemDate';
import ItemCheck from '../Inputs/ItemCheck';

interface Props {
   func: 'Editar' | 'Crear';
   onEditValue: (value: any, attribute: string) => void;
   item: any;
}

export default function EmployeeDetails(props: Props) {
   const { func, onEditValue, item } = props;

   const isCreate = func === 'Crear';

   return (
      <React.Fragment>
         <div className="flex justify-center flex-col w-full">
            <h1 className="w-full text-center mb-4">Detalles del empleado</h1>
            <div className="mt-2" />
            <div className="flex flex-col">
               <ItemInput
                  label="Numero de empleado"
                  onEditValue={onEditValue}
                  value={item['No. Empleado']}
                  attribute="No. Empleado"
                  type="number"
                  disabled={!isCreate}
               />
               <div className="mt-3" />
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
               <ItemDate
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
               <div className="mt-3" />
               <ItemInput
                  label="CURP"
                  onEditValue={onEditValue}
                  value={item['CURP']}
                  attribute="CURP"
               />
               <div className="mt-3" />
               <ItemCheck
                  label="Activo"
                  item={item}
                  onEditValue={onEditValue}
                  attribute="Estado"
               />
               <div className="mt-5" />
            </div>
         </div>
      </React.Fragment>
   );
}
