
import Link from 'next/link'
import Image from 'next/image'
import Login from './Login'

export default function Header(){
  return (
    <header className="flex bg-slate-200 px-10 py-5 dark:bg-gray-900 dark:text-white">
      <Link href={`/`} className="flex-grow flex items-center">
        <Image src="/logo.png" className='cursor-pointer h-6 mr-5 object-cover h-10 w-10' alt="Adaltas Logo" width={25} height={25} />
        <span className="py-1 px-2 hover:text-slate-100 dark:text-white">
          Wrong Spanish
        </span>
      </Link>
      <ul className="flex gap-5">
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
        <li className="rounded py-1 px-2 text-slate-600 border border-cyan-700 hover:bg-cyan-500 hover:text-slate-50">
          <Login />
        </li>
      </ul>
    </header>
  )
}
