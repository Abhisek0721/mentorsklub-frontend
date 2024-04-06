import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import toast, { Toaster } from "react-hot-toast";

export default function Menteeviewsession() {


     const  CheckLiveStateofSession = (startDate, endDate) =>{
        const currentTime = new Date()
        if(currentTime.getTime()>=startDate?.getTime() && currentTime.getTime()<endDate.getTime())
        {
            return true
        }
        return false;
    }
    const start = 1649182800000;
    const end = 1649186400000;
    const isSessionlive = CheckLiveStateofSession(start,end)
    

   
    

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis quisquam illum mollitia corporis."


    return (
        <div className="max-w-full overflow-auto">
            <div>
                <Toaster />
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 450 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell style={{ width: "120px" }}>
                                <span className="text-3xl font-semibold">
                                   Mentor Name
                                </span>
                            </TableCell>

                            <TableCell style={{ width: "120px" }}>
                                <span className="text-3xl font-semibold">
                                    Session Topic
                                </span>
                            </TableCell>
                            <TableCell style={{ width: "150px" }} align="center">
                                <span className="text-3xl font-semibold">Category</span>
                            </TableCell>
                            <TableCell style={{ width: "200px" }} align="center">
                                <span className="text-3xl font-semibold">Start Time</span>
                            </TableCell>
                            <TableCell style={{ width: "200px" }} align="center">
                                <span className="text-3xl font-semibold">End Time</span>
                            </TableCell>
                            <TableCell style={{ width: "120px" }} align="center">
                                <span className="text-3xl font-semibold">Join</span>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }} className="cursor-default">

                            <TableCell align="center">
                                <span className="text-3xl">Mentor Club</span>
                            </TableCell>    

                            <TableCell align="left">
                                <span className="text-3xl" title={text}>
                                    <span>
                                        {text.length > 10 ? text.slice(0, 10) + '...' : text}
                                    </span>
                                </span>
                            </TableCell>

                            <TableCell align="center">
                                <span className="text-3xl">Reachi wilson</span>
                            </TableCell>
                            <TableCell align="center">
                                <span className="text-3xl">02:00 pm</span>
                            </TableCell>
                            <TableCell align="center">
                                <span className="text-3xl">03:45pm</span>
                            </TableCell>
                            <TableCell align="center">
                                {
                                    isSessionlive ? (<button
                                    // onClick={}
                                    className="button-style py-2 rounded-[20px]">
                                    Join
                                </button>) : (<span className="text-3xl">Upcoming</span>)
                                }
                                
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
