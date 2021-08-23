import illustration from '../assets/images/illustration.png'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import '../styles/auth.scss'

export function Home() {
    const history = useHistory();

    function navigateToSteps() {
        history.push('/Steps')
    }
    return (
        <div id="page-auth">
            <aside>
                <div>
                <p className="fs-36">Oi,</p>
                <p className="fs-56">eu sou o Oscar</p>
                <p className="fs-30 m-t24">Eu sou seu assistente virtual do</p>
                <p className="fs-30">Arquiteto de Bolso.</p>
                <p className="fs-30 m-t22">Quero te ajudar a dar uma cara</p>
                <p className="fs-30">nova para seus ambientes.</p>
                <p className="fs-30 m-b22">Em que posso ajudar?</p>
                </div>
                <Button onClick={navigateToSteps} type="submit">
                    Quero adquirir consultoria
                </Button>
                <Button onClick={navigateToSteps} type="submit">
                    Quero entender melhor
                </Button>
            </aside>
            <main>
            
            <img src={illustration} alt="Ilustrações Oscar"/>
            </main>
        </div>
    )
}