import React, {useState, useEffect, useRef} from "react";
import './App.css';
const axios = require('axios').default;

function App() {
  const [robots, setRobots] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
  const url = process.env.REACT_APP_API_URL
  const previousRobots = useRef([])
 

  useEffect(()=>{
      const fetchData = async() => {
          try{
              const response = await axios.get(url)

              if(response)
              {
                  setRobots(response.data)
                  previousRobots.current = response.data;
                  setOrder("default")
              }
          } catch(err){
              console.log(err)
          }
      }

      fetchData();
  }, [url])

 

  const handleFilter = (e) => {
      setFilter(e.target.value)
  }
 
  const handleSort = (columnName) => {
    let sortedRobots = [];

    if(order === "default"){
      sortedRobots = [...robots].sort((a, b) => {
        if (a[columnName] < b[columnName]) {
            return -1;
        }
        if (a[columnName] > b[columnName]) {
            return 1;
        }
        return 0;
        });
        setOrder("asc")
        setRobots(sortedRobots);
    } else if(order === "asc"){
      sortedRobots = [...robots].sort((a, b) => {
        if (a[columnName] < b[columnName]) {
            return 1;
        }
        if (a[columnName] > b[columnName]) {
            return -1;
        }
        return 0;
        });
        setOrder("desc")
        setRobots(sortedRobots);
    } else if(order === "desc"){
        setOrder("default")
        setRobots(previousRobots.current);
    }
  }

  return (
    <div className="container">
      <div className="row border">
        <div className="col-12">
            <div className="input-group mb-3">
                <input type="text" value={filter} onChange={handleFilter} className="form-control"/>
            </div>
        </div>
        <div className="col-12">
          <table className="table">
              <thead>
                  <tr>
                  <th scope="col">ID</th>
                  <th>Name</th>
                  <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("batteryLevel")}></i>Battery Level</th>
                  <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("y")}></i>Y Coords</th>
                  <th scope="col"><i className="bi bi-arrow-up" onClick={() => handleSort("x")}></i>X Coords</th>
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