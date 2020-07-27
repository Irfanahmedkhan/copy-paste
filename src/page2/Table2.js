import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import "./Page2.css";
import Data from "./Data2.json";

function Table2() {
  return (
    <div className="tablediv">
      <input type="search" className="tableinput"></input>

      <div className="table">
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  {" "}
                  <Checkbox />{" "}
                </TableCell>
                <TableCell>Tally Name</TableCell>
                <TableCell>Personnel</TableCell>
                <TableCell>Assignments</TableCell>
                <TableCell>Edit Demand</TableCell>
                <TableCell>Edit Tally</TableCell>
              </TableRow>
            </TableHead>

            {Object.keys(Data).map((key) => {
              const data = Data[key];
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>{data.UnitName}</TableCell>
                    <TableCell>{data.Personnel}</TableCell>
                    <TableCell>{data.Assignment}</TableCell>
                    <TableCell>Edit</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Table2;
