import React from 'react'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./Feature.css"

export default function Feature() {
    return (
        <div className="feature">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,415
                    </span>
                    <span className="featuredMoneyRate">
                        -11,4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
                </div>
                <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,400
                    </span>
                    <span className="featuredMoneyRate">
                        -1,4 <ArrowDownward className="featuredIcon negative" />
                    </span>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div> 
                </div>
                <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,215
                    </span>
                    <span className="featuredMoneyRate">
                        +3,4 <ArrowUpward className="featuredIcon"/>
                    </span>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
            </div>
        </div>
    )
}
