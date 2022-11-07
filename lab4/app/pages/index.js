
import Header from '../comps/Header'
import Footer from '../comps/Footer'
import Menu from '../comps/menu'

import Image from 'next/image'




// HOME FUNCTION 

function Home() {
    return (
      <>
        <section class="py-8 bg-yellow-300 lg:py-24 dark:bg-gray-900">

        <div class="px-4 mx-auto max-w-8xl lg:px-4">
          <div class="xl:mx-64 2xl:mx-80">
            <div class="mb-4 text-4xl font-bold text-gray-900 lg:font-extrabold lg:text-5xl lg:leading-none dark:text-white lg:text-center lg:mb-7">
              <p>Welcome to Wrong Spanish !</p>
            </div>

            <div class="mb-4 text-xl  text-gray-900 lg:text-xl lg:leading-none dark:text-white lg:text-center lg:mb-7">
              <p>Here you will find all the information about us.</p>
              <p>So don't wait any longer, come and venture into our world !</p> 
            </div>
            <div class="mb-4 text-xl  text-gray-900 lg:text-xl lg:leading-none dark:text-white lg:text-center lg:mb-7">
              <div class="grid md:gap-8 md:grid-cols-3">
                <div class="mb-6">
                  
                </div>
                <div class="mb-6">
                  
                </div>
                <div class="mb-6">
                  
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>
      </>

    );
  };
  
export default Home