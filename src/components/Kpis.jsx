import InsightCard from "./InsightCard.jsx";

const Kpis = ({ stats, titles }) => {

    return (
        <>
            <div className = "col-span-2 grid grid-cols-3">
                {Object.keys(stats).map((key) => (
                    <div className = "p-2">
                        <InsightCard className = "p-20" key={key} title={titles[key] ?? key}>
                            <p>{stats[key]}</p>
                        </InsightCard>
                    </div>
                ))}
            </div>
        </>
    );

};

export default Kpis