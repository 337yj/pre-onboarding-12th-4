import { useEffect, useState } from "react";
import getChartData from "../api/chartData";

const useFetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getChartData();
        setData(res.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data };
};

export default useFetchData;
