import { useSearchParams } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";
import Chart from "./components/Chart";

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
    <div>
      {distinctIds.map((id) => {
        return (
          <button key={id} onClick={() => onClickFilter(id)}>
            {id}
          </button>
        );
      })}

      <Chart
        data={data}
        setSearchParams={setSearchParams}
        selectedId={selectedId}
      />
    </div>
  );
}

export default App;
