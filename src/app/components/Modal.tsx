'use client';

import { useEffect, useState } from 'react';
import DetailsSelector from './details.tsx/DetailsSelector';
import crudsCollections from '@/utils/CrudsCollections';

interface Props {
   collectionName: any;
   options?: any[];
   labelButton: string;
   item: any;
}
export default function Modal(props: Props) {
   const { collectionName, options = [], labelButton, item } = props;
   const [showModal, setShowModal] = useState(false);
   const [selectedItem, setSelectedItem] = useState(item);
   const [collection, setCollection] = useState(crudsCollections[collectionName]);

   useEffect(() => {
      if (!collectionName) return;
      setCollection(crudsCollections[collectionName]);
      console.log(collection);
   }, [collectionName]);

   console.log(options);

   const handleOnUpdateValue = (value: any, attribute: string) => {
      setSelectedItem({ ...selectedItem, [attribute]: value });
   };
   return (
      <div className="flex justify-center">
         {showModal && (
            <div
               className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 p-20 rounded-lg"
               style={{ backgroundColor: '#4B515D' }}>
               <DetailsSelector
                  select={collection.detailsComponent}
                  options={options}
                  onEditValue={handleOnUpdateValue}
                  item={selectedItem}
               />

               <div className="flex justify-center mt-5 w-full">
                  <button
                     className="mt-5 w-full bg-gray-500 rounded-md p-2 mr-4"
                     onClick={() => setShowModal(false)}>
                     Cerrar
                  </button>

                  <button
                     className="mt-5 w-full bg-gray-500 rounded-md p-2"
                     onClick={() => setShowModal(false)}>
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
