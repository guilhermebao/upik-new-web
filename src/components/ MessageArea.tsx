import '../styles/messageArea.scss'
import check from '../assets/images/check.svg'

export function MessageArea() {
    return (
        <form>
            <input type="text" className="input" placeholder="Escreva como quer ser chamado" />
            <button className="buttonSend">
                <img src={check} alt="" />
            </button>
        </form>
    )
}