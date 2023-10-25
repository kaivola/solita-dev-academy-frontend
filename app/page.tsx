import { Page, Station } from "@/lib/dev-academy-assignment";

const Home = async () => {

    const res = await fetch('http://localhost:3000/api/stations');
    const stations: Page<Station> = await res.json()

    if (!stations) return null
    return (
        <div>
            {stations.content.map(c => {
                return <div key={c.id}>{c.stationName}</div>
            })}
            
        </div>
    )

}
export default Home