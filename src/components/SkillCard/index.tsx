import './styles.css'

const SkillCard = ({ image, title = '' }: any) => (
  <article className="skill">
    <div className="skill__image background">{image}</div>
    <h2 className="skill__title background">{title}</h2>
  </article>

)

export default SkillCard