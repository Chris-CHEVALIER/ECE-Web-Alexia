import Layout from "../../components/Layout";
import { supabase } from '../api/supabase'

const articleDetails = ({ article }) => {
  console.log({ article });
  return (
    <Layout>
    <div className="w-full max-w-3xl mx-auto py-16 px-8">
      <h1 className="text-3xl mb-6">{article.title}</h1>
      <p>{article.content}</p>
    </div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const { data: articles } = await supabase.from("article").select("id");

  const paths = articles.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: article } = await supabase
    .from("article")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      article,
    },
  };
};

export default articleDetails;




// import { useEffect, useState } from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import Layout from '../../components/Layout.js'
// import { supabase } from '../api/supabase'

// export default function Article({
//   article
// }) {
//   return (
//     <Layout>
//       <Head>
//         <title>WebTech - {article.title}</title>
//         <meta name="description" content="WebTech articles page" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1 className='wt-title'>
//         {article.title}
//       </h1>
//       <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
//       <p>
//         {article.message}
//       </p>
//     </Layout>
//   )
// }

// export async function getStaticProps(ctx) {
//   let article = {}
//   let { data, error, status } = await supabase
//     .from('articles')
//     .select(`id, slug, message, title`)
//     .eq('slug', ctx.params.slug)
//     .single()
//   if (!error) article = data // handle errors
//   return {
//     props: {
//       article: article
//     }
//   };
// }

// export async function getStaticPaths(ctx) {
//   let articles = []
//   let { data, error, status } = await supabase
//     .from('articles')
//     .select(`slug`)
//   if (!error) articles = data // handle errors
//   return {
//     paths: articles.map( article => `/articles/${article.slug}`),
//     fallback: false
//   };
// }
