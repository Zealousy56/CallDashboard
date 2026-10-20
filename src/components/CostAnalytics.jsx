import CallBarChart from "./charts/BarChart.jsx";
import InsightCard from "./InsightCard.jsx";

const CostAnalytics = ({data}) => {
  return(
    <>
        <div className = "p-2 col-span-2">
            <InsightCard className = "p-20" title= "Cost per City">
                <CallBarChart data = {data} />
            </InsightCard>
        </div>
    </>
  )
}

export default CostAnalytics
