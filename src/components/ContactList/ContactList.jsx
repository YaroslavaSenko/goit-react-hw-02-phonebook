
import React from "react";
import {Button} from './ContactList.styled';



const ContactList = ({ contacts, onDeleteContact }) => (
<ul>
    { contacts.map(({id, name, number}) =>  (
 <li key={id}>
    <p>{name} {number}</p>
    <p></p>
    <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </li>
    ))}
</ul>
)


export default ContactList;