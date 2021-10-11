import React,{useState} from "react"
import Button from '@mui/material/Button';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Stack from '@mui/material/Stack';

function Counter(){
 const[counter, setCounter] = useState(0);
 const dislike =() =>{
         if(counter>0){
            setCounter(counter-1)
         }
         else{
             alert("Sorry Limit Reached")
             setCounter(0)
        }
 }
 const like =() =>{
    setCounter(counter+1)
 }

    return(
        <>
        <div className ="main_div">
            <div className="counter_div">
                <h1>{counter}</h1>
                <div className="button_div">
                <Stack direction="row" spacing={2}>
                <Button color="primary" variant="outlined" className="btnlike" onClick={like}><ThumbUpAltIcon/></Button>
                <Button color="primary" variant="outlined" className="btndislike" onClick={dislike}><ThumbDownIcon/></Button>
                </Stack>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Counter;