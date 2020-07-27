import React from "react";

import "./Page1.css";

function Search1() {
    return (
            <div className="date">
                <select className="month" name="month">
                    <option value="01">January</option>
                    <option value="02">February</option>
                </select>
                <select className="year" name="Year">
                    <option value="01">2020</option>
                    <option value="02">2019</option>
                </select>
                <button className="button1"> {"<"} </button>
                <button className="button2"> {">"} </button>
            </div>
          
    );
}

export default Search1;
