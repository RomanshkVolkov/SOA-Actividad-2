import axios from 'axios';
import urls from '../utils/urls';

const employee = {
   getEmployees: async () =>
      await axios
         .get(`${urls.BASE_URL}/empleados`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),

   getEmployeesActives: async () =>
      await axios
         .get(`${urls.BASE_URL}/empleados/activos`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),

   getEmployesByActive: async () =>
      await axios
         .get(`${urls.BASE_URL}/activos/empleados`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),

   createEmployee: async (data: any) =>
      await axios
         .post(`${urls.BASE_URL}/persona`, {
            name: data.Nombre,
            lastname: data.Apellidos,
            curp: data.CURP,
            birthdate: data['Fecha de nacimiento'],
            numEmployee: data['No. Empleado'],
            email: data.Correo,
            password: 'password',
            status: data.Estado || true,
         })
         .then((res) => res.data)
         .catch((err) => console.log(err)),

   updateEmployee: async (data: any) =>
      await axios
         .patch(`${urls.BASE_URL}/persona`, {
            id: data.id,
            name: data.Nombre,
            lastname: data.Apellidos,
            curp: data.CURP,
            birthdate: data['Fecha de nacimiento'],
            numEmployee: data['No. Empleado'],
            email: data.Correo,
            status: data.Estado === 'Activo' || data.Estado === true ? true : false,
         })
         .then((res) => res.data)
         .catch((err) => console.log(err)),

   deleteEmployee: async (id: number) =>
      await axios
         .delete(`${urls.BASE_URL}/persona?id=${id}`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),
};

export default employee;
