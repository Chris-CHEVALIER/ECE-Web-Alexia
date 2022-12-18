// import Head from 'next/head'
import Link from "next/link";
import Layout from "../../components/Layout.js";
import { supabase } from "../api/supabase";

export default function Home({ articles }) {
  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto px-2 dark:bg-gray-900 dark:text-slate-200">
        {articles.map((article) => (
          <Link key={article.id} href={`/${article.id}`}>
            <div className="md:flex-grow mt-10">
              <h2 className="text-2xl font-medium  title-font mb-2">
                {article.title}
              </h2>
              <p className="leading-relaxed ">{article.content}</p>
              <a className="inline-flex items-center mt-4">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            {/* <section class="text-gray-600 body-font dark:text-">
              <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                  <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 dark:text-slate-200">
                    All topics
                  </h2>
                  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    Lastest articles
                  </h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably haven't heard of them man bun deep
                    jianbing selfies heirloom prism food truck ugh squid celiac
                    humblebrag.
                  </p>
                </div>
                <div class="flex flex-wrap">
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2 dark:text-slate-200">
                      Shooting Stars
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      The Catalyzer
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Neptune
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                  <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                    <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                      Melanchole
                    </h2>
                    <p class="leading-relaxed text-base mb-4">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </div>
            </section> */}
          </Link>
        ))}
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
//       <h1 className='wt-title'>
//         Web technologies articles
//       </h1>
//       <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
//       <ul>
//         {articles.map( article => (
//           <li key={article.slug} className="my-5">
//             <h2 className="font-bold mb-1"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
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
