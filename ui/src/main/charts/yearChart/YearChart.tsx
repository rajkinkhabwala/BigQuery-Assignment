import React from "react";
import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import dataRequests from "../../api/index";

const YearChart = () => {
  const query = useQuery(["year"], dataRequests.yearRequest);
  const options = {
    chart: {
      title: "Crime per Year"
    },
  };
  return (
    <>
      {query.isLoading ? (
        "is Loading..."
      ) : query.isError ? (
        "is Error..."
      ) : query.data ? (
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={query.data.data}
          options={options}
        />
      ) : null}
    </>
  );
};

export default YearChart;