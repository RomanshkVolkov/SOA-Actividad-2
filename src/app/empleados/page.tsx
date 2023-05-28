import React from 'react';
import { Table } from '../components/Table';
import { InferGetServerSidePropsType } from 'next';

const fetchEmployees = async () =>
   (await fetch('https://localhost:7027/empleados', {
      method: 'GET',
      next: {
         revalidate: 60,
      },
   })
      .then((res) => {
         console.log(res);
         return res.json();
      })
      .then((res) => res.data)
      .catch((err) => {
         console.log(err);
         throw new Error(err);
      })) as any[];

export default async function Employes({
   params,
}: InferGetServerSidePropsType<typeof fetchEmployees>) {
   const hardcodeData = [
      {
         '#': '1',
         Nombre: 'Juan',
         Apellido: 'Perez',
         Edad: '20',
         'Fecha de nacimiento': '15/10/2000',
         'Fecha de ingreso': '15/10/2020',
         'Fecha de retiro': '15/10/2025',
         Cargo: 'Gerente',
         Salario: '5000',
         Estado: 'Activo',
         'Estado de activo': '1',
      },
   ];
   const data = (await fetchEmployees()) || hardcodeData;
   console.log(await fetchEmployees());
   console.log(data);

   return (
      <div className="mt-5 border-gray-300 d-flex justify-center w-full">
         <h1 className="text-3xl text-center">Bienvenido a la pagina de empleados</h1>
         <Table theads={data ? data[0] : {}} tbody={data as any} />
      </div>
   );
}
