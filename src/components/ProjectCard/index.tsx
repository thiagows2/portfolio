import Heading from '../Heading/index.js'

import './styles.css'

const ProjectCard = ({ title = '', description = '', link = '#' }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <article className="card__content">
      <Heading size="small">{title}</Heading>
      <p className="card__description">{description}</p>
    </article>
  </a>
)

export default ProjectCard