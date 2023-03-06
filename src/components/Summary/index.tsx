import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="" alt="" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src="" alt="" />
        </header>
        <strong>R$ 500,00</strong>
      </div>

      <div className='green-box'>
        <header>
          <p>Total</p>
          <img src="" alt="" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}