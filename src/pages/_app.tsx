import { AppProps } from 'next/app';

// import de font awesome
import '@fortawesome/fontawesome-free/css/all.css';

// import de bootstrap (customisé)
import '../styles/bootstrap.scss';

// import du thème et de bootstrap
import '../styles/theme.css';

// imports de mes styles persos
import '../styles/style.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
