//insert article with title and content in supabase

//make sure to import supabase from api/supabase.js
import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../../components/Layout.js'
//create article with title and content in supabase table article 
export default function createArticle() {
  const supabase = useSupabaseClient()

  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categories, setCategories] = useState('')
  const [image_url, setImage_url] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [brief, setBrief] = useState('')

  const handleSubmit = async function(e){
    e.preventDefault();
    const { data, error } = await supabase
      .from('article')  
      .insert(
        {
          title : title,
          content : content,
          categories : categories,
          image_url : image_url,
          author_id : authorId,
          brief : brief
        }
      );
      
    if(error){
      setMessage('Sorry, an unexpected error occured.')
    }else{
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Your article has been registered.</p>
        </div>
      )
    }
}
  return(
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-slate-200 dark:bg-gray-900 w-full">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Create a new Article</h2>
                  <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-l">Enter the caracteristics of your article</p>
              <form onSubmit = {handleSubmit}  className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                    <input type="text" id="title" placeholder="title of your artile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="Content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Content</label>
                    <input type="text" id="content" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="desribe your article" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Categories</label>
                    <input type="text" id="categories"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="describe the categories" value={categories} onChange={(e) => setCategories(e.target.value)}/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="authorId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">author id</label>
                    <input type="text" id="authorId"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name of the author" value ={authorId} onChange={(e) => setAuthorId(e.target.value)} />
                </div>
                 <div className="sm:col-span-2">
                    <label htmlFor="fileinput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">URL of the image</label>
                    <input type="file" id="fileinput"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value={image_url} onChange={(e) => setImage_url (e.target.value)}/>
                </div> 
                <div className="sm:col-span-2">
                    <label htmlFor="brief" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Brief</label>
                    <input type="text" id="brief"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="a little brief of the article" value={brief} onChange={(e) => setBrief(e.target.value)}/>
                </div>
                <button className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Article</button>
                
              </form>
            </div>
      </section>
    </Layout>
  )
}
