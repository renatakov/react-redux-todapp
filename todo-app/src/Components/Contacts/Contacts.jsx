import s from "./Contacts.module.css"

const Contacts = () =>{
    return(
        <div className={s.contacts}>
            <span>Email: support@todoapp.com</span>
            <span>Phone: +1-123-456-7890</span>
            <span>Twitter: @TodoAppOfficial</span>
            <span>Facebook: /TodoAppOfficial</span>
            <span>Instagram: @TodoAppOfficial</span>
        </div>
    )
}
export default Contacts;