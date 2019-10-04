import React from 'react'
import { Header} from 'semantic-ui-react'
import ContactForm from './ContactForm'
import '../styles/contact.css'

export default function Contact() {
    return (
        <div>
            <Header as='h1'>Contact Us</Header> 
            <ContactForm />
        </div>
    )
}
