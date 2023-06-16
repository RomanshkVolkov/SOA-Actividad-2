import axios from 'axios';
import urls from '../utils/urls';
import xml2json from '@/utils/xml2json';

const employee = {
   login: async (dataJSON: any) => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <login xmlns="http://tempuri.org/">
            <email>${dataJSON.email}</email>
            <password>${dataJSON.password}</password>
          </login>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/login',
            },
         })
         .then((res) => xml2json(res.data, 'loginResult'))
         .catch((err) => console.log(err));
   },
   getEmployees: async () => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
   <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
         <GetDataPersons xmlns="http://tempuri.org/"/>
      </soap:Body>
   </soap:Envelope>`;

      return (await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/GetDataPersons',
            },
            maxContentLength: Infinity,
         })
         .then((res) => xml2json(res.data, 'GetDataPersonsResult'))
         .catch((err) => {
            console.log(err);
            return [];
         })) as any[];
   },

   getEmployeesActives: async () => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetActiveEmployees xmlns="http://tempuri.org/"/>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/GetActiveEmployees',
            },
         })
         .then((res) => xml2json(res.data, 'GetActiveEmployeesResult'))
         .catch((err) => console.log(err));
   },

   getEmployesByActive: async () => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetEmployeByActive xmlns="http://tempuri.org/"/>
        </soap:Body>
      </soap:Envelope>      
      `;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/GetEmployeByActive',
            },
         })
         .then((res) => xml2json(res.data, 'GetEmployeByActiveResult'))
         .catch((err) => []);
   },

   createEmployee: async (dataJSON: any) => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <CreatePerson xmlns="http://tempuri.org/">
            <name>${dataJSON.Nombre}</name>
            <lastname>${dataJSON.Apellidos}</lastname>
            <curp>${dataJSON.CURP}</curp>
            <birthdate>${dataJSON['Fecha de nacimiento']}</birthdate>
            <numEmployee>${dataJSON['No. Empleado']}</numEmployee>
            <email>${dataJSON.Correo}</email>
          </CreatePerson>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/CreatePerson',
            },
         })
         .then((res) => xml2json(res.data, 'CreatePersonResult'))
         .catch((err) => console.log(err));
   },

   updateEmployee: async (dataJSON: any) => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <UpdatePerson xmlns="http://tempuri.org/">
            <id>${dataJSON.Id}</id>
            <name>${dataJSON.Nombre}</name>
            <lastname>${dataJSON.Apellidos}</lastname>
            <birthdate>${dataJSON['Fecha de nacimiento']}</birthdate>
            <curp>${dataJSON.CURP}</curp>
            <email>${dataJSON.Correo}</email>
            <status>${
               dataJSON.Estado === 'Activo' || dataJSON.Estado === true ? true : false
            }</status>
          </UpdatePerson>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/UpdatePerson',
            },
         })
         .then((res) => xml2json(res.data, 'UpdatePersonResult'))
         .catch((err) => console.log(err));
   },

   deleteEmployee: async (id: number) => {
      console.log(id);
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <DeletePerson xmlns="http://tempuri.org/">
            <id>${id}</id>
          </DeletePerson>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/DeletePerson',
            },
         })
         .then((res) => xml2json(res.data, 'DeletePersonResult'))
         .catch((err) => false);
   },
};

export default employee;
