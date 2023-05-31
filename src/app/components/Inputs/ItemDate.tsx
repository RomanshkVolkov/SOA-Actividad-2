/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

interface Props {
   label: string;
   onEditValue: (value: any, attribute: string) => void;
   value: any;
   attribute: string;
   disabled?: boolean;
}
export default function ItemDate(props: Props) {
   const { label, onEditValue, value, attribute, disabled = false } = props;

   return (
      <div className="flex flex-col justify-between">
         <label className="mb-2">{label}: </label>
         <input
            type="date"
            className="border rounded-lg px-2 py-1 mt-1 mb-5 text-sm text-black"
            value={value}
            onChange={(e) => onEditValue(e.target.value, attribute)}
            disabled={disabled}
         />
      </div>
   );
}
