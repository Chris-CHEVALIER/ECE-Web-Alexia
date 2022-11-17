
import Link from 'next/link'

const Menu = () =>
{
  return (
    <ul>
      <li>
        <Link href="/home">
          <a>Home Page</a>
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
        <Link href="/articlesblog">
          <a>Articles</a>
        </Link>
      </li>
    </ul>
  );
}


export default Menu
