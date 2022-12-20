import '../styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import {UserContextProvider} from '../components/UserContext'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </SessionContextProvider>
  )
}



// import '../styles/globals.css'
// import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
// import { SessionContextProvider } from '@supabase/auth-helpers-react'

// function MyApp({ Component, pageProps }) {
//   const [supabase] = useState(() => createBrowserSupabaseClient())

//   return (
//     <SessionContextProvider 
//     supabaseClient={supabase} 
//     initialSession={pageProps.initialSession}>
//       <Component {...pageProps} />
//     </SessionContextProvider>
//   )
// }
// export default MyApp