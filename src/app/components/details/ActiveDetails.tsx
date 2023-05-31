/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useState } from 'react';
import ItemInput from '../Inputs/ItemInput';
import ItemOptions from '../Inputs/ItemOptions';
import ItemCheck from '../Inputs/ItemCheck';
import employee from '@/api/employee';
import ItemDate from '../Inputs/ItemDate';

interface Props {
   onEditValue: (value: any, attribute: string) => void;
   item: any;
   func: 'Editar' | 'Crear';
}

export default function ActiveDetails(props: Props) {
   const { onEditValue, item, func } = props;
   const isCreate = func === 'Crear';
   const [employees, setEmployees] = useState<any[]>([]);
   const [activesEmployes, setActivesEmployes] = useState<any[]>([]);

   useEffect(() => {
      (async () => {
         setEmployees(await employee.getEmployeesActives());
         onEditValue(item.Estado === 'Disponible' ? true : false, 'IsAsignable');
         setActivesEmployes(await employee.getEmployesByActive());
         console.log(activesEmployes);
      })();
   }, []);

   useEffect(() => {
      if (!item['IsAsignable']) {
         onEditValue(null, 'employeeId');
         onEditValue(null, 'assignmentDate');
         onEditValue(null, 'deadLine');
         onEditValue(null, 'releaseDate');
      }
   }, [item['IsAsignable']]);

   const findEmployee = (id: number) => employees.find((e) => e.id === id);

   const findEmployeeActives = (id: number, attr: string) => {
      const foundEmployee = activesEmployes?.find((e) => e?.activo_Id === id);
      return foundEmployee ? foundEmployee[attr] : undefined;
   };

   const asignEmployee = (it: any) => {
      Object.keys(it)?.forEach((key, value) => {
         it[key] = findEmployeeActives(it[key], key);
      });
      return it;
   };

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
                  label="Descripción"
                  onEditValue={onEditValue}
                  value={item['Descripción']}
                  attribute="Descripción"
               />
               {!isCreate && (
                  <React.Fragment>
                     <div className="mt-3" />
                     <ItemCheck
                        label="Asignar"
                        attribute="IsAsignable"
                        value={item['IsAsignable']}
                        onEditValue={onEditValue}
                        disabled={item.Estado === 'Disponible' ? false : true}
                     />
                     <div className="mt-3" />

                     <ItemOptions
                        label="Empleado asignado"
                        selected={
                           asignEmployee({
                              id: item['No. Activo'],
                              label: item['No. Activo'],
                           }) || findEmployee(item['employeeId'])
                        }
                        options={employees}
                        attribute="employeeId"
                        onEditValue={onEditValue}
                        disabled={!item['IsAsignable']}
                     />
                     <div className="mt-3" />
                     <ItemDate
                        label="Fecha de asignación"
                        onEditValue={onEditValue}
                        value={
                           findEmployeeActives(item['No. Activo'], 'fechaAsignacion') ||
                           item['assignmentDate']
                        }
                        attribute="assignmentDate"
                        disabled={!item['IsAsignable']}
                     />
                     <ItemDate
                        label="Fecha de entrega"
                        onEditValue={onEditValue}
                        value={
                           findEmployeeActives(item['No. Activo'], 'fechaEntrega') ||
                           item['deadLine']
                        }
                        attribute="deadLine"
                        disabled={!item['IsAsignable']}
                     />
                     <ItemDate
                        label="Fecha de devolución"
                        onEditValue={onEditValue}
                        value={item['releaseDate']}
                        attribute="releaseDate"
                        disabled={!item['IsAsignable'] && item['Estado'] === 'Disponible'}
                     />
                  </React.Fragment>
               )}
            </div>
         </div>
      </React.Fragment>
   );
}
