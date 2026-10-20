import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  cost: {
    label: "Costs",
    color: "var(--chart-1)",
  },
};

const CallBarChart = ({ data }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[200px] w-full"
    >
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />

        <XAxis dataKey="city" />
        <YAxis allowDecimals={true} />

        <ChartTooltip content={<ChartTooltipContent className = "bg-white opacity-100" />} />

        <Bar
          dataKey="cost"
          fill="var(--color-calls)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default CallBarChart;