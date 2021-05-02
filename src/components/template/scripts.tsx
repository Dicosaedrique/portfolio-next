interface Props {
    scripts: string[];
}

// composant permettant d'importer des scripts javascript statiques
export default function StaticImportScripts({ scripts }: Props) {
    return (
        <>
            {scripts.map((script, idx) => (
                <script src={script} key={idx}></script>
            ))}
        </>
    );
}

export const DEFAULT_SCRIPTS = [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
    'js/scripts.js'
];
