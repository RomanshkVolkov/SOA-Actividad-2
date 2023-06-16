'use client';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export const InputPassword = () => {
   const [showPassword, setShowPassword] = useState(false);
   return (
      <React.Fragment>
         <div className="relative">
            <input
               type={showPassword ? 'text' : 'password'}
               id="password"
               name="password"
               className="border-b-2 rounded p-1 text-black"
               placeholder="Ingresa tu contraseña"
               autoComplete="off"
            />
            <FontAwesomeIcon
               id="show-password"
               icon={showPassword ? faEye : faEyeSlash}
               size="lg"
               width={'30px'}
               className="absolute right-0 top-1"
               onClick={() => setShowPassword((_) => !_)}
            />
         </div>
      </React.Fragment>
   );
};
