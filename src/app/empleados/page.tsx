import React from 'react';
import { Table } from '../components/Table';
import { InferGetServerSidePropsType } from 'next';
import axios from 'axios';
import Modal from '../components/Modal';
import crudsCollections from '@/utils/CrudsCollections';

const collectionName = 'employees';

const collection = crudsCollections[collectionName];
const fetchEmployees = async () => await collection.getItems();

export default async function Employes({
   params,
}: InferGetServerSidePropsType<typeof fetchEmployees>) {
   const data =
      (await fetchEmployees())?.map((employee: any) => {
         return {
            ...employee,
            '': (
               <Modal
                  collectionName={collectionName}
                  labelButton="Editar"
                  item={employee}
               />
            ),
            _: <button>Eliminar</button>,
         };
      }) || [];
   return (
      <div className="mt-5 border-gray-300 d-flex justify-center w-full">
         <h1 className="text-3xl text-center mb-3">
            Bienvenido a la pagina de empleados
         </h1>
         <Modal collectionName={collectionName} labelButton="Crear" item={{}} />

         {data?.length > 0 ? (
            <div className="mt-3">
               <Table theads={data ? data[0] : {}} tbody={data as any} />
            </div>
         ) : (
            <h1 className="w-full text-center mt-10">No hay datos</h1>
         )}
      </div>
   );
}
