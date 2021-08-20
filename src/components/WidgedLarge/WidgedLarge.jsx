import React from 'react'
import "./WidgedLarge.css"

export default function WidgedLarge() {

    const Button = ({type}) => {
        return <button className={"widgedLargeButton " + type}>{type}</button>
    };
    return (
        <div className="widgedLarge">
            <h3 className="widgedLargeTitle">Latest Transaction</h3>
            <table className="widgedLargeTable">
                <tr className="widgedLargeTr">
                    <th className="widgedLargeTh">Costumer</th>
                    <th className="widgedLargeTh">Date</th>
                    <th className="widgedLargeTh">Amount</th>
                    <th className="widgedLargeTh">Status</th>
                </tr>
                <tr className="widgedLargeTr">
                    <td className="widgedLargeUser">
                    <img src="https://kingchoice.me/media/CACHE/images/05a22dd814301273924645de91d4140c_wp2uWZs/74fb9e30c747c8a99a44cc6582d3caa9.jpg" alt="user-pic" className="widgedLargeImg" />
                        <span className="widgedLargeName">Susan Bones</span>
                    </td>
                    <td className="widgedLargeDate">19 August 2021</td>
                    <td className="widgedLargeAmount">$122.00</td>
                    <td className="widgedLargeStatus"> <Button type="Declined" /> </td>
                </tr>
                <tr className="widgedLargeTr">
                    <td className="widgedLargeUser">
                    <img src="https://kingchoice.me/media/CACHE/images/05a22dd814301273924645de91d4140c_wp2uWZs/74fb9e30c747c8a99a44cc6582d3caa9.jpg" alt="user-pic" className="widgedLargeImg" />
                        <span className="widgedLargeName">Susan Bones</span>
                    </td>
                    <td className="widgedLargeDate">10 August 2021</td>
                    <td className="widgedLargeAmount">$122.00</td>
                    <td className="widgedLargeStatus"> <Button type="Pending" /> </td>
                </tr> 
                <tr className="widgedLargeTr">
                    <td className="widgedLargeUser">
                    <img src="https://kingchoice.me/media/CACHE/images/05a22dd814301273924645de91d4140c_wp2uWZs/74fb9e30c747c8a99a44cc6582d3caa9.jpg" alt="user-pic" className="widgedLargeImg" />
                        <span className="widgedLargeName">Susan Bones</span>
                    </td>
                    <td className="widgedLargeDate">12 August 2021</td>
                    <td className="widgedLargeAmount">$122.00</td>
                    <td className="widgedLargeStatus"> <Button type="Approved" /> </td>
                </tr> 

            </table>
        </div>
    )
}
