import SessionTableOfMentor from "../components/SessionTableOfMentor";

const MentorSession = () => {
  return (
    <div className="heading1">
      <div>
        <button
          type="button"
          // onClick={handleShowProfilePopUP}
          className="button-style"
        >
          Create Session
        </button>
      </div>
      <SessionTableOfMentor />
    </div>
  );
};

export default MentorSession;
