import MentorTable from "../components/Table";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  return (
    <div>
      <div className="heading1">
        <MentorTable />
        <Pagination/>
      </div>
    </div>
  );
};

export default Dashboard;
