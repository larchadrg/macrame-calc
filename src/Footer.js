import { useTranslation } from "react-i18next";
export default function Footer(){
    const {t} = useTranslation("global");
    return(
        <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 mt-3 bg-secondary text-light ">
        <p className="m-0"> {t("Footer.p")} <a href="https://icons8.com/" className="text-light">icons8.</a></p>
    </footer>  
    );
};