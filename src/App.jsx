import { useState, useEffect } from 'react'
import './App.css'
import Navbar from "../src/components/Navbar/Navbar"
// import Nav from './components/Nav/Nav'
import Hero from "../src/components/Hero/Hero"
import Cards from './components/Cards/Cards'
import List from './components/List/List'

function App() {


  const [datas, setData] = useState([]);
  const [pandingDatas, setPandingData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setCalories] = useState(0);

  useEffect(() => {
    fetch('recipes.json')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setData(data))
  }, [])

  const handleList = (data) => {
    const value = [data.recipe_id,data.recipe_name, data.preparing_time, data.calories];
    let newdata = [...pandingDatas, value];
    setPandingData(newdata);

    // console.log(data)
  }
 

  function extractNumbers(str,calories) {
    let numbers = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            numbers += str[i];
        }
    }
    let numbers2 = "";
    for (let i = 0; i < calories.length; i++) {
        if (!isNaN(calories[i])) {
            numbers2 += calories[i];
        }
    }

    let time  = Number(numbers)+totalTime;
    setTotalTime(time)
    let Tcalories  = Number(numbers2)+totalCalories;
    setCalories(Tcalories)
    // console.log(Number(totalTime))
}

const submitList=(data)=>{
    const finatData=pandingDatas.filter((datas)=>datas !=data)
    setPandingData(finatData);
    
    const lastFinalData =[...finalData,data];
    setFinalData(lastFinalData);
    // console.log(data)

    //counting minutes
    extractNumbers(data[2],data[3]);
    // console.log(data[2])

  }

  return (
    <>
      <Navbar></Navbar>
      {/* <Nav></Nav> */}
      <Hero></Hero>
      <div className='max-w-7xl  lg:m-auto '>
        <div className='flex  flex-col  w-full lg:w-2/3 m-auto justify-center items-center gap-4 lexend'>
          <h1 className='text-4xl font-bold'>Our Recipes</h1>
          <p className='text-center'>This is our recipes that you can choose from here and select anyone these if you want to coock.Left you will be able to see recipes list and right you will be able to see preparing list</p>
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row justify-between  m-auto  gap-12 lg:gap-5  mt-4'>
          <Cards datas={datas} handleList={handleList}></Cards>
          <List pandingDatas={pandingDatas} submitList={submitList} finalData={finalData}totalTime={totalTime} totalCalories={totalCalories}></List>

        </div>
        {/* <h1>{pandingDatas.length}</h1>
        <h1>{finalData.length}</h1> */}
      </div>
    </>
  )
}

export default App
