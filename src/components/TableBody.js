import React from "react";

function TableBody({robots, filter}){
    return(
        <tbody className="table-group-divider">
            {robots.filter(robot => robot.robotId.includes(filter) || filter === "")
                .map((robot) => {
                return (                          
                    <tr key={robot.robotId}>
                        <td>{robot.robotId}</td>
                        <td>{robot.batteryLevel}</td>
                        <td>{robot.y}</td>
                        <td>{robot.x}</td>
                    </tr>                          
                  )
               })}
        </tbody>
    )
}

export default TableBody;