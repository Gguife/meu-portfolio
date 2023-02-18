import React from 'react'
import '../styles/components/sidebar.sass';
import Avatar from '../img/eusite.png'
import { SocialNetwork } from './SocialNetwork';
import { InformationContainer } from './InformationContainer';


export const Sidebar = () => {
  return (
    <aside id='sidebar'>
      <p><img src={Avatar} alt="Guilherme Gomes" /></p>
      <p className="title">Desenvolvedor Front-end</p>
      <SocialNetwork/>
      <InformationContainer/>
      <a href="" className='btn'>Download currículo</a>
    </aside>
  )
}


