import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [displaystate, setDisplaystate] = useState("");
  useEffect(() => {
    let buttonNumbers = document.querySelectorAll(".button_number");
    let buttonNumber;
    
         
         
    for (buttonNumber=0; buttonNumber < buttonNumbers.length; buttonNumber++) {
      buttonNumbers[buttonNumber].addEventListener("click", function (e) {
        

setDisplaystate(displaystate + e.target.innerText)
      }
      )
    }
  });

  

  

  return (
    <div id="container">
      <div id="display">{displaystate}</div>
      <div id="clear">AC</div>
      <div className="button_number" id="divide">
        /
      </div>
      <div className="button_number" id="multiply">
        x
      </div>

      <div className="button_number" id="seven" >
        7
      </div>
      <div className="button_number" id="eight">
        8
      </div>
      <div className="button_number" id="nine">
        9
      </div>
      <div className="button_number" id="subtract">-</div>

      <div className="button_number" id="four">
        4
      </div>
      <div className="button_number" id="five">
        5
      </div>
      <div className="button_number" id="six">
        6
      </div>
      <div className="button_number" id="add">+</div>

      <div className="button_number" id="one">
        1
      </div>
      <div className="button_number" id="two">
        2
      </div>
      <div className="button_number" id="three">
        3
      </div>
      <div className="button_number" id="equals">=</div>
      <div className="button_number" id="zero">
        0
      </div>
      <div className="button_number" id="decimal">
        .
      </div>
    </div>
  );
}

export default App;
