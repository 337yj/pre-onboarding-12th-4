import ApexCharts from "react-apexcharts";

const Chart = ({ data }) => {
  const chartData = Object.entries(data)?.map(
    ([x, { id, value_area, value_bar }]) => ({
      id,
      x,
      y_area: value_area,
      y_bar: value_bar,
    })
  );

  const chartSeries = {
    series: [
      {
        name: "Bar",
        type: "bar",
        data: chartData.map((item) => ({
          id: item.id,
          x: item.x,
          y: item.y_bar,
          fillColor: item.fillColor,
        })),
      },
      {
        name: "Area",
        type: "area",
        data: chartData.map((item) => ({
          id: item.id,
          x: item.x,
          y: item.y_area,
          fillColor: item.fillColor,
        })),
      },
    ],
  };

  const options = {
    chart: {
      height: 350,
    },
    colors: ["rgba(150, 150, 150, 0.6)", "rgba(60, 138, 0, 0.5)"],
    stroke: {
      curve: "smooth",
      width: 1,
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      overwriteCategories: Object.keys(data).map((el) => el.split(" ")[1]),
      tickAmount: 15,
      labels: {
        trim: false,
        rotate: -45,
      },
    },
    yaxis: [
      {
        title: {
          text: "Bar",
        },
        opposite: true,
        axisTicks: {
          show: true,
        },
      },
      {
        title: {
          text: "Area",
        },
        max: 200,
        axisTicks: {
          show: true,
        },
        tickAmount: 4,
      },
    ],
  };

  return (
    <ApexCharts options={options} series={chartSeries.series} height={450} />
  );
};

export default Chart;
