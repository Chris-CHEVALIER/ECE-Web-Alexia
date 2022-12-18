
import Link from 'next/link'
import Image from 'next/image'
import Login from './Login'
import ProfileDropDown from './ProfileDropdown'

export default function Header(){

  return (
    <header className="sticky top-0 z-50 flex bg-slate-200 px-10 py-5 dark:bg-gray-900 dark:text-white">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image src="/logo.png" className='cursor-pointer h-6 mr-5 object-cover h-10 w-10' alt="Logo" width={25} height={25} />
        <span className="py-1 px-2 hover:text-slate-100 dark:text-white">
          Wrong Spanish
        </span>
      </Link>
      <ul className="flex gap-5 mt-2 mr-20">
      <li className="rounded py-1 px-2 hover:text-gray-300">
          <Link href="/">
            Home
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:text-gray-300">
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:text-gray-300">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className="rounded py-1 px-2 hover:text-gray-300">
          <Link href="/contact">
            Contact us
          </Link>
        </li>
        <li >
          
        </li>
      </ul>
      <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 pt-2 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Login />
        <ProfileDropDown/>
      </div>

    </header>
  )
}
