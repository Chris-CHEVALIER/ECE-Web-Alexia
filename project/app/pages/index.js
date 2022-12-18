import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import Account from '../components/Account'

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
