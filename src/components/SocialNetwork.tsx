import React from 'react'
import '../styles/components/socialnetwork.sass'
import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

const socialNetWorks = [
  {name: 'linkedin', link: 'https://www.linkedin.com/in/guilherme-gomes-b09444254/', icon:<FaLinkedinIn/>},
  {name: 'github', link: 'https://github.com/Gguife', icon:<FaGithub/>},
  {name: 'instagram', link: 'https://www.instagram.com/gguife/', icon:<FaInstagram/>},
];

export const SocialNetwork = () => {
  return (
    <section id="social-networks">
      {socialNetWorks.map((network)=>(
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  )
}
