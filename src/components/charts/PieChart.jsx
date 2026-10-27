import { Cell, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  calls: {
    label: "Calls",
  },
  colors: [
      "#ff1a79",
      "#16f9db",
      "#ff9b53",
      "#a855f7",
      "#ef4444",
      "#ffef84",
  ]
}


const CallPieChart = ({ data }) => {
  const chartData = data.map((entry, index) => ({
    ...entry,
    fill: chartConfig.colors[index % chartConfig.colors.length],
  }));


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
          data={chartData}
          dataKey="count"
          nameKey="city"
          innerRadius={0}
          outerRadius={220}
          label
        />

        {data.map((entry, index) => (
          <Cell
            key={entry.city}
            fill={chartConfig.colors[index % chartConfig.colors.length]}
          />
        ))}

      </PieChart>
    </ChartContainer>
  );
};

export default CallPieChart;