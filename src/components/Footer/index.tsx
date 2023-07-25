import Link from '../Link'
import Heading from '../Heading'

import './styles.css'

const Footer = () => (
  <footer className="footer">
    <Heading>Meus perfis</Heading>
    <div className="footer__link">
      <Link link="mailto:thiagomarques408@gmail.com" title="Email" />
      <Link link="https://www.linkedin.com/in/thiago-marques-167296204/" title="Linkedin" />
      <Link link="https://github.com/thiagows2" title="Github" />
      <Link link="https://www.instagram.com/thiagows2/" title="Instagram" />
    </div>
  </footer>
)

export default Footer