import { Chart } from "react-google-charts";

const data = [
  ["Language", "Speakers (in millions)"],
  ["Font-End", 65],
  ["Back-End", 35],
];

const options = {
  legend: "none",
  pieSliceText: "label",
  pieStartAngle: 100,
  colors: ['#1c1b1b','#555']
}

const SkillChart = () => {
    return (
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    );
};

export default SkillChart;