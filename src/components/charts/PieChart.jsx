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
      className="h-200 w-full"
    >
      <PieChart>
        <ChartTooltip
          content={<ChartTooltipContent className = "bg-white opacity-100" nameKey = "count" />}
        />

        <Pie
          data={data}
          dataKey="calls"
          nameKey="city"
          innerRadius={0}
          outerRadius={220}
          label
        />

        <Legend />
      </PieChart>
    </ChartContainer>
  );
};

export default CallPieChart;