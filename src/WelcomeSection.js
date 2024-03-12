import {useTranslation} from 'react-i18next';

export default function WelcomeSection(){
     const [t, i18n] = useTranslation("global");
    return(
        <div className="container text-center">
            <div className="row">
                <div className="col text-center d-flex flex-column justify-content-center">
                    <h1>{t("WelcomeSection.h1")}</h1>
                    <p>{t("WelcomeSection.p")}</p>
                    <a href="#cord-calculator">
                        <input type="submit" value={t("WelcomeSection.button")} className="btn btn-primary"></input>
                    </a>
                </div>
                <div className="col-sm">
                    <img src="spider-logo-beta.png" className="img-fluid"></img>
                </div>
            </div>
        </div>
    )
}