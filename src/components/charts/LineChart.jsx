import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  calls: {
    label: "Calls",
    color: "var(--chart-1)",
  },
};

const CallLineChart = ({ data }) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[200px] w-full"
    >
      <LineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />

        <XAxis dataKey="hour" />
        <YAxis allowDecimals={false} />

        <ChartTooltip content={<ChartTooltipContent className = "bg-white opacity-100" />} />

        <Line
            type="monotone"
            dataKey="count"
            stroke="#00ffc8"
            strokeWidth={2}
            dot={{
                fill: "#00ffc8",
                stroke: "#00ffc8",
                r: 4,
            }}
            activeDot={{ r: 6 }}
        />
      </LineChart>
    </ChartContainer>
  );
};

export default CallLineChart;