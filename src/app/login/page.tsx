import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormComponent } from '../components/FormComponent';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { InputPassword } from '../components/Inputs/InputPassword';

export default function Login() {
   return (
      <React.Fragment>
         <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-start w-96 h-96 bg-white rounded-xl shadow-lg">
               <FormComponent>
                  <h4 className="text-center">Iniciar Sesión</h4>
                  <input
                     type="text"
                     id="email"
                     name="email"
                     className="border-b-2 rounded p-1 text-black mt-20 mb-3"
                     placeholder="Ingresa tu correo"
                     autoComplete="off"
                  />
                  <InputPassword />
               </FormComponent>
            </div>
         </div>
      </React.Fragment>
   );
}
