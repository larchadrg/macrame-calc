WAX_CORD_CM_PER_LINE = 0.4;
EXTRA_CORD_PER_SIDE_CM = 15;

function calculateCordLength(){
    let height = document.getElementById('bracelet-height').value;
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let start = document.querySelector('input[name="start"]:checked').value;
    let result = height * WAX_CORD_CM_PER_LINE;
    if (start == "begginning") {
        result += EXTRA_CORD_PER_SIDE_CM
        result = result * 2; 
    } else {
        result += EXTRA_CORD_PER_SIDE_CM * 2;
    }
    if (unit == "in") {
        result = result / 2.54;
    }
    console.log(result);
    return result.toFixed(1); 
}

function showResult(){
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let cordLength = calculateCordLength();
    let height = document.getElementById('bracelet-height').value;
    let width = document.getElementById('bracelet-width').value;
    let start = document.querySelector('input[name="start"]:checked').value;
    let cordAmount = start == "middle" ? width : Math.ceil(width/2);

    //create new elements
    let hr = document.createElement('hr');
    let h2 = document.createElement('h2');
    h2.innerHTML = 'Result';
    let p = document.createElement('p');
    p.innerHTML = `For a bracelet of height ${height} and width ${width},\
    starting from the ${start},\ 
    you will need to cut ${cordAmount} base cords of ${cordLength}${unit}. each.`;

    //append to the DOM
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.appendChild(document.createElement('hr'));
    resultDiv.appendChild(h2);
    resultDiv.appendChild(p);    
    window.scrollTo(0, document.getElementById('result').offsetTop)
}