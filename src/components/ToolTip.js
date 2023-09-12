import styled from "styled-components";

const ToolTip = ({ id, bar, area, time }) => {
  return (
    <Container>
      <p>{id}</p>
      <p>Bar: {bar}</p>
      <p>Area: {area}</p>
      <p> {time}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;

  p {
    margin-bottom: 4px;

    &:first-child {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export default ToolTip;
