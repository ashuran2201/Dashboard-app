import "./SidebarMenu.css"
import { LineStyle, Timeline, TrendingUp, MapOutlined, DescriptionOutlined } from "@material-ui/icons" 
import {Link} from 'react-router-dom'

export default function SidebarMenu() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            <Link to="/" className="sidebarLink">Home</Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Access</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            <Link to="/" className="sidebarLink">Home</Link>
                        </li>
                        <li className="sidebarListItem">
                            <DescriptionOutlined className="sidebarIcon"/>
                            <Link to="/post" className="sidebarLink">Post</Link>
                        </li>
                        <li className="sidebarListItem">
                            <MapOutlined className="sidebarIcon"/>
                            <Link to="/map" className="sidebarLink">Map</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
