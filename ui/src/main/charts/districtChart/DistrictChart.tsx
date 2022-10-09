import React from "react";
import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import dataRequests from "../../api/index";

const DistrictChart = ({}): JSX.Element => {
  const query = useQuery(["district"], dataRequests.districtRequest);
  const options = {
    chart: {
      title: "Crime in Each District",
      subtitle: "Crime in each district: 2015-2018",
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
          chartType="Bar"
          width="100%"
          height="400px"
          data={query.data.data}
          options={options}
        />
      ) : null}
    </>
  );
};

export default DistrictChart;

