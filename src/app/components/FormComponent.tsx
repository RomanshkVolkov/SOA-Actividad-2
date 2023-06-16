'use client';
import employee from '@/api/employee';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
   children: React.ReactNode;
}
export const FormComponent = (props: Props) => {
   const { children } = props;
   const router = useRouter();
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string>('');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(() => true);
      const data = new FormData(e.currentTarget);
      const body = {
         email: data.get('email'),
         password: data.get('password'),
      };
      const res = await employee.login(body);
      if (!res) {
         setError('Usuario o contraseña incorrectos');
      } else {
         router.push('/empleados');
      }
      setLoading(() => false);
   };

   return (
      <div>
         <form onSubmit={handleSubmit} className="p-5 flex flex-col">
            {children}
            {error && <p className="text-red-500">{error}</p>}
            <button
               type="submit"
               className="button mt-20 mb-3"
               style={{ background: '#F2BED1' }}
               value={'Iniciar sesión'}>
               {loading ? <i className="fas fa-spinner fa-spin"></i> : 'Iniciar sesión'}
            </button>
         </form>
      </div>
   );
};
