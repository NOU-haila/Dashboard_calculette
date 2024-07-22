import Charts from "../../components/charts/Charts"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from "../../components/table/Table"
import Widgets from "../../components/widgets/Widgets"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
            <Navbar />
           <div className="widgets">
           <Widgets type="user"/>  
           <Widgets type="offre"/>
           <Widgets type="type offre"/>
           <Widgets type="avantage"/>
          </div>
        
        <div className="charts">
            <Featured/>
            <Charts/>

        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
    </div>
    </div>
  )
}

export default Home