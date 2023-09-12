import axios from "axios";

const MOCK_DATA = "/mock_data.json";

const getChartData = async () => {
  return await axios.get(MOCK_DATA);
};

export default getChartData;
