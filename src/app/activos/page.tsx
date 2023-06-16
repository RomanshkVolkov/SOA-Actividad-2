'use client';
import React, { useEffect, useState } from 'react';
import crudsCollections from '@/utils/CrudsCollections';
import Modal from '../components/Modal';
import { Table } from '../components/Table';

const collectionName = 'actives';
const collection = crudsCollections[collectionName];
const fetchActives = async () => await collection.getItems();

export default async function Actives() {
   const [data, setData] = useState<any[]>([]);

   useEffect(() => {
      (async () => {
         const data = (await fetchActives()) || [];
         setData(
            data?.map((active: any) => {
               return {
                  ...active,
                  '': (
                     <Modal
                        collectionName={collectionName}
                        labelButton="Editar"
                        item={active}
                     />
                  ),
               };
            })
         );
      })();
   }, []);

   return (
      <div className="mt-3 border-gray-300 d-flex justify-center w-full">
         <h1 style={{ fontSize: 32 }}>Bienvenido a la pagina de activos</h1>
         <Modal collectionName={collectionName} labelButton="Crear" item={{}} />
         {data?.length > 0 ? (
            <div className="mt-3">
               <Table
                  theads={data ? data[0] : {}}
                  tbody={data as any}
                  collectionName="actives"
               />
            </div>
         ) : (
            <h1 className="w-full text-center mt-10">No hay datos</h1>
         )}
      </div>
   );
}
