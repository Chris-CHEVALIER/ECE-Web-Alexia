



{/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"> */}

<section className="pt-16 bg-blueGray-50">
<div className="w-full lg:w-4/12 px-4 mx-auto">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
          <div className="relative">
            <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
          </div>
        </div>
        <div className="w-full px-4 text-center mt-20">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                22
              </span>
              <span className="text-sm text-blueGray-400">Friends</span>
            </div>
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                10
              </span>
              <span className="text-sm text-blueGray-400">Photos</span>
            </div>
            <div className="lg:mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                89
              </span>
              <span className="text-sm text-blueGray-400">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          Jenna Stones
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          Los Angeles, California
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <a href="javascript:void(0);" className="font-normal text-pink-500">
              Update
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</section>



// import { useRouter } from 'next/router'
// import { useContext, useEffect } from 'react'
// import Head from 'next/head'
// import Layout from '../components/Layout.js'
// import UserContext from '../components/UserContext'

// export default function Contact() {
//   const { user, logout, loading } = useContext(UserContext)
//   const router = useRouter()
//   useEffect(() => {
//     if (!(user || loading)) {
//       router.push('/login')
//     }
//   }, [user, loading, router])
//   const onClickLogout = function() {
//     logout()
//   }
//   return (
//     <Layout>
//       hello
//       <Head>
//         <title>WebTech - user signedin</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       { !(user || loading) ?
//         <p>Redirecting...</p>
//         :
//         <>
//           <button
//             className="rounded px-3 py-2 text-white bg-slate-500 hover:bg-blue-500"
//             onClick={onClickLogout}
//           >
//             Sign out
//           </button>
//           <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
//         </>
//       }
//     </Layout>
//   )
// }
