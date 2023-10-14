'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('Sobre')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobre"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Desde criança, sempre fui fascinado por{' '}
        <span className="font-medium">computadores e tecnologia.</span> Arrumava
        os computadores de amigos e familiares, mas infelizmente não tive
        contato com programação na época. Em 2021, decidi que a faculdade de{' '}
        <span className="font-medium">Ciência da Computação</span> era o caminho
        que eu queria seguir. Comecei a estudar programação e me apaixonei por
        isso. A melhor parte é a{' '}
        <span className="italic">lógica e a resolução de problemas</span>. É
        única a sensação de finalmente encontrar uma solução para um problema.
        Minhas principais tecnologias são{' '}
        <span className="font-medium">
          Ruby on Rails, React, Next.js e MySQL.
        </span>{' '}
        Mas sou curioso e sempre estou buscando aprender novas tecnologias.
      </p>

      <p>
        <span className="italic">Quando não estou programando</span>, curto
        jogar videogames, assistir séries e brincar com meus gatos. Também gosto
        de carros e motos, e sou apaixonado por tecnologia em geral.
      </p>
    </motion.section>
  )
}
