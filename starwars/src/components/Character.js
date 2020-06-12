// Write your Character component here
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CardDiv from '../stylesheet/Characterstyle'

const Characters = ()=>{
    const [characters, setCharacters] = useState([])
  

    
    useEffect(()=>{
        axios.get(`https://swapi.py4e.com/api/people/`)
        .then(res =>{
            console.log(res.data)
            setCharacters(res.data.results)
        })
        .catch(err=>{
            console.log('👻 Something wrong that guide you come to see me' )
        })
    }, [])
const makeStyle = (w, h, m) =>{
  return {
      div: {
          width: w,
          height: h,
          margin: m,
      }
  }
}
   
    return (
        <div className="card">
            {
                characters.map((cha) =>{
                    return (
                    <CardDiv> 
                        <div style={makeStyle('40', 'auto', '0 5%')} >
                         <h1  className="character">{cha.name}</h1>     
                        </div>                     
                        <div>
                         <button className="birth-year"> {cha.birth_year} </button>     
                        </div>    
                                 
                    </CardDiv>
                     
                    
                    )
                })
            }
  
        </div>
        
    )
}
export default Characters;