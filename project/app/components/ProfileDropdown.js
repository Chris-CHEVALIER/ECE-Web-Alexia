import React, { useState, useContext } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Avatar from './Avatar'
import Link from 'next/link'
import UserContext from '../components/UserContext'

export default function ProfileDropDown () {
  const supabase = useSupabaseClient()
  //const session = useSession()
  //const { username } = useContext(Context)
  const [isOpen, setIsOpen] = useState(false)
  const toggling = () => setIsOpen(!isOpen)

  const { user, logout } = useContext(UserContext)

  return (
    <>
      <div className='relative inline-block text-left'>
        <div>
          <button
            onClick={toggling}
            type='button'
            id='dropdown-button'
            aria-expanded='true'
            aria-haspopup='true'
          >
            <Avatar email={user.email} />
            <h4 className='text-slate-900 dark:text-slate-200'>
              {' '}
              {user.email}{' '}
            </h4>
          </button>
        </div>
        {isOpen && (
          <div
            className='absolute right-0 z-10 mt-5 w-44 bg-white rounded divide-y divide-gray-100 shadow text-slate-800 dark:bg-gray-800 dark:text-slate-200'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='dropdown-button'
            tabindex='-1'
          >
            <div className='py-1' role='none'>
              <Link href='/login'>
                <button
                  type='submit'
                  className='block w-full px-4 py-2 text-left text-sm hover:font-bold'
                  role='menuitem'
                  tabindex='-1'
                  id='menu-item-3'
                >
                  Profile
                </button>
              </Link>
              <Link href='/posts'>
                <button
                  className='block px-4 py-2 text-sm dark:text-slate-200 hover:font-bold'
                  role='menuitem'
                  tabindex='-1'
                  id='menu-item-1'
                >
                  Your posts
                </button>
              </Link>
              <Link href='/comments'>
                <button
                  className='block px-4 py-2 text-sm dark:text-slate-200 hover:font-bold'
                  role='menuitem'
                  tabindex='-1'
                  id='menu-item-1'
                >
                  Your reactions
                </button>
              </Link>
              <Link href='/'>
                <button
                  onClick={logout}
                  type='submit'
                  className='text-red-500 block w-full px-4 py-2 text-left text-sm hover:font-bold'
                  role='menuitem'
                  tabindex='-1'
                  id='menu-item-3'
                >
                  Sign out
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// LAYOUT

{
  /* <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your posts</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your reactions</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */
}
