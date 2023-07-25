import Heading from '../Heading/index.js'
import Link from '../Link'

import './styles.css'

const Introduction = () => (
  <section>
    <Heading>
      Olá, meu nome é Thiago e
      ando construindo alguns projetos Web. <br />
      Este é um deles...<br /> <br />
      Seja bem-vindo!
    </Heading>
    <div className="introduction__description">
      <p>
        Sou estagiário em Desenvolvimento Web Full Stack<br />
        tenho experiência com Rails e VueJS.
      </p>
    </div>
    <Link title="Contato" link="mailto:thiagomarques408@gmail.com"/>
  </section>
)

export default Introduction