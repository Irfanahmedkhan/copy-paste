import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import "./Page2.css";

function Page2() {
  return (
    <div>
      <div>
        <form className="form">
          <input type="search" placeholder="VAC Dentist"></input>
          <input type="search" placeholder="Monthly"></input>
        </form>
      </div>
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
                  <TableCell align="right">Tally Name</TableCell>
                  <TableCell align="right">Personnel</TableCell>
                  <TableCell align="right">Assignments</TableCell>
                  <TableCell align="right">Edit Demand</TableCell>
                  <TableCell align="right">Edit Tally</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="right">
                    {" "}
                    <Checkbox />{" "}
                  </TableCell>
                  <TableCell align="right">Admin Units</TableCell>
                  <TableCell align="center">48</TableCell>
                  <TableCell align="right">67</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">
                    {" "}
                    <Checkbox />{" "}
                  </TableCell>
                  <TableCell align="right">Admin Units</TableCell>
                  <TableCell align="right">48</TableCell>
                  <TableCell align="right">67</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">
                    {" "}
                    <Checkbox />{" "}
                  </TableCell>
                  <TableCell align="right">Admin Units</TableCell>
                  <TableCell align="right">48</TableCell>
                  <TableCell align="right">67</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">
                    {" "}
                    <Checkbox />{" "}
                  </TableCell>
                  <TableCell align="right">Admin Units</TableCell>
                  <TableCell align="right">48</TableCell>
                  <TableCell align="right">67</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Edit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Page2;
