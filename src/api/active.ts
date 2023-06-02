import axios from 'axios';
import urls from '../utils/urls';

const active = {
   getActives: async () =>
      await axios
         .get(`${urls.BASE_URL}/activos`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),
   createActive: async (data: any) =>
      await axios.post(`${urls.BASE_URL}/activos`, {
         name: data.Nombre,
         description: data['Descripción'],
         status: data.Estado || true,
      }),
   updateActive: async (data: any) =>
      await axios
         .patch(`${urls.BASE_URL}/activos`, {
            id: data['No. Activo'],
            name: data.Nombre,
            description: data['Descripción'],
            employeeId: data?.employeeId || null,
            assignmentDate: data?.assignmentDate || null,
            deadLine: data?.deadLine || null,
            releaseDate: data?.releaseDate || null,
         })
         .then((res) => res.data)
         .catch((err) => console.log(err)),
   deleteActive: async (id: number) =>
      await axios
         .delete(`${urls.BASE_URL}/activos?id=${id}`)
         .then((res) => res.data)
         .catch((err) => console.log(err)),
};

export default active;
