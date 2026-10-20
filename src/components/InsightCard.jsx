import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InsightCard = ({ title, titleSize = "text-xl", children }) => {

  return (
    <Card className = "border-1 border-[#d3d3d3] ring-0 shadow-[1px_1px_3px_rgba(0,0,0,0.1)]">
      <CardHeader>
        <CardTitle className = {titleSize}>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default InsightCard;