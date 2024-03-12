import { useTranslation } from 'react-i18next';

const WAX_CORD_CM_PER_LINE = 0.4;
const EXTRA_CORD_PER_SIDE_CM = 15;

/**
 * Calculates the length of cord needed for making a bracelet.
 * @param {number} height - Height of the bracelet.
 * @param {string} unit - Unit of measurement for height ("cm" or "in").
 * @param {string} start - Starting point of the bracelet ("beginning" or "middle").
 * @returns {string} - Length of cord needed in the specified unit.
 */
export function calculateCordLength(height, unit, start) {
    let result = height * WAX_CORD_CM_PER_LINE;
    if (start === "beginning") {
        result += EXTRA_CORD_PER_SIDE_CM * 2;
    } else {
        result += EXTRA_CORD_PER_SIDE_CM;
    }
    if (unit === "in") {
        result /= 2.54;
    }
    return result.toFixed(1);
}

/**
 * Displays a message indicating the amount of cord needed for making a bracelet.
 * @param {object} props - Props containing height, unit, start, and width.
 * @returns {JSX.Element} - JSX element displaying the message.
 */
export function CordLengthMessage({ height, unit, start, width }) {
    const { t } = useTranslation("global");
    let cordLength = calculateCordLength(height, unit, start);
    let cordAmount = start === "middle" ? width : Math.ceil(width / 2);
    unit = unit === "in" ? t("CalcForm.form.in") : t("CalcForm.form.cm");
    start = start === "beginning" ? t("CalcForm.form.start1") : t("CalcForm.form.start2");
    const translatedResultString = t("CalcForm.result.p", { height:height, width:width, start:start, cordAmount:cordAmount, cordLength:cordLength, unit:unit });
    console.log(translatedResultString);
    return (
        <section id="result-section">
            <hr />
            <h2>{t("CalcForm.result.h2")}</h2>
            <div id="result">
                <p> {translatedResultString} </p>
            </div>
        </section>
    );
}
