import InsightCard from "./InsightCard.jsx";

const Kpis = ({ stats, titles }) => {

    return (
        <>
            <div className = "col-span-2 grid grid-cols-3">
                
                <div className = "p-2">
                    <InsightCard className = "p-20" title={titles.totalCalls} titleSize = "text-sm">
                        <p className = "pb-2 text-3xl font-semibold">{stats.totalCalls}</p>
                    </InsightCard>
                </div>

                <div className = "p-2">
                    <InsightCard className = "p-20" title={titles.totalCost} titleSize = "text-sm">
                        <p className = "pb-2 text-3xl font-semibold">£{stats.totalCost}</p>
                    </InsightCard>
                </div>

                <div className = "p-2">
                    <InsightCard className = "p-20" title={titles.averageDuration} titleSize = "text-sm">
                        <p className = "pb-2 text-3xl font-semibold">{stats.averageDuration}s</p>
                    </InsightCard>
                </div>

                <div className = "p-2">
                    <InsightCard className = "p-20" title={titles.totalSuccCalls} titleSize = "text-sm">
                        <p className = "pb-2 text-3xl font-semibold">{stats.totalSuccCalls}</p>
                    </InsightCard>
                </div>
                
                <div className = "p-2">
                    <InsightCard className = "p-20" title={titles.totalFailCalls} titleSize = "text-sm">
                        <p className = "pb-2 text-3xl font-semibold">{stats.totalFailCalls}</p>
                    </InsightCard>
                </div>
            </div>
        </>
    );

};

export default Kpis