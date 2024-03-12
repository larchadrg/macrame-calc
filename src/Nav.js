import { useTranslation } from 'react-i18next';

export default function Nav({ changeLanguage }) {
    const { t } = useTranslation("global");

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">
                    <img src="favicon.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"></img>
                    Macrame Designer
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t("Language.label")}
                            </a>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" onClick={() => changeLanguage("en")}>{t("Language.en")}</button></li>
                                <li><button className="dropdown-item" onClick={() => changeLanguage("es")}>{t("Language.es")}</button></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
