import styled from "styled-components";

const StyledHero = styled.div`
  top: 0;
  position: relative;
  width: 100%;
  background: url(${(props) => props.img[props.index]}) center/cover no-repeat;
  display: flex;
  height: 66vh;
  transition: all 1s ease-out;
`;

export default StyledHero;
