import useFetchData from "./hooks/useFetchData";

function App() {
  const { data } = useFetchData();
  console.log(data);

  return <div>app</div>;
}

export default App;
