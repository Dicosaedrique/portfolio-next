import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export const bodyId = 'page-top';

// définit la base d'un document (la page HTML en dehors de la balise main)
export default class Document extends NextDocument {
    static async getInitialProps(ctx: any): Promise<any> {
        const initialProps = await NextDocument.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="fr">
                <Head />
                <body id={bodyId}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
