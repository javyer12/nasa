import React, { useEffect, useState } from 'react';
import { API_KEY } from '../config/index';
const API = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

interface DailyData {
  copyright:string,
  date: string, 
  explanation: string,
  title: string,
  url:string 
} 
const Daily ={
  copyright:"Jesus Mega",
  date: "2014-02-22",
  explanation: "No New Information",
  title: "Reload the Page",
  url:"https://www.mos.org/sites/dev-elvis.mos.org/files/images/main/uploads/slides/ExUni-LP.jpg"
}
function App() {
  const [ datum, setDatum ] = useState<DailyData>(Daily);

  useEffect(() => {
    async function DailyData() {
      try {
        const fetchData = async () => {
          const response = await fetch(API);
          const jsonData = await response.json();
          console.log(jsonData)
          setDatum(jsonData);
        };

        fetchData();
      } catch (e) {
        throw new Error(`Could not get user Github`);
      }
    }
    DailyData();
  }, [])

  const daily = {
    copyright: datum?.copyright,
    date: datum?.date,
    explanation: datum?.explanation,
    title: datum?.title,
    url: datum?.url
  }

  return (
    <div>
      <h1>My Component</h1>
      {daily.date}
      {/* {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div> */}
      {/* ))} */}
    </div>
  );
}

export default App;