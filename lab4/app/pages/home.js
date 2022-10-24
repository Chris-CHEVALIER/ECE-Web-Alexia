
import Header from '../comps/header'
import Footer from '../comps/footer'
import Menu from '../comps/menu'
import styles from '../styles/Home.module.css'


export default function homePage() {
  return (

    <div>
      < Header />
      < Menu />
      <h1>
        HomePage
      </h1>
      <p>
      this is a the home page.
      </p>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}
