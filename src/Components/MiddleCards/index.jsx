import toast from "react-hot-toast";
import api from "../../Services";
import AddButton from "../AddButton";
import Cards from "../Cards";
import { StyledMiddleCard } from "./styles";

const MiddleCards = ({
  tytle,
  handleOnRender,
  getUserItem,
  techs,
  token,
  setGetUserItem,
  storage,
}) => {
  const handleFilter = (id, endPoint) => {
    api
      .delete(`users/${endPoint}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success(`Informações removidas`);
        api
          .get(`/users/${storage.id}`)
          .then((response) => setGetUserItem(response.data));
      });
  };
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
            handleFilter={handleFilter}
          />
        ))}
    </StyledMiddleCard>
  );
};
export default MiddleCards;
