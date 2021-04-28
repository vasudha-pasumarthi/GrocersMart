import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import PowerCharts from "fusioncharts/fusioncharts.powercharts";

charts(FusionCharts);

ReactFusioncharts.fcRoot(FusionCharts, PowerCharts, FusionTheme);

const dataSource = {
  chart: {
    caption: "Stores by location",
    showplotborder: "1",
    plotfillalpha: "60",
    hoverfillcolor: "#CCCCCC",
    plottooltext:
      "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
    theme: "fusion",
  },
  category: [
    {
      label: "Tier 1",
      color: "#f8bd19",
      category: [
        {
          label: "OUTO49",
          color: "#f8bd19",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#f8bd19",
            },
          ],
        },
        {
          label: "OUTO46",
          color: "#f8bd19",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#f8bd19",
            },
          ],
        },
        {
          label: "OUTO19",
          color: "#f8bd19",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Grocery Store",
              color: "#f8bd19",
            },
          ],
        },
      ],
    },
    {
      label: "Tier 2",
      color: "#33ccff",
      category: [
        {
          label: "OUTO17",
          color: "#33ccff",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#33ccff",
            },
          ],
        },
        {
          label: "OUTO45",
          color: "#33ccff",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#33ccff",
            },
          ],
        },
        {
          label: "OUTO35",
          color: "#33ccff",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#33ccff",
            },
          ],
        },
      ],
    },
    {
      label: "Tier 3",
      color: "#ffcccc",
      category: [
        {
          label: "OUTO10",
          color: "#ffcccc",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Grocery Store",
              color: "#ffcccc",
            },
          ],
        },
        {
          label: "OUTO18",
          color: "#ffcccc",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type2",
              color: "#ffcccc",
            },
          ],
        },
        {
          label: "OUTO13",
          color: "#ffcccc",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type1",
              color: "#ffcccc",
            },
          ],
        },
        {
          label: "OUTO27",
          color: "#ffcccc",
          tooltext:
            "Number of stores in  <b>$label</b> are <b>$value</b>, which was $percentValue of parent category",
          category: [
            {
              label: "Supermarket Type3",
              color: "#ffcccc",
            },
          ],
        },
      ],
    },
  ],
};

class PieChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="multilevelpie"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default PieChart;
