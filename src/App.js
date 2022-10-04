import React, {useState, useEffect} from "react";
const axios = require('axios').default;
// import './App.css';

function App() {
  const [robots, setRobots] = useState([]);
  const [filter, setFilter] = useState("");
  const url = process.env.REACT_APP_API_URL

  useEffect(()=>{
      const fetchData = async() => {
          try{
              const response = await axios.get(url)

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

 
  return (
    <div className="container">
      <div className="row border">
        <div className="col-12">
            <div className="input-group mb-3">
                <input type="text" value={filter} onChange={event =>  setFilter(event.target.value)} className="form-control"/>
            </div>
        </div>
        <div className="col-12">
          <table className="table">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th>Name</th>
                  <th scope="col"><i className="bi bi-arrow-up"></i>Battery Level</th>
                  <th scope="col"><i className="bi bi-arrow-up"></i>Y Coords</th>
                  <th scope="col"><i className="bi bi-arrow-up"></i>X Coords</th>
                  </tr>
              </thead>
              <tbody className="table-group-divider">
              {robots.filter(robot => robot.robotId.includes(filter) || filter === "")
                .map((robot) => {
                return (                          
                    <tr key={robot.robotId}>
                        <td>{robot.robotId}</td>
                        <td>Robot #{robot.robotId}</td>
                        <td>{robot.batteryLevel}</td>
                        <td>{robot.y}</td>
                        <td>{robot.x}</td>
                    </tr>                          
                  )
               })}
              </tbody> 
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

