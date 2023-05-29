import React from 'react';
import crudsCollections from '@/utils/CrudsCollections';
import Modal from '../components/Modal';
import { Table } from '../components/Table';
import employee from '@/api/employee';

const collectionName = 'actives';
const collection = crudsCollections[collectionName];
const fetchActives = async () => await collection.getItems();
const fetchEmployees = async () => await employee.getEmployeesActives();

export default async function Actives() {
   const options = await fetchEmployees();
   const data =
      (await fetchActives())?.map((active: any) => {
         return {
            ...active,
            '': (
               <Modal
                  options={options}
                  collectionName={collectionName}
                  labelButton="Editar"
                  item={active}
               />
            ),
            _: <button>Eliminar</button>,
         };
      }) || [];

   return (
      <div className="mt-5 border-gray-300 d-flex justify-center w-full">
         <h1 className="text-3xl text-center mb-5">Bienvenido a la pagina de activos</h1>
         <Modal
            options={options}
            collectionName={collectionName}
            labelButton="Crear"
            item={{}}
         />

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
