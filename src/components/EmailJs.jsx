
import emailjs from '@emailjs/browser'
import { useRef } from 'react';


export default function EmailJs() {
    const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();
            emailjs
              .sendForm("service_ul9fude", "template_6wn93wq", form.current, {
                publicKey: "FCFMbclfV3Q6acQLb",
              })
              .then(
                () => {
                  console.log("SUCCESS!");
                },
                (error) => {
                  console.log("FAILED...", error.text);
                }
              );
        
            e.target.reset();
          };

    return (
        <form onSubmit={sendEmail} className='contentForm' ref={form}>
            <input
            type="text"
            name="from_name"
            placeholder="Nome.."
            required
            />
            <input
            type="email"
            name="_email"
            placeholder="Email.."
            required
            />
            <textarea
            type="text"
            name="message"
            cols={50}
            rows={7}
            placeholder="Texto.."
            />
            <button
            type="submit"
            >
            Enviar!
            </button>
        </form>
    )
}