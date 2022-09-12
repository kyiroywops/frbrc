import React, {useState} from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';

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
                return <p key={contacto.id}>{contacto.nombre} - {contacto.correo}</p>
            })}

        </ContenedorContactos>
     );
}

const ContenedorContactos = styled.div`
      margin-top: 40px;
    `;
 
export default ListaContactos;