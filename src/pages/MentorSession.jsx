import CreateMeetingModal from "../components/CreateMeeting";
import SessionTableOfMentor from "../components/SessionTableOfMentor";

const MentorSession = () => {
  return (
    <div className="heading1">
      <div>
        <CreateMeetingModal />
      </div>
      <SessionTableOfMentor />
    </div>
  );
};

export default MentorSession;
