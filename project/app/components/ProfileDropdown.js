import React, { useState, useContext } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Context from "../components/UserContext";
// import Account from "../pages/account";
// import Avatar from "./layout/Avatar";
import Link from "next/link";



export default function ProfileDropDown() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const { username } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);


  return (
    <>
      <div class="relative inline-block text-left">
        <div>
          <button
            onClick={toggling}
            type="button"
            id="dropdown-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {/* <Avatar email={session.user.email} /> */}
            Profile
          </button>
        </div>
        {isOpen && (
          <div
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
            tabindex="-1"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div>{username}</div>
              <div class="font-medium truncate">{session.user.email}</div>
            </div>
            <div class="py-1" role="none">
              <Link href="/login">
                <button
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Profile
                </button>
              </Link>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Your posts
              </a>
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Your reactions
              </a>
              <Link href="/">
                <button
                  onClick={() => supabase.auth.signOut()}
                  type="submit"
                  class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

  


// LAYOUT 


{/* <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
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
</div> */}