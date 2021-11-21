import { IoMdAddCircle } from "react-icons/io";
import { StyledAddButton } from "./styles";

const AddButton = ({ onclick, techs }) => {
  return (
    <>
      <StyledAddButton techs={!!techs} onClick={() => onclick(techs)}>
        <p>
          <IoMdAddCircle />
        </p>
      </StyledAddButton>
    </>
  );
};
export default AddButton;
