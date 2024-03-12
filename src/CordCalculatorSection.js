import {useTranslation} from 'react-i18next';
import { CordLengthMessage } from "./cordCalculations";
import { useState } from "react";
import { useRef, useEffect } from 'react';

export default function CordCalculatorSection(){
    const [t, i18n] = useTranslation("global");
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        height: "",
        unit: "",
        start: "",
        width: ""
    });

    const resultRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleChange = (e) => {
        setSubmitted(false);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(() => {
        if (submitted) {
            resultRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [submitted]);

    return(
        <section id="cord-calculator">
            <h2>{t("CalcForm.h2")}</h2>
            <p>{t("CalcForm.p.description")}</p>
            <h3>{t("CalcForm.h3")}</h3>
            <p>{t("CalcForm.p.note")}</p>
            <p>{t("CalcForm.p.instructions")}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="bracelet-width" className="form-label">{t("CalcForm.form.label1")}:</label>
                    <input type="number" id="bracelet-width" name="width" className="form-control" min="1" required onChange={handleChange}></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="bracelet-height" className="form-label">{t("CalcForm.form.label2")}:</label>
                    <input type="number" id="bracelet-height" name="height" className="form-control" min="1" required onChange={handleChange}></input>
                </div>
                
                <label htmlFor="cm">{t("CalcForm.form.choose-unit")}</label>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="in" name="unit" value="in" required onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="in">{t("CalcForm.form.in")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="cm" name="unit" value="cm" required onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="cm">{t("CalcForm.form.cm")}</label>
                    </div>
                </div>
                <label htmlFor="beginning">{t("CalcForm.form.choose-start")}</label>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="begginning" name="start" value="beginning" required onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="begginning">{t("CalcForm.form.start1")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="middle" name="start" value="middle" required onChange={handleChange}></input>
                        <label className="form-check-label" htmlFor="middle">{t("CalcForm.form.start2")}</label>
                    </div>
                </div>
                <input type="submit" value={t("CalcForm.form.button")} className="btn btn-primary" onChange={handleChange}></input>
            </form>
            <div ref={resultRef}></div>
            {submitted ? <CordLengthMessage
            height={formData.height}
            unit={formData.unit}
            start={formData.start}
            width={formData.width}/> : null}
        </section>
    )
}