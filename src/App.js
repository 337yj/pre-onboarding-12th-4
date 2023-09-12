import { useSearchParams } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";
import Chart from "./components/Chart";
import styled from "styled-components";

function App() {
  const { data } = useFetchData();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("id");
  const ids = Object.values(data).map((item) => item.id);
  const distinctIds = [
    ...ids.filter((id, index) => ids.indexOf(id) === index),
    "RESET",
  ];

  const onClickFilter = (id) => {
    if (id === "RESET") {
      setSearchParams();
    } else {
      setSearchParams({ id });
    }
  };

  return (
    <Container>
      <ButtonContainer>
        {distinctIds.map((id) => {
          return (
            <Button key={id} onClick={() => onClickFilter(id)}>
              {id}
            </Button>
          );
        })}
      </ButtonContainer>
      <ChartContainer>
        <Chart
          data={data}
          setSearchParams={setSearchParams}
          selectedId={selectedId}
        />
      </ChartContainer>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ButtonContainer = styled.div`
  width: 480px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 14px;
  margin-bottom: 32px;
  border-radius: 42px;
  background-color: rgba(150, 150, 150, 0.6);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(255, 200, 20, 1);
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
`;

export default App;
