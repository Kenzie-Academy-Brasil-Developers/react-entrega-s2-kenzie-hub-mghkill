import AddButton from "../AddButton";
import { StyledMiddleCard } from "./styles";

const MiddleCards = ({ tytle, handleOnRender, valueApi }) => {
  return (
    <StyledMiddleCard>
      <div>
        <h3>{tytle}</h3>
        <AddButton onclick={handleOnRender} />
      </div>
    </StyledMiddleCard>
  );
};
export default MiddleCards;
