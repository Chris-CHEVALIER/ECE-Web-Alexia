const Header = () => (
  <div className='header'>
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      {/* <script>
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark');
 else {
    document.documentElement.classList.remove('dark')
}
</script> */}
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='https://localhost:3000' className='flex items-center'>
          <img
            src='wrongspanishlogo.png'
            className='mr-3 h-8 sm:h-9'
            alt='WS Logo'
          />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Wrong Spanish
          </span>
        </a>
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button> */}
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='/'
                className='block py-2 pr-4 pl-3 text-red bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
                aria-current='page'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Stories
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href='/contacts'
                className='block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
  </button> */}
      </div>
    </nav>

    {/* // Mobile menu, show/hide based on mobile menu state.

  // Entering: "duration-200 ease-out"
  //   From: "opacity-0 scale-95"
  //   To: "opacity-100 scale-100"
  // Leaving: "duration-100 ease-in"
  //   From: "opacity-100 scale-100"
  //   To: "opacity-0 scale-95" */}

    <div className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
      <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
        <div className='px-5 pt-5 pb-6'>
          <div className='flex items-center justify-between'>
            <div>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt='Your Company'
              />
            </div>
            <div className='-mr-2'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Close menu</span>
                {/* <!-- Heroicon name: outline/x-mark --> */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='space-y-6 py-6 px-5'>
          <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Pricing
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Docs
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Help Center
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Guides
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Events
            </a>

            <a
              href='#'
              className='text-base font-medium text-gray-900 hover:text-gray-700'
            >
              Security
            </a>
          </div>
          <div>
            <a
              href='#'
              className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
            >
              Sign up
            </a>
            <p className='mt-6 text-center text-base font-medium text-gray-500'>
              Existing customer?
              <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> // end of header
)

export default Header
