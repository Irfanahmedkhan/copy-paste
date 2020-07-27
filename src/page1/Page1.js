import React from "react";

import "./Page1.css";
import Table1 from './Table1'
import Recurrence from './Recurrence'
import Search1 from './Search1'

function Page1() {
  return (
    <div className="page1">
      < Search1 />
      <div className='tablediv' >
      <Table1 />
      <Recurrence />
      </div>
    </div>
  );
}

export default Page1;
