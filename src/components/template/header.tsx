// définit le header (laisse libre le choix du contenu via les enfants)
export default function Header({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">{children}</div>
        </header>
    );
}
