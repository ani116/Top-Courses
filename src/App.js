import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from './components/Filter';
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner"; 

const App = () => {

  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network m koi dikkat h");
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [] )

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">

      <div>
        <Navbar></Navbar>
      </div>
      
      <div>

        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
      
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justiy-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner></Spinner>) : <Cards courses={courses} category={category}></Cards>
        }
        </div>

      </div>
      
    </div>
  );
};

export default App;
