import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"; 
import {useSelector} from 'react-redux'

import toast, { Toaster } from "react-hot-toast";

export default function MentorTable() {

  const data = useSelector(state => state.page.data);
  const currentPage = useSelector(state => state.page.currentPage);
  const itemsPerPage = useSelector(state => state.page.itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  console.log(currentPageData)
  const [subscribe, setSubscribe] = useState(false);

  const handleSubscribed = () => {
    setSubscribe(!subscribe);
    if (subscribe) {
      toast.success("Un-Subscribed");
    } else {
      toast.success("Subscribed");
    }
  };

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
                {" "}
                <span className="text-3xl font-semibold">
                  Mentor Image
                </span>{" "}
              </TableCell>
              <TableCell style={{ width: "150px" }} align="center">
                <span className="text-3xl font-semibold">Mentor's Name</span>
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                <span className="text-3xl font-semibold">Teaches</span>
              </TableCell>
              <TableCell style={{ width: "200px" }} align="center">
                <span className="text-3xl font-semibold">Availability</span>
              </TableCell>
              <TableCell style={{ width: "120px" }} align="center">
                <span className="text-3xl font-semibold">Subscribe</span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPageData?.map((item,index) =>(
            <TableRow key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell style={{ width: "100px" }} component="th" scope="row">
                <img
                  src="https://i.pinimg.com/236x/4c/5d/b5/4c5db5ab497bfb24394771b607c011fb.jpg"
                  alt=""
                  className="w-[80px] h-[80px] object-cover rounded-full"
                />
              </TableCell>
              <TableCell align="center">
                <span className="text-3xl">{item.mentorName}</span>
              </TableCell>
              <TableCell align="center">
                <span className="text-3xl">Nest.js with SQL</span>
              </TableCell>
              <TableCell align="center">
                <span className="text-3xl">08:00 pm - 09:45pm</span>
              </TableCell>
              <TableCell align="center">
                {subscribe ? (
                  <button
                    onClick={handleSubscribed}
                    className="bg-gray-500 py-4 text-xl font-semibold rounded-md  uppercase tracking-[1px] text-white w-full border-none focus:outline-none">
                    Unsubscribe
                  </button>
                ) : (
                  <button
                    onClick={handleSubscribed}
                    className="w-full py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)] text-xl tracking-[1px]">
                    Subscribe
                  </button>
                )}
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
