
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({
  children
}){
  return (
    <div>
      <Header />
      <main className="min-h-screen max-w-screen bg-slate-200 dark:bg-gray-900">
      {children}
      </main>
      <Footer />
    </div>
  )
}
