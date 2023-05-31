'use client';

import employee from '@/api/employee';
import { use, useEffect, useState } from 'react';

interface Props {
   func: 'Editar' | 'Crear';
   select: any;
   onEditValue: (value: string, attribute: string) => void;
   item: any;
}
export default function DetailsSelector(props: Props) {
   const { func, select, onEditValue, item } = props;

   const Details = select;
   return <Details func={func} onEditValue={onEditValue} item={item} />;
}
