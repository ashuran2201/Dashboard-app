import React from 'react'
import "./Header.css"
import { NotificationsNone, Settings } from '@material-ui/icons'

export default function Header() {
    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="header-left">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="header-right">
                    <div className="headerIconContainer">
                        <NotificationsNone />
                        <span className="headerIconBadge">2</span>
                    </div>
                    <div className="headerIconContainer">
                        <Settings />
                    </div>
                    <img src="https://img.kpopmap.com/680x384/2018/11/loona-visual-heejin-cover.jpg" alt="Profile-pic" className="avatar" />
                </div>
            </div>
        </div>
    )
}
