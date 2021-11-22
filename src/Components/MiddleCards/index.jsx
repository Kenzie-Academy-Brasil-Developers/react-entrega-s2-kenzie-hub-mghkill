import AddButton from "../AddButton";
import Cards from "../Cards";
import { StyledMiddleCard } from "./styles";

const MiddleCards = ({
  tytle,
  handleOnRender,
  getUserItem,
  techs,
  handleModalFilter,
}) => {
  return (
    <StyledMiddleCard>
      <div>
        <h3>{tytle}</h3>
        <AddButton techs={techs} onclick={handleOnRender} />
      </div>
      {getUserItem &&
        getUserItem.map((item, index) => (
          <Cards
            key={index}
            techs={techs}
            item={item}
            handleModalFilter={handleModalFilter}
          />
        ))}
    </StyledMiddleCard>
  );
};
export default MiddleCards;
