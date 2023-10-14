import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { VscRuby } from 'react-icons/vsc'
import { SiRubyonrails } from 'react-icons/si'
import { LuGraduationCap } from 'react-icons/lu'
import expresschat from '@/public/expresschat.png'
import finx from '@/public/finx.png'
import skywatch from '@/public/skywatch.png'

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'Sobre',
    hash: '#about'
  },
  {
    name: 'Projetos',
    hash: '#projects'
  },
  {
    name: 'Habilidades',
    hash: '#skills'
  },
  {
    name: 'Experiência',
    hash: '#experience'
  },
  {
    name: 'Contato',
    hash: '#contact'
  }
] as const

export const experiencesData = [
  {
    title: 'Estágio em Desenvolvimento Web',
    location: 'ESL Sistemas',
    description:
      'Contribuição ativa no desenvolvimento de novas funcionalidades utilizando Ruby on Rails e Vue.js. Manutenção e alterações em banco de dados PostgreSQL.',
    icon: React.createElement(VscRuby),
    date: '08/2021 – 02/2022'
  },
  {
    title: 'Iniciação Científica',
    location: 'PUC Minas',
    description:
      'Liderança técnica no desenvolvimento de um sistema web para gerenciamento de Smart Grid. Atuação como Desenvolvedor Full Stack, utilizando Ruby on Rails, Vue.js e PostgreSQL.',
    icon: React.createElement(LuGraduationCap),
    date: '09/2021 – 02/2022'
  },
  {
    title: 'Desenvolvedor Júnior',
    location: 'Dental Office Software',
    description:
      'Desenvolvimento e manutenção de APIs usando Ruby on Rails. Testes unitários e de integração, usando RSpec. Documentação técnica e explicativa das features entregues com a especificação OpenAPI. Utilização de Metodologias ágeis (Scrum, Kanban, OKRs). Manutenção e alteração em banco de dados MySQL.',
    icon: React.createElement(SiRubyonrails),
    date: '02/2022 – 09/2022'
  },
  {
    title: 'Desenvolvedor Pleno',
    location: 'Órulo',
    description:
      'Concepção, implantação e manutenção de aplicações utilizando tecnologias como Ruby on Rails e React.js/Next.js. Implementação de testes usando RSpec. Manutenção e alteração em banco de dados MySQL e ElasticSearch. Uso complementar de ferramentas de monitoração e automação, como Docker e Gitlab CI/CD.',
    icon: React.createElement(CgWorkAlt),
    date: '09/2022 – Atual'
  }
] as const

export const projectsData = [
  {
    title: 'Finx',
    description:
      'Aplicação web para gerenciamento de finanças pessoais. Fiz só o front end, com o objetivo de aprender Next.js.',
    tags: ['React', 'Next.js', 'TypeScript'],
    imageUrl: finx,
    link: 'https://finx.thiagows.dev'
  },
  {
    title: 'Skywatch',
    description:
      'Aplicação mobile para previsão do tempo. O objetivo aqui foi entender como aplicações mobile funcionam.',
    tags: ['React Native', 'Expo', 'TypeScript'],
    imageUrl: skywatch,
    link: 'https://github.com/thiagows2/skywatch'
  },
  {
    title: 'ExpressChat',
    description:
      'Aplicação web de chat em tempo real. Fiz com o objetivo de aprender ferramentas AWS, como DynamoDB, S3 e EC2.',
    tags: ['React', 'Next.js', 'Express.js', 'TypeScript', 'Tailwind', 'AWS'],
    imageUrl: expresschat,
    link: 'https://chat.thiagows.dev'
  }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'Ruby',
  'Ruby on Rails',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'RSpec',
  'MySQL',
  'ElasticSearch',
  'Docker',
  'AWS (S3, EC2, DynamoDB, Lambda)'
] as const
