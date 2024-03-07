import React from "react";
import Appointments from "../../helpers/myTurns"
import { useState } from "react";


const MyTurns =() => {
    const [turn, setTurn] = useState(Appointments)
    return (
        <div>
            {Appointments.map((turn) => (
                <ul key={turn.id}>
                    <li>{turn.date}</li>
                    <li>{turn.time}</li>
                    <li>{turn.status}</li>
                </ul>
            ))}
        </div>
    )
}
export default MyTurns