import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {

  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/welcomehome.png" alt="homepage" />

    </Layout>
  )
}


// const Home = () => {
//   const session = useSession()
//   const supabase = useSupabaseClient()

//   return (
//     <div className="container" style={{ padding: '50px 0 100px 0' }}>
//       {!session ? (
//         <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
//       ) : (
//         <Account session={session} />
//       )}
//     </div>
//   )
// }

// export default Home