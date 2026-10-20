import { Legend, Pie, PieChart } from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  calls: {
    label: "Calls",
  },
}

const CallPieChart = ({ data }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[300px] w-full"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent nameKey="count" />}
        />

        <Pie
          data={data}
          dataKey="city"
          nameKey="count"
          innerRadius={60}
          outerRadius={100}
          label
        />

        <Legend />
      </PieChart>
    </ChartContainer>
  );
};

export default CallPieChart;