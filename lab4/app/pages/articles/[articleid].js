import Header from '../../comps/header'
import Footer from '../../comps/footer'
import Menu from '../../comps/menu'
import styles from '../../styles/Home.module.css'
import { useEffect} from 'react';
import { useRouter} from 'next/router'
export default function DisplayArticles({dataExport}) {
  const router = useRouter();
  const {articleid} = router.query;
 let description
return dataExport.map(function(item){

    if (item.id === articleid) {
      console.log(item.title)
      console.log(item.content)
      console.log(item.date)
      console.log(item.author)
      return(
        <div>
           <ul>
              <li>
              title : {item.title}
              </li>
              <li>
                content : {item.content}
              </li>
              <li>
                date : {item.date}
              </li>
              <li>
                author : {item.author}
              </li>
          </ul>
        </div>
      );
    }
  });


}

export async function getServerSideProps(){
  const url = 'http://localhost:3000/api/articlesblog';
  const res = await fetch(url)
  const dataExport = await res.json()
  return {props : {dataExport}};
}
