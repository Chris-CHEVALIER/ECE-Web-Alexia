// import Head from 'next/head'
import Link from "next/link";
import Layout from "../../components/Layout.js";
import { supabase } from "../api/supabase";

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto px-2 dark:bg-gray-900 dark:text-slate-200">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 dark:text-slate-200 mt-20">
            Lastest articles
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-200">
            All topics
          </h1>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-base dark:text-slate-200">
            Welcome to our blog! We are constantly publishing new and exciting
            content for our readers. Our community of writers work hard to bring
            you the latest insights on a variety of exciting topics. On this
            page, you will find our most recent articles. We cover a wide range
            of subjects that are sure to interest and engage you. We hope you
            enjoy reading our articles as much as we enjoy writing them. Thank
            you for visiting and we look forward to sharing more with you guapis
            !
          </p>
        </div>
        {/* {articles.map((article) => (
          <Link key={article.id} href={`/${article.id}`}>
            <section className="text-gray-600 body-font dark:text-slate-200">
              <div className="container px-6 py-24 mx-auto">
                <div className="flex flex-wrap">
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60  dark:text-slate-200">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"/>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-slate-200"> {article.title}</h2>
                    <h4 className="leading-relaxed text-base mb-4">
                    {article.brief}
                    </h4>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60  dark:text-slate-200">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"/>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2  dark:text-slate-200">
                    {article.title}
                    </h2>
                    <h4 className="leading-relaxed text-base mb-4">
                    {article.brief}
                    </h4>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60  dark:text-slate-200">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="blog"/>
                    <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2  dark:text-slate-200">
                    {article.title}
                    </h2>
                    <h4 className="leading-relaxed text-base mb-4">
                    {article.brief}
                    </h4>
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
              </div>
              
            </section>
          </Link>
        ))} */}
        {articles.map((article) => (
          <Link key={article.id} href={`/${article.id}`}>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-20 mx-auto dark:bg-yellow-300">
                <div className="flex m-3 dark:bg-red-500">
                  <div className="xl:w-1/3 h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-105"
                      src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                      alt="blog"
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {article.categories}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                        {article.title}
                      </h1>
                      <h4 className="leading-relaxed mb-3">{article.brief}</h4>
                      <div className="flex items-center flex-wrap ">
                        <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Link>
        ))}
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          See all
        </button>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data: articles } = await supabase.from("article").select("*");

  return {
    props: {
      articles,
    },
  };
};

// export default function Articles({
//   articles
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>WebTech - articles</title>
//         <meta name="description" content="WebTech articles page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1 classNameName='wt-title'>
//         Web technologies articles
//       </h1>
//       <p classNameName="italic my-5">This page fetches data at build time, excellent for SEO.</p>
//       <ul>
//         {articles.map( article => (
//           <li key={article.slug} classNameName="my-5">
//             <h2 classNameName="font-bold mb-1"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
//             <p>{article.message}</p>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   )
// }

// export async function getStaticProps(ctx) {
//   let articles = []
//   let { data, error, status } = await supabase
//     .from('articles')
//     .select(`id, slug, message, title`)
//   if (!error) articles = data // handle errors
//   return {
//     props: {
//       articles: articles
//     }
//   };
// }
