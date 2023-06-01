import Footer from '../components/Footer'
import Header from '../components/Header'
import '../style/global.css'
import '../style/layout.css'

function MyApp ({Component, pageProps}) {

   return 
      <>
      <Header />
      <component {...pageProps} />
      <Footer />
      </>
      

}

export default MyApp