import React from 'react';
import '../Styles/footer.css';
import { FaWhatsapp, FaEnvelope} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer  className="footer_container">
                <div>
                    <p>&copy;Rogerio Morais - 2020 </p>
                </div>
                <div>
                    <a href="mailto:rogerio1597@gmail.com"> Email: rogerio1597@gmail.com <FaEnvelope></FaEnvelope> </a>
                </div>
                <div>
                    <p>Tel: (11) 98636-4440 <FaWhatsapp></FaWhatsapp> </p>
                </div>
        </footer>
    )
}