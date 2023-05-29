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

   createEmployee: async (data: any) =>
      axios
         .post(`${urls.BASE_URL}/persona`, data)
         .then((res) => res.data)
         .catch((err) => console.log(err)),
};

export default employee;
