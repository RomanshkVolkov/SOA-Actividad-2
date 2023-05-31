/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import DetailsSelector from './details/DetailsSelector';
import crudsCollections from '@/utils/CrudsCollections';

interface Props {
   collectionName: string;
   labelButton: 'Editar' | 'Crear';
   item: any;
}
export default function Modal(props: Props) {
   const { collectionName, labelButton, item } = props;
   const [showModal, setShowModal] = useState(false);
   const [selectedItem, setSelectedItem] = useState(item);

   useEffect(() => {
      setSelectedItem(item);
   }, [showModal]);

   const validateItem = crudsCollections[collectionName].validate;

   const handleCreate = async () => {
      if (validateItem(selectedItem)) {
         const close = await crudsCollections[collectionName]?.createItem(selectedItem);
         if (close) setShowModal(false);
         window.location.reload();
      }
   };

   const handleUpdate = async () => {
      if (validateItem(selectedItem)) {
         const close = await crudsCollections[collectionName].updateItem(selectedItem);
         if (close) setShowModal(false);
         window.location.reload();
      }
   };

   const handleOnUpdateValue = (value: any, attribute: string) => {
      setSelectedItem({ ...selectedItem, [attribute]: value });
   };

   return (
      <div className="flex justify-center">
         {showModal && (
            <div
               className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 py-12 px-12 rounded-lg"
               style={{ backgroundColor: '#4B515D' }}>
               <DetailsSelector
                  func={labelButton}
                  select={crudsCollections[collectionName]?.detailsComponent}
                  onEditValue={handleOnUpdateValue}
                  item={selectedItem}
               />

               <div className="flex justify-center mt-1 w-full">
                  <button
                     className="mt-5 w-full bg-gray-500 rounded-md p-2 mr-4"
                     onClick={() => setShowModal(false)}>
                     Cerrar
                  </button>

                  <button
                     className="mt-5 w-full bg-gray-500 rounded-md p-2"
                     onClick={() => {
                        if (labelButton === 'Editar') handleUpdate();
                        else handleCreate();
                     }}>
                     Guardar
                  </button>
               </div>
            </div>
         )}
         <button
            className="p-1 rounded-md"
            onClick={() => setShowModal(!showModal)}
            style={{ background: '#4B515D' }}>
            {labelButton}
         </button>
      </div>
   );
}
