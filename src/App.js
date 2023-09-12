import useFetchData from "./hooks/useFetchData";
import Chart from "./components/Chart";

function App() {
  const { data } = useFetchData();
  console.log(data);

  return (
    <div>
      <Chart data={data} />
    </div>
  );
}

export default App;
