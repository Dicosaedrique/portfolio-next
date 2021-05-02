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
    'https://code.jquery.com/jquery-3.6.0.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js',
    'js/scripts.js'
];
