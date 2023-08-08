'use client'
import Image from 'next/image'
import { rocket, paper, planet, rocket2, stars } from './images/exports'
import Atropos from 'atropos/react';
export default function Home() {

  return (
    <div className=''>
        <nav className='navbar' aria-label="">
          <div className="title-nav">
              <span className="">Enter Agência digital</span>
          </div>
        </nav>

        
        <div style={{ height: '100vh'}}>
        <Atropos className="atropos my-atropos"  id='bench'>
          <div className="atropos-scale">
            <div className="atropos-rotate back">
              <div className="atropos-inner">
                <h1>Enter</h1>
                <Image className='planet-img' src={planet} width={500} height={500} alt='Rocket'/>
                <Image className='stars-img' src={stars} width={500} height={500} alt='Rocket'/>
                <Image className='rocket-img' src={rocket} width={800} height={800} alt='Rocket'/>
              </div>
            </div>
          </div>
        </Atropos>
        </div>


        <div>
          <span>Hola</span>
        </div>
        
    </div>
  )
}
