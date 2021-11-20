import { GrAddCircle } from "react-icons/gr";
import { useHistory } from "react-router";
import { StyledAddButton } from "./styles";

const AddButton = ({ route }) => {
  const history = useHistory();
  return (
    <>
      <StyledAddButton onClick={() => history.push(route)}>
        <GrAddCircle />
      </StyledAddButton>
    </>
  );
};
export default AddButton;
