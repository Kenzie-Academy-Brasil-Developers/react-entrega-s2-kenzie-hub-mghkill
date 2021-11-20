import { GrAddCircle } from "react-icons/gr";
import { useHistory } from "react-router";

const AddButton = ({ route }) => {
  const history = useHistory();
  return (
    <>
      <button onClick={() => history.push(route)}>
        <GrAddCircle />
      </button>
    </>
  );
};
export default AddButton;
