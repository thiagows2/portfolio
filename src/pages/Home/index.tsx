import Menu from '../../components/Menu'
import Introduction from '../../components/Introduction'
import Footer from '../../components/Footer'
import Heading from '../../components/Heading'
import SkillCard from '../../components/SkillCard'
import ProjectCard from '../../components/ProjectCard'
import skills from './skills'
import projects from './projects'

import './styles.css'

const Home = () => (
  <main className="home">
    <header className="light-bg">
      <div className="container">
        <Menu/>
      </div>
    </header>

    <section className="container section">
      <Introduction/>
    </section>

    <section className="section light-bg">
      <Heading lineBottom>
        Projetos
      </Heading>
      <div className="container projects__container">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>

    <section className="section light-bg">
      <Heading lineBottom>
        Habilidades
      </Heading>
      <div className="container skills__container">
        {skills.map((item, index) => {
          const Icon = item.image

          return (
            <SkillCard
              key={index}
              image={<Icon size={70} color="#FF0A54" />}
              tittle={item.title}
            />
          )
        })}
      </div>
    </section>

    <Footer />
  </main>
)

export default Home
