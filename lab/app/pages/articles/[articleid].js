import Header from '../../comps/Header'
import Footer from '../../comps/Footer'
import Menu from '../../comps/menu'

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
                <p class="text-lg font-medium text-gray-900 dark:text-white"> <span class="italic font-bold"> title : {item.title} </span></p>
              </li>
              <li>
                <p class="text-lg font-medium text-gray-900 dark:text-white"> <span class="italic font bold"> content : {item.content} </span></p>
              </li>
              <li>
                <p class="text-lg font-medium text-gray-900 dark:text-white"> <span class="italic font-bold"> date : {item.date} </span></p>
              </li>
              <li>
                <p class="text-lg font-medium text-gray-900 dark:text-white"> <span class="italic font bold"> author : {item.author} </span></p>
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
