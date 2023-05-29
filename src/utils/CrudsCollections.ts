import employee from '@/api/employee';
import active from '@/api/active';
import EmployeeDetails from '@/app/components/details.tsx/EmployeeDetails';
import ActiveDetails from '@/app/components/details.tsx/ActiveDetails';

const collections = [
   {
      collectionName: 'employees',
      detailsComponent: EmployeeDetails,
      getItems: async () => await employee.getEmployees(),
   },
   {
      collectionName: 'actives',
      detailsComponent: ActiveDetails,
      getItems: async () => await active.getActives(),
   },
];

const crudsCollections = collections.reduce((acc, collection) => {
   acc[collection.collectionName] = {
      detailsComponent: collection.detailsComponent,
      getItems: collection.getItems,
   };
   return acc;
}, {} as any);

export default crudsCollections;
