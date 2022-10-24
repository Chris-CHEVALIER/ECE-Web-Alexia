
import Header from '../comps/header'
import Footer from '../comps/footer'
import Menu from '../comps/menu'
import styles from '../styles/Home.module.css'

export default function contacts() {
  return (
    <div>
    < Header />
    < Menu />
      <h1>
        Liste des Contacts
      </h1>
      <p>
      this is a contacts page.
      </p>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}
