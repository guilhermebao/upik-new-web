import '../styles/auth.scss'
import '../styles/stepOne.scss'
import { Button } from '../components/Button'
import { MessageArea } from '../components/ MessageArea'
import check from '../assets/images/check.svg'

export function StepOne() {
    return (
        <div>
            <div className="box-message-me">
                <p className="message-txt">Eba! Já estou mega animado para te ajudar a repaginar seus ambientes.</p>
                <p className="message-txt mt-30">Pra gente se conhecer melhor, como posso te chamar?</p>
            </div>

            <div className="text-center">
                <MessageArea />
                <Button type="submit">
                    Vamos!
                    <img src={check} alt="" />
                </Button>
                <p>Quero fazer isso depois.</p>
            </div>
        </div>
    )
}