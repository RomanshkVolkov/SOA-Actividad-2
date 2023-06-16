import axios from 'axios';
import urls from '../utils/urls';
import xml2json from '@/utils/xml2json';

const active = {
   getActives: async () => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <GetActives xmlns="http://tempuri.org/"/>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/GetActives',
            },
            maxContentLength: Infinity,
         })
         .then((res) => xml2json(res.data, 'GetActivesResult'))
         .catch((err) => []);
   },
   createActive: async (dataJSON: any) => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <CreateActive xmlns="http://tempuri.org/">
            <name>${dataJSON.Nombre}</name>
            <description>${dataJSON['Descripción']}</description>
          </CreateActive>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/CreateActive',
            },
         })
         .then((res) => xml2json(res.data, 'CreateActiveResult'))
         .catch((err: any) => console.log(err));
   },
   updateActive: async (dataJSON: any) => {
      console.log(dataJSON);
      const releaseDate = dataJSON?.releaseDate
         ? `<releaseDate>${dataJSON?.releaseDate || null}</releaseDate>`
         : '';
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <UpdateActive xmlns="http://tempuri.org/">
            <id>${dataJSON['No. Activo']}</id>
            <name>${dataJSON.Nombre}</name>
            <description>${dataJSON['Descripción']}</description>
            ${
               dataJSON?.employeeId
                  ? `<employeeId>${dataJSON?.employeeId}</employeeId>
            <assignmentDate>${dataJSON?.assignmentDate || null}</assignmentDate>
            <deadLine>${dataJSON?.deadLine || null}</deadLine>
            ${releaseDate}`
                  : ''
            }
          </UpdateActive>
        </soap:Body>
      </soap:Envelope>
      `;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/UpdateActive',
            },
         })
         .then((res) => xml2json(res.data, 'UpdateActiveResult'))
         .catch((err) => console.log(err));
   },
   deleteActive: async (id: number) => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <DeleteActive xmlns="http://tempuri.org/">
            <id>${id}</id>
          </DeleteActive>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/DeleteActive',
            },
         })
         .then((res) => xml2json(res.data, 'DeleteActiveResult'))
         .catch((err) => console.log(err));
   },
   sendRememberEmails: async () => {
      const data = `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <sendEmailsRemembers xmlns="http://tempuri.org/"/>
        </soap:Body>
      </soap:Envelope>`;
      return await axios
         .post(`${urls.BASE_URL}`, data, {
            headers: {
               'Content-Type': 'text/xml; charset=utf-8',
               SOAPAction: 'http://tempuri.org/IService/sendEmailsRemembers',
            },
         })
         .then((res) => true)
         .catch((err) => console.log(err));
   },
};

export default active;
