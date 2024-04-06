import CreateMeetingModal from "../components/CreateMeeting";
import SessionTableOfMentor from "../components/SessionTableOfMentor";

const MenteeSession = () => {
  return (
    <div className="heading1">
      <div>
        <h1 className="ml-10 text-2xl">All Upcoming and Live Sessions</h1>
      </div>
      <SessionTableOfMentor />
    </div>
  );
};

export default MenteeSession;
