import React, {useState} from "react";
import Search from "./components/Search";
import Table from "./components/Table"
import './App.css';



function App() {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }
  return(
    <>
      <div className="container">
        <div className="row mt-5 p-3 border">
          <div className="col-12">
            <Search handleFilter={handleFilter} filter={filter}/>
          </div>
          <div className="col-12">
            <Table filter={filter}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

