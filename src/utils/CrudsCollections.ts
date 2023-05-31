import employee from '@/api/employee';
import active from '@/api/active';
import EmployeeDetails from '@/app/components/details/EmployeeDetails';
import ActiveDetails from '@/app/components/details/ActiveDetails';

interface ICollections {
   [key: string]: {
      collectionName: string;
      detailsComponent: any;
      getItems: () => Promise<any>;
      createItem: (data: any) => Promise<any>;
      updateItem: (data: any) => Promise<any>;
      deleteItem: (id: number) => Promise<any>;
      validate: (data: any) => boolean;
   };
}

const collections: ICollections = {
   employees: {
      collectionName: 'employees',
      detailsComponent: EmployeeDetails,
      getItems: async () => await employee.getEmployees(),
      createItem: async (data: any) => await employee.createEmployee(data),
      updateItem: async (data: any) => await employee.updateEmployee(data),
      deleteItem: async (id: number) => await employee.deleteEmployee(id),
      validate: (data: any) => data.Nombre && data.Apellidos && data['Fecha de nacimiento'] && data.Correo && data.CURP && data.Estado
   },
   actives: {
      collectionName: 'actives',
      detailsComponent: ActiveDetails,
      getItems: async () => await active.getActives(),
      createItem: async (data: any) => await active.createActive(data),
      updateItem: async (data: any) => await active.updateActive(data),
      deleteItem: async (id: number) => {},
      validate: (data: any) => data.Nombre && data['Descripción'] && (data.IsAsignable ? data.employeeId && data.assignmentDate && data.deadline : true)

   },
};

export default collections;
