// import ilustrationImg from '../assets/images/ilustrationImg.svg'
import { useHistory } from 'react-router-dom'
import { Button } from '../components/Button'
import '../styles/auth.scss'

export function Home() {
    const history = useHistory();

    function navigateToOscar() {
        history.push('/oscar')
    }
    return (
        <div id="page-auth">
            <aside>
                <div>
                <p>Oi,</p>
                <strong>eu sou o Oscar</strong>
                <p>Eu sou seu assistente virtual do</p>
                <p>Arquiteto de Bolso.</p>
                <p>Quero te ajudar a dar uma cara</p>
                <p>nova para seus ambientes.</p>
                <p>Em que posso ajudar?</p>
                </div>
                <Button onClick={navigateToOscar} type="submit">
                    Quero adquirir consultoria
                </Button>
                {/* <button>
                    Quero entender melhor
                </button> */}
            </aside>
            <main>
            <strong>Imagem</strong>
            {/* <img src={ilustrationImg} alt=""/> */}

            </main>
        </div>
    )
}