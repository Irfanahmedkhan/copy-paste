import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./Page1.css";

import Data from './Data1.json'

function Table1() {
  return (
    <div className="table">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell > Date </TableCell>
              <TableCell >Expected Demand</TableCell>
            </TableRow>
          </TableHead>
                  {Object.keys(Data).map((key) => {
                      const data = Data[key];
                      return (
                          <TableBody>
                              <TableRow>
                                  <TableCell>{data.Date}</TableCell>
                                  <TableCell>{data.demand}</TableCell>
                              </TableRow>
                          </TableBody>
                      );
                  })}
        </Table>
      </TableContainer>
    </div>
  );
}

export default Table1;
