import '../styles/globals.css'
import '../styles/freestyle.css'
import '../styles/home.css'
import '../styles/gallery.css'
import '../styles/menu.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
