import React from "react";
import "./Page1.css";

function Recurrence() {
  return (
    <div className="recurrence">
      <h4>Insert Recurrence</h4>
      <label>Start Date</label>
      <input type="date" className="startdate" />
      <label>Stop Date</label>
      <input type="date" className="stopdate" />
      <label>Recurrence</label>
      <select className="daily" >
        <option value="01">Daily</option>
        <option value="02">2 time</option>
      </select>
      <label>Every</label>
      <span>
        <input type="every" className="every" placeholder="1" />
        &nbsp;Day(s)
      </span>
      <label>Value</label>
      <div className="value"></div>{" "}
      <div className="button">
        <button>Insert/Update Recurrence</button>
        <button>Delete by Recurrence</button>
      </div>
    </div>
  );
}

export default Recurrence;
