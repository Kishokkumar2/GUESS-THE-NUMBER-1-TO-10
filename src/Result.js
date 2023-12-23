import React from 'react'
import "./Result.css"

const Result = ({random,set}) => {
   let result;
     if(set){
        if(set > random){
        result ="HIGHER"
     }
      else if  (set< random){
        result ="LOWER"
     }
     else if (set == random){
        result ="!YIPEEE,CORRECT"
     }
     else {
        result ="ENTER VALID INPUT "
     }
    }



  return (
    <div><h3>you Gussed :{result}</h3></div>
  )
}

export default Result