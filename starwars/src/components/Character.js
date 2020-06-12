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
const makeStyle = (w, b, m) =>{
  return {
      div: {
          width: w,
          margin: m,
      },
      button: {
        width: w,
        borderRadius: b,
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
                        <div style={makeStyle('60%', '0 5%').div} >
                    <h1 className="character">{cha.name}</h1>       
                        </div>               
                            <button style={makeStyle('100px',' 0px 30px 0px 30px ', '1.7% 0').button} > {cha.birth_year} </button>                     
                    </CardDiv>
                        
                    
                    )
                })
            }

        </div>
        
    )
}
export default Characters;