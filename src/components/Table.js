import React, {useState, useEffect} from "react";
const axios = require('axios').default;

function Table(){

    const [robots, setRobots] = useState([]);
    const url = process.env.REACT_APP_API_URL

   
    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await axios.get(url)

                console.log(response.data)
                if(response)
                {
                    setRobots(response.data)
                }
            } catch(err){
                console.log(err)
            }
        }

        fetchData();
    }, [url])

    return(
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th>Name</th>
                <th scope="col">Battery Level</th>
                <th scope="col">Y Coords</th>
                <th scope="col">X Coords</th>
                </tr>
            </thead>
                {robots.map((robot) => {
                    return (
                        <tbody>
                            <tr key={robot.robotId}>
                                <td>{robot.robotId}</td>
                                <td>Robot #{robot.robotId}</td>
                                <td>{robot.batteryLevel}</td>
                                <td>{robot.y}</td>
                                <td>{robot.x}</td>
                            </tr>
                        </tbody>
                    )
                })}
        </table>
    )
}

export default Table;