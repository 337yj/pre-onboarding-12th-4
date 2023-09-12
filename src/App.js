import { useEffect, useState } from "react";
import getChartData from "./api/chartData";

function App() {
  const [chartData, setChartData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getChartData();
      if (res) setChartData(res.data);
    } catch (error) {
      alert(error);
    }
  };

  console.log(chartData);
  useEffect(() => {
    fetchData();
  }, []);

  return <div>app</div>;
}

export default App;
