import NextHead from 'next/head';

export interface PageHead {
    title: string;
    noIndex: boolean;
    description?: string;
    author?: string;
}

// définit la head par défaut de la page (import de l'ico, passages de meta, imports des google fonts)
export default function DefaultHead({ title, noIndex, description, author }: PageHead) {
    return (
        <NextHead>
            {noIndex && <meta name="robots" content="noindex"></meta>}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            {author && <meta name="author" content={author} />}
            {description && <meta name="description" content={description} />}
            <link rel="icon" href="/favicon.ico" />

            <title>{title}</title>

            {/* Google fonts */}
            <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <link
                href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic"
                rel="stylesheet"
                type="text/css"
            />
        </NextHead>
    );
}
