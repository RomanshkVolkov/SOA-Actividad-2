'use client';

import employee from '@/api/employee';
import { use, useEffect, useState } from 'react';

interface Props {
   select: any;
   options: any[];
   onEditValue: (value: string, attribute: string) => void;
   item: any;
}
export default function DetailsSelector(props: Props) {
   const { select, options, onEditValue, item } = props;

   const Details = select;
   return <Details options={options} onEditValue={onEditValue} item={item} />;
}
