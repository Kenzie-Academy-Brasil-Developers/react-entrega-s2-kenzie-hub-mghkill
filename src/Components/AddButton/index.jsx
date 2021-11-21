import { GrAddCircle } from "react-icons/gr";
import { StyledAddButton } from "./styles";

const AddButton = ({ onclick }) => {
  return (
    <>
      <StyledAddButton onClick={onclick}>
        <GrAddCircle />
      </StyledAddButton>
    </>
  );
};
export default AddButton;
