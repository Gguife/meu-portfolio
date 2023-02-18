import React from 'react'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'
import '../styles/components/infoContainer.sass'

export const InformationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <AiFillPhone id='phone-icon'/>
        <div>
          <h3>Telefone</h3>
          <p>+55(12)98188-5646</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>Gguife747@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>São José dos Campos - SP</p>
        </div>
      </div>
    </section>
  )
}
