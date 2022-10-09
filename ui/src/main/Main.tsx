import React from "react";
import { Stack, Button } from '@mantine/core';
import DistrictChart from "./charts/districtChart/DistrictChart";
import YearChart from "./charts/yearChart/YearChart";

const Main = () => {

    
     

    return (
    <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
        <DistrictChart />
      <YearChart />
      <Button variant="outline">3</Button>
    </Stack>
    );
}

export default Main;