

const Footer = () => (
    

  <footer className="p-4 bg-white md:px-6 md:py-8 dark:bg-gray-900">
      <div className="flex justify-between">
      <div className="">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
              <img src="logo.png" class="mr-3 h-8" alt="Wrong Spanish Logo"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wrong Spanish</span>
          </a>
      </div>
      <div className="" id="header options" >
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                  <a href="https://github.com/AlexiaBesnard/ece-webtech-S7" class=" mr-4 hover:underline md:mr-6 ">Github</a>
              </li>
              <li>
                  <a href="#" className="mr-4 hover:underline md:mr-6">Discord</a>
              </li>
              <li>
                  <a href="https://www.instagram.com/antoine_beber/" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="/contacts" className="hover:underline">Contact</a>
              </li>
          </ul>
      </div>
  
      </div>
     
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" class="hover:underline">Wrong Spanish™</a>. All Rights Reserved.
      </span>
  </footer>
  
  
  
  ) 
  export default Footer;
  
  
  
  