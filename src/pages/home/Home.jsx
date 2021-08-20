import React from 'react'
import Chart from '../../components/Chart/Chart';
import Feature from '../../components/Feature/Feature'
import "./Home.css";
import { userData } from '../../DummyData';
import WidgedSmall from '../../components/WidgedSmall/WidgedSmall';
import WidgedLarge from '../../components/WidgedLarge/WidgedLarge';

export default function Home() {
    return (
        <div className="home">
            <Feature />
            <Chart data= {userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidged">
                <WidgedSmall />
                <WidgedLarge />
            </div>
        </div>
    )
}
