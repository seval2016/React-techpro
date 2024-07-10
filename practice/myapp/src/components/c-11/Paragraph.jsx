import React, { useState } from "react";
import "./text.css";
import data from "./data.jsx";

const Paragraph = () => {
  const [count, SetCount] = useState(0);
  const [text, setText] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > data.length) {
      amount = data.length;
    }
    setText(data.slice(0, amount));
  };

  const clear =(e)=>{
    e.preventDefault();
    SetCount(0);
    setText([]);
  }


  return (

    <section className="section-center">
        <h3>HOW MANY PARAGRAPHS</h3>
        <form action="">
            <label htmlFor="amount">Paragraphs</label>
            <input type="number" id="amount" value={count} onChange={ (e) => SetCount(e.target.value)} />
            <button className="btn" onClick={handleGenerate}>GENERATE</button>
            <button className="btn" onClick={clear}>CLEAR</button>

        </form>

        <div className="lorem-text">
            {
                text.map((item,index)=>(

                    <p key={index}>{item}</p>

                ))
            }
        </div>

    </section>


    )
};

export default Paragraph;
