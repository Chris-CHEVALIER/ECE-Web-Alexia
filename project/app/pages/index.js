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
      <h1 className="wt-title dark:text-slate-100">
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>
      <ul className="dark:text-slate-100">
        <li>
          <Link href="/articles">
            View our articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact us
          </Link>
        </li>
      </ul>
    </Layout>
  )
}
