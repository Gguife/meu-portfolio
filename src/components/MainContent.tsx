import React from 'react'
import '../styles/components/maincontent.sass';
import { AboutContainer } from './aboutContainer';
import { ProjetosContainer } from './ProjetosContainer';
import TechnologiesContainer from './TecnologiesContainer';


export const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer/>
      <TechnologiesContainer/>
      <ProjetosContainer />
    </main>
  )
}
