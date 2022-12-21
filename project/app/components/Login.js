import { useContext } from 'react'
import { useRouter } from 'next/router'
import OutlineUserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon.js'
import UserContext from './UserContext'
import {useSession } from '@supabase/auth-helpers-react'
import ProfileDropDown from './ProfileDropdown'

export default function LoggedIn(){
  const router = useRouter()
  const session = useSession()
  //const {user, logout} = useContext(UserContext)
  function onClick() {
    if (session)
      router.push('/')
    else
      router.push('/login')
  }
  return (

    <button
      className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
      onClick={onClick}
    >
      {session ?
        <>
          <ProfileDropDown />
        </>
        :
        <>
          <OutlineUserCircleIcon />
          Login
        </>
      }
    </button>
  )
}

