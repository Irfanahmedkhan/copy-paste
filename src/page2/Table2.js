import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import "./Page2.css";

function Table2(props) {
  return (
    <div className="tablediv-2">
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

            {Object.keys(props.data).map((key) => {
              const data = props.data[key];
              console.log("data " , data)
              console.log("key " , key)
              return (
                <TableBody key={data.UnitName}>
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
