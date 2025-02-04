import AdminSidebar from "../../../components/admin/AdminSidebar.tsx";
import {BarChart} from "../../../components/admin/Charts.tsx";

const months=[
    "January","Febuary","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
]
const BarCharts=()=>{
    return(
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <section>
                    <BarChart data_1={[200,444,343,556,778,455,990]} data_2={[300,144,433,655,237,755,190]} title_1="Products" title_2="Users"
                    bgColor_1={"hsl(260,50%,30%)"}
                    bgColor_2={"hsl(360,90%,90%)"}
                    />
                    <h2>Top Selling Products & Top Customers</h2>
                </section>
                <section>
                    <BarChart data_1={[200,444,343,556,778,455,990,444,122,334,890,909]} data_2={[]} title_1={"Products"} 
                    title_2={""} bgColor_1={"hsl(180, 40%, 50%)"}
                    bgColor_2=""
                    labels={months}
                    horizontal={true}
                    />
                    <h2>Orders throughout the years</h2>
                </section>
            </main>
        </div>
    )
}
export default BarCharts;