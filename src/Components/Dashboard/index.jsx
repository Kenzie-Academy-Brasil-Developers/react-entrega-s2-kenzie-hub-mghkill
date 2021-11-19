import { Redirect } from "react-router";

const Dashboard = ({ allowed }) => {
  if (!allowed) {
    return <Redirect to="/login" />;
  }
  return <div>Dashboard</div>;
};
export default Dashboard;
