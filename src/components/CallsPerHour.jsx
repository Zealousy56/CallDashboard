import CallLineChart from "./charts/LineChart";
import InsightCard from "./InsightCard.jsx";

const CallsPerHour = ({data}) => {
    return(
        <>
        <div className = "p-2 col-span-2">
            <InsightCard className = "p-20" title= "Calls Per Hour">
                <CallLineChart data = {data} />
            </InsightCard>
        </div>
        </>
    );
}

export default CallsPerHour