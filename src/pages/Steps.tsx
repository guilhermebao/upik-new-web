import '../styles/auth.scss'
import { StepOne } from "./StepOne"

export function Steps() {
    return (
        <div id="step">
            <aside>
                <div className="step-defaut">
                    <p className="step-active">Bem-vindo(a)</p>
                    <p className="m-y30">Escolha dos ambientes</p>
                    <p className="m-y30">Escolha do plano</p>
                    <p className="m-y30">Pagamento</p>
                    <p className="m-y30">Login na plataforma</p>
                </div>
            </aside>
            <main>
                <div className="chat">
                    <StepOne />
                </div>
            </main>
        </div>
    )
}