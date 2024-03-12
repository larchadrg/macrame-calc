import './App.css';
import {showResult} from './cordCalculations.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">
            <img src="favicon.png" alt="Logo" 
            width="30" height="30" 
            className="d-inline-block align-text-top"></img>
            Macrame Designer</a>
    </nav>
    <div className="container">
        <div className="container text-center">
            <div className="row">
                <div className="col text-center d-flex flex-column justify-content-center">
                    <h1>Welcome to Macrame Designer!</h1>
                    <p>This is a simple tool to help you calculate the length of cord you need for your macrame project. Just enter the dimensions of your project and we'll do the rest!</p>
                    <form action="#cord-calculator">
                        <input type="submit" value="Get Started" className="btn btn-primary"></input>
                    </form>
                </div>
                <div className="col-sm">
                    <img src="spider-logo-beta.png" className="img-fluid"></img>
                </div>
            </div>
        </div>
        <hr></hr>
        <section id="cord-calculator">
            <h2>Cord Length Calculator</h2>
            <p>Not sure how much cord you need for your macrame project? No problem! We can help you with that. Just enter the dimensions of your project and we'll calculate the length of cord you need.</p>
            <h3>Alpha Pattern</h3>
            <p>Note: take into account that this calculation is only for the base cords, 
                and not for the cords used to make the knots.
            </p>
            <p>Enter below the width and height of the bracelet you want to make:</p>
            <form onSubmit={(e) => showResult(e)}>
                <div className="mb-3">
                    <label for="bracelet-width" className="form-label">Width:</label>
                    <input type="number" id="bracelet-width" name="width" className="form-control" min="1" required></input>
                </div>
                <div className="mb-3">
                    <label for="bracelet-height" className="form-label">Height:</label>
                    <input type="number" id="bracelet-height" name="height" className="form-control" min="1" required></input>
                </div>
                
                <label for="cm">Show length in: </label>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="in" name="unit" value="in" required></input>
                        <label className="form-check-label" for="in">Inches</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="cm" name="unit" value="cm" required></input>
                        <label className="form-check-label" for="cm">Centimeters</label>
                    </div>
                </div>
                <label for="begginning">Where are you starting your design from?</label>
                <div className="mb-3">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="begginning" name="start" value="begginning" required></input>
                        <label className="form-check-label" for="begginning">The beginning</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" id="middle" name="start" value="middle" required></input>
                        <label className="form-check-label" for="middle">The middle</label>
                    </div>
                </div>
                <input type="submit" value="Calculate" className="btn btn-primary"></input>
            </form>
        </section>
        <section id="result-section">
            <div id="result"></div>
        </section>
    </div>
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 mt-3 bg-secondary text-light ">
        <p className="m-0">Made in March 2024, by Lara Combina. Icons by <a href="https://icons8.com/" className="text-light">icons8.</a></p>
    </footer>    
    </div>
  );
}

export default App;
