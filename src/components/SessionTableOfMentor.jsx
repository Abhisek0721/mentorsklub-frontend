import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";

import { Toaster } from "react-hot-toast";
import SessionApi from "../redux/feature/session/sessionApi";
import {
  formatTimestamp,
  isSessionLive,
  truncateString,
} from "../utils/tableUtils";

const SessionTableOfMentor = () => {
  const [mentorSessions, setMentorSessions] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 13; // Change this as per your requirement

  const getAllSessionsOfMentor = async (page) => {
    const data = await SessionApi.getSessionsOfMentor(page);
    console.log(page);
    if (data?.data) {
      setMentorSessions(data?.data?.data);
      setPageData(data?.page);
    }
  };

  useEffect(() => {
    getAllSessionsOfMentor(currentPage);
  }, [currentPage]);

  const handleSessionJoin = (meetingLink) => {
    window.open(meetingLink, "_blank");
  };

  const handleChangePage = (event, newPage) => {
    console.log("hii");
    setCurrentPage(newPage);
  };

  return (
    <div className="max-w-full overflow-auto mt-10">
      <div>
        <Toaster />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "120px" }}>
                <span className="text-3xl font-semibold">Meeting Topic</span>
              </TableCell>
              <TableCell style={{ width: "150px" }} align="center">
                <span className="text-3xl font-semibold">Meeting Platform</span>
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
            {mentorSessions &&
              mentorSessions.map((eachSession) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={eachSession?._id}
                  >
                    <TableCell align="left">
                      <span className="text-3xl text-wrap">
                        {truncateString(eachSession?.meetingTopic)}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span className="text-3xl">
                        {eachSession?.meetingPlatform}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span className="text-3xl">
                        {formatTimestamp(eachSession?.startTime)}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span className="text-3xl">
                        {formatTimestamp(eachSession?.endTime)}
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      {isSessionLive(
                        eachSession?.startTime,
                        eachSession?.endTime
                      ) ? (
                        <button
                          onClick={() =>
                            handleSessionJoin(eachSession?.meetingLink)
                          }
                          className="w-28 py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)] text-xl tracking-[1px]"
                        >
                          Join
                        </button>
                      ) : (
                        <span className="text-2xl bg-blue-200 rounded-full px-5 py-2">
                          Upcoming...
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {pageData && (
        <div className="mt-5 flex justify-center">
          <Pagination
            count={pageData?.records?.total}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            size="large"
            siblingCount={2}
          />
        </div>
      )}
    </div>
  );
};

export default SessionTableOfMentor;
