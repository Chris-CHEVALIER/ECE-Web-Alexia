import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import Account from '../components/Account'
import Layout from '../components/Layout.js'

const Connection = () => {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()
  if(session) router.push('/')

  return (
    <Layout>
    <div className="py-4 lg:py-16 px-20 mx-auto max-w-screen-md">
      {!session ? (
        <Auth 
          supabaseClient={supabase} 
          appearance={{ theme: ThemeSupa }} 
          theme="dark" 
          providers={['github', 'google', 'twitter']}
          />
      ) : (
        <Account session={session} />
      )}
    </div>
    </Layout>
  )
}

export default Connection


