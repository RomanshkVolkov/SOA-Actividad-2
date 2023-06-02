'use client';
import React, { useEffect, useState } from 'react';
import { Table } from '../components/Table';
import Modal from '../components/Modal';
import crudsCollections from '@/utils/CrudsCollections';

const collectionName = 'employees';

const collection = crudsCollections[collectionName];
const fetchEmployees = async () => await collection.getItems();

export default async function Employes() {
   const [data, setData] = useState<any[]>([]);
   useEffect(() => {
      (async () => {
         const data = (await fetchEmployees()) || [];
         setData(
            data.map((employee: any) => {
               return {
                  ...employee,
                  '': (
                     <Modal
                        collectionName={collectionName}
                        labelButton="Editar"
                        item={employee}
                     />
                  ),
               };
            })
         );
      })();
   }, []);
   return (
      <div>
         <h1 style={{ fontSize: 32 }}>Bienvenido a la pagina de empleados</h1>
         <Modal collectionName={collectionName} labelButton="Crear" item={{}} />

         {data?.length > 0 ? (
            <div className="mt-3">
               <Table
                  theads={data ? data[0] : {}}
                  tbody={data as any}
                  collectionName="employees"
               />
            </div>
         ) : (
            <h1 className="w-full text-center mt-10">No hay datos</h1>
         )}
      </div>
   );
}
