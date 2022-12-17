
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({
  children
}){
  return (
    <div>
      <Header />
      <main className="py-15 min-h-screen max-w-screen md:max-w-2xl md:mx-auto dark:bg-gray-900">
      {children}
      </main>
      <Footer />
    </div>
  )
}
