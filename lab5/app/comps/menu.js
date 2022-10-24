
import Link from 'next/link'

const Menu = () =>
{
  return (
    <ul>
      <li>
        <Link href="/home">
          <a>HomePage</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contacts">
          <a>Contact us</a>
        </Link>
      </li>
      <li>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
      </li>
    </ul>
  );
}


export default Menu
