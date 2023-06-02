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
         if (close){
 setShowModal(false);
 
         window.location.reload();
         }
      }
   };

   const handleUpdate = async () => {
      console.log(selectedItem)
         const close = await crudsCollections[collectionName]?.updateItem(selectedItem);
         console.log(close)
         if (close){
setShowModal(false);
         window.location.reload();
         } 
   };

   const handleOnUpdateValue = (value: any, attribute: string) => {
      setSelectedItem({ ...selectedItem, [attribute]: value });
   };

   return (
      <div style={{ margin: '4vh 0' }}>
         {showModal && (
            <div
               className="fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 py-12 px-12 rounded-lg"
               style={{
                  background: '#FDFDFD',
                  boxShadow: '5px 5px 5px rgb(0,0,0, 0.3)',
               }}>
               <DetailsSelector
                  func={labelButton}
                  select={crudsCollections[collectionName]?.detailsComponent}
                  onEditValue={handleOnUpdateValue}
                  item={selectedItem}
               />

               <div>
                  <button
                     style={{
                        backgroundColor: '#EA2529',
                        padding: '1vh 4vw',
                        textAlign: 'center',
                        marginRight: '1vw',
                        borderRadius: '8px',
                        marginTop: '3vh',
                        color: '#FDFDFD',
                     }}
                     onClick={() => setShowModal(false)}>
                     Cerrar
                  </button>

                  <button
                     style={{
                        backgroundColor: '#33658A',
                        padding: '1vh 4vw',
                        textAlign: 'center',
                        marginRight: '1vw',
                        borderRadius: '8px',
                        marginTop: '3vh',
                        color: '#FDFDFD',
                     }}
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
            onClick={() => setShowModal(!showModal)}
            style={{
               backgroundColor: '#33658A',
               padding: '1vh 4vw',
               textAlign: 'center',
               borderRadius: '8px',
               marginTop: '3vh',
               color: '#FDFDFD',
            }}>
            {labelButton}
         </button>
      </div>
   );
}
