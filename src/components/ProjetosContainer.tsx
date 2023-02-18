import React from 'react'
import '../styles/components/project.sass'

export const ProjetosContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Tenho o orgulho em aprezentar este meu projeto feito por mim, neste projeto foi utilizado o create react app(cra) para a instalação, styled-components para a estilização do projeto com grande base na linguagem TypeScript. Onde fazemos o armazenamento de seus gastos e ganhos do mês, portando nele data, categoria e o valo, onde ao fim é feito uma conta simples de subtração resultando no seu saldo final do mês sendo ele positivo ou negativo.
      </p>
      <div className="container-link">
      <p>
        <a href="https://github.com/Gguife/Controle-financeiro">Repositório do projeto(Github)</a> <br />
        <a href="https://controle-financeiro-ten-kappa.vercel.app/">Site do projeto</a> <br />
      </p>
      </div>
      <div className="container-btn">
        <a href="https://github.com/Gguife" className='btn'>Ver Projetos</a>
        <p className="descrition">Clique aqui para mais!</p>  
      </div>
    </section>
  )
}

