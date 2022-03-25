import { NavBar } from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div>
      <NavBar />
    </div>
    <div>
      <Component {...pageProps} />
    </div>
  </>
}

export default MyApp
