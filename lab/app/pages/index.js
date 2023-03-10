import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Menu from '../comps/menu'

import Image from 'next/image'

// HOME FUNCTION

function Home () {
  return (
    <>
      <section className='py-8 bg-yellow-300 lg:py-24 dark:bg-gray-900'>
        <div className='px-4 mx-auto max-w-8xl lg:px-4'>
          <div className='xl:mx-64 2xl:mx-80'>
            <div className='mb-4 text-4xl font-bold text-gray-900 lg:font-extrabold lg:text-5xl lg:leading-none dark:text-white lg:text-center lg:mb-7'>
              <p>Welcome to Wrong Spanish !</p>
            </div>
            <div className='flex flex-wrap justify-center my-10'>
              <img
                src='fusiona2.png'
                className='max-w-lg h-auto transition-shadow ease-in-out duration-300 shadow-none'
                alt='Fusion AxA'
              />
            </div>
            <div className='mb-4 text-xl  text-gray-900 lg:text-xl lg:leading-none dark:text-white lg:text-center lg:mb-7'>
              <p>
                You are about to enter the beautiful world of 2 impostors guapa.{' '}
              </p>
              <p>
                Our favorite activity? Tea time. And we won't just share the
                crumbs with you. Come and venture into our mundo !
              </p>
            </div>
            <div className='mb-4 text-xl  text-gray-900 lg:text-xl lg:leading-none dark:text-white lg:text-center lg:mb-7'>
              <div className='grid md:gap-8 md:grid-cols-3'>
                <div className='mb-6'></div>
                <div className='mb-6'></div>
                <div className='mb-6'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
