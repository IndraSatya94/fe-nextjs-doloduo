import '../styles/globals.css'
import Layout from '../component/layout.js'
 

function MyApp({ Component, pageProps }) {
  //console.log(pageProps)

  return (
    <Layout pr={Component} >
           <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
