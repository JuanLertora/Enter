'use client'
import Image from 'next/image'
import { bill, cuboid, plant, suculent } from './images/exports'

export default function Home() {

  return (
    <div className=''>
        <nav className='navbar' aria-label="">
          <div className="title-nav">
            <span className="">Enter Agência digital</span>
          </div>
          <div>
            <button className='button'>Contactanos</button>
          </div>
            
        </nav>

        
        <div style={{ height: '90vh', background: 'rgba(16, 144, 203, 0.1)', display: 'flex'}}>
          <div className='info-div'>
            <div style={{ margin: '0 30px' }}>
            <h1 className='text'>Creacion experimentada de aplicaciones <span className='text mobile'>mobile y web</span>.<br/>Co-creemos tu espacio.</h1>
            <p className='subtext'>Enter es un equipo de desarrollo de aplicaciones móviles y web con experiencia. Construimos y desarrollamos aplicaciones móviles para varias plataformas superiores, incluyendo Android & IOS.</p>
            </div>
          </div>
          <div className='divImages'>
            <Image className='bill' src={bill} height={650} width={509} alt='bill'/>
          </div>
        </div>


        <div>
          <span>Hola</span>
        </div>
        
    </div>
  )
}
