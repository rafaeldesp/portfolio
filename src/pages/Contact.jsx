import EmailJs from "../components/EmailJs";


export default function Contact() {
    return (
        <div className="contactPage" id="contact">
            <div className="contactContainer">
                <h1>Entre em contato!</h1>
                <EmailJs/>
            </div>
        </div>
    )
}