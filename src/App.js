import { useSearchParams } from "react-router-dom";
import useFetchData from "./hooks/useFetchData";
import Chart from "./components/Chart";

function App() {
  const { data } = useFetchData();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  return (
    <div>
      <Chart
        data={data}
        setSearchParams={setSearchParams}
        selectedId={selectedId}
      />
    </div>
  );
}

export default App;
