import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`


function App() {
  const[apod, setApod]=useState()
  useEffect(()=>{
    function fetchPhoto() {
      axios.get(URL)
      .then(res => {
        console.log(res.data)
        setApod(res.data)
      })
      .catch(err=> {
        consol.log(err.message)
      })
    }
    // fetchPhoto()
    setApod({
      "date": "2023-08-01",
      "explanation": "The monsters that live on the Sun are not like us. They are larger than the Earth and made of gas hotter than in any teapot. They have no eyes, but at times, many tentacles. They float.  Usually, they slowly change shape and just fade back onto the Sun over about a month. Sometimes, though, they suddenly explode and unleash energetic particles into the Solar System that can attack the Earth.  Pictured is a huge solar prominence imaged almost two weeks ago in the light of hydrogen. Captured by a ...",
      "hdurl": "https://apod.nasa.gov/apod/image/2308/SunMonster_Wenz_960.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Monster Solar Prominence",
      "url": "https://apod.nasa.gov/apod/image/2308/SunMonster_Wenz_960.jpg"
      })
  },[])
  if(!apod) return 'Fetching Photo of Day'
  return (
    <section>
      <Card 
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date ={apod.date}
      />
    </section>
  )
}

export default App
