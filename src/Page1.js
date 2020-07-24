import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./Page1.css";

function Page1() {
  return (
    <div className="page1">
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

      <div className="tablediv">
        <div className="table">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right"> Date </TableCell>
                  <TableCell align="right">Expected Demand</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Saturday)</TableCell>
                  <TableCell align="right">100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Sunday)</TableCell>
                  <TableCell align="right">120</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Monday)</TableCell>
                  <TableCell align="right">80</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Tuesday)</TableCell>
                  <TableCell align="right">100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Wednesday)</TableCell>
                  <TableCell align="right">60</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Thursday)</TableCell>
                  <TableCell align="right">170</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">01/02/2021 (Friday)</TableCell>
                  <TableCell align="right">110</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="recurrence">
          <h4>Insert Recurrence</h4>
          <label>Start Date</label>
          <input type="date" className="startdate" />
          <label>Stop Date</label>
          <input type="date" className="stopdate" />
          <label>Recurrence</label>
          <select className="daily" className="daily">
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
      </div>
    </div>
  );
}

export default Page1;
