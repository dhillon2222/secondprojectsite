import React from 'react'
import { Header,Footer } from '../components/index'


const Menu = () => {
  return (
    <>
    <Header/>
    <div class="container py-5">
        <div class="row">
          <h1 className='text-center fw-bold mb-5'>Main Menu</h1>

            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img className='mb-4 rounded' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1;w=1024 1024w" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="245" loading="lazy" />
                <img className='rounded' src="https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=600" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="" loading="lazy" />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img className='mb-4 rounded' src="https://images.pexels.com/photos/2161638/pexels-photo-2161638.jpeg?auto=compress&cs=tinysrgb&w=600" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="" loading="lazy" />
                <img className='mb-4 rounded' src="https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg?auto=compress&cs=tinysrgb&w=600" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="245" loading="lazy" />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img className='mb-4 rounded' src="https://images.pexels.com/photos/365459/pexels-photo-365459.jpeg?auto=compress&cs=tinysrgb&w=600" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="250" loading="lazy" />
                <img className='rounded' src="https://images.pexels.com/photos/5337719/pexels-photo-5337719.jpeg?auto=compress&cs=tinysrgb&w=600" sizes="(max-width: 1080px) 100vw, 1080px" width="355" height="526" loading="lazy" />
            </div>
            </div>
            </div>
    <Footer/>
    </>
  )
}

export default Menu