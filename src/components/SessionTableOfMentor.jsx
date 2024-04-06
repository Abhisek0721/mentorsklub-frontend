import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import toast, { Toaster } from "react-hot-toast";
import SessionApi from "../redux/feature/session/sessionApi";
import {
  formatTimestamp,
  isSessionLive,
  truncateString,
} from "../utils/tableUtils";

const SessionTableOfMentor = () => {
  const [subscribe, setSubscribe] = useState(false);
  const [mentorSessions, setMentorSessions] = useState(null);
  const [pageData, setPageData] = useState(null);

  const handleSubscribed = () => {
    setSubscribe(!subscribe);
    if (subscribe) {
      toast.success("Un-Subscribed");
    } else {
      toast.success("Subscribed");
    }
  };

  const getAllSessionsOfMentor = async () => {
    const data = await SessionApi.getSessionsOfMentor();
    if (data?.data) {
      setMentorSessions(data?.data?.data);
      setPageData(data?.page);
    }
  };

  useEffect(() => {
    getAllSessionsOfMentor();
  }, []);

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
                {" "}
                <span className="text-3xl font-semibold">
                  Meeting Topic
                </span>{" "}
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
                      <span className="text-3xl">
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
                          // onClick={handleSessionJoin}
                          className="w-full py-3 rounded-sm font-semibold bg-[var(--color-brand-500)] text-[var(--color-grey-0)] text-xl tracking-[1px]"
                        >
                          Join
                        </button>
                      ) : (
                        <span className="text-2xl bg-blue-200 rounded-full px-5 py-2">Upcoming...</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SessionTableOfMentor;
