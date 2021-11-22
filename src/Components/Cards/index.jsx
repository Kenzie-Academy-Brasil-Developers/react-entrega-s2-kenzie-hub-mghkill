import { StyledCard, StyleTools } from "./styles";
import { DiGitBranch } from "react-icons/di";
import { GiCircleCage } from "react-icons/gi";

const Cards = ({ techs, item, handleModalFilter }) => {
  return (
    <StyledCard techs={!!techs}>
      {techs ? (
        <>
          <StyleTools>
            <GiCircleCage />
          </StyleTools>
          <span>
            <h2>{item.title}</h2>
            <h5>{item.status}</h5>
          </span>
          <button onClick={() => handleModalFilter(item, "techs")}></button>
        </>
      ) : (
        <>
          <StyleTools>
            <DiGitBranch />
          </StyleTools>
          <span>
            <h2>{item.title}</h2>
            <h5>{item.description}</h5>
          </span>
          <button onClick={() => handleModalFilter(item, "works")}></button>
        </>
      )}
    </StyledCard>
  );
};

export default Cards;
