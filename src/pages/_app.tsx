// import de font awesome
import '@fortawesome/fontawesome-free/css/all.css';
// import de bootstrap (customisé)
import '../styles/bootstrap.scss';
// import du thème
import '../styles/theme.css';
// imports de mes styles persos
import '../styles/style.css';
// import du style des galleries
import '../styles/gallery.css';

import { AppProps } from 'next/app';
import Router from 'next/router';
import React, { useEffect } from 'react';

import { GTMPageView, PageEventProps } from '../lib/gtm';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    // lance google tag manager
    useEffect(() => {
        const handleRouteChange = (url: string): PageEventProps => GTMPageView(url);
        Router.events.on('routeChangeComplete', handleRouteChange);
        return (): void => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return <Component {...pageProps} />;
}

// structure du dossier

/*

https://tree.nathanfriend.io :

  data/ (contient les données de l'application)
  public/ (service de fichier statiques)
    files/
    images/
    js/ (scripts js statiques - jquery, etc)
    vendors/ (librairies js importées)
    projects/ (contient les démos des projets statiques)
  src/ (les sources de l'application)
    components/ (contient les composants react du site)
      content/ (contient les composants concret utilisés sur le site)
        sections/ (sections principales de la page d'accueil)
      sections/ (contient des composants permettant de faire des sections)
      template/ (template de base : head, header, footer, nav)
      layout.tsx (layout des pages du site)
    pages/ (répertoire contenant les pages du site)
      portfolio/ (la page template d'un projet du portfolio)
      index.tsx (page d'accueil du site)
    lib/ (les scripts utiles à l'application)
    styles/ (tous les styles de l'application)
  ** (fichiers de config du projet)

*/
