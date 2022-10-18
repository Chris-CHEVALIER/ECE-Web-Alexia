import Header from '../comps/header'
import Footer from '../comps/footer'
import Menu from '../comps/menu'
import styles from '../styles/Home.module.css'
export default function about() {
  return (
    <div>
    < Header />
    < Menu />
      <h1>
        AboutPage
      </h1>
      <p>
      this is a the about page.
      </p>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}
