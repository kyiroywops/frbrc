import React, {useState} from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import Contacto from './Contacto';

const ListaContactos = () => {
    const [contactos, cambiarContactos] = useState([
        {
            id:1,
            nombre: 'Juan',
            correo: 'Correo'
        }
    ]);

    return ( 
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => {
                return <Contacto key={contacto.id} id={contacto.id} nombre={contacto.nombre} correo={contacto.correo} />
            })}

        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
      margin-top: 40px;
    `;
 
export default ListaContactos;