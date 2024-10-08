import { useState } from 'react'
import './tateti.css'

export function Box({value, onBoxClick}){
    return (
        <button className='box'onClick={onBoxClick}>{value}</button>
    )
}
export default function Board(){
    const[xIsNext,setXIsNext] = useState(true);
    const[boxes,setBoxes] = useState(Array(9).fill(null));
    function handleClick(i){
        if (boxes[i] || calculateWinner(boxes)){
            return
        }
        const nextbox = boxes.slice();
        if (xIsNext){
            nextbox[i] = "✖️";
        }else{
            nextbox[i] = '⭕';
        }
        setBoxes(nextbox);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(boxes);
    let status;
    if (winner) {
      status = "Ganador: " + winner;
    } else {
      status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
    }
    return(
        <div className='tateti'style={{"display":"grid", "gridArea":"main"}}>
            <div className='status'>{status}</div>
            <div className="row">
                <Box value={boxes[0]} onBoxClick={()=>handleClick(0)}/>
                <Box value={boxes[1]} onBoxClick={()=>handleClick(1)}/>
                <Box value={boxes[2]} onBoxClick={()=>handleClick(2)}/>
            </div>
            <div className="row">
                <Box value={boxes[3]} onBoxClick={()=>handleClick(3)}/>
                <Box value={boxes[4]} onBoxClick={()=>handleClick(4)}/>
                <Box value={boxes[5]} onBoxClick={()=>handleClick(5)}/>
            </div>
            <div className="row">
                <Box value={boxes[6]} onBoxClick={()=>handleClick(6)}/>
                <Box value={boxes[7]} onBoxClick={()=>handleClick(7)}/>
                <Box value={boxes[8]} onBoxClick={()=>handleClick(8)}/>
            </div>
        </div>
    )}
    function calculateWinner(boxes) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            return boxes[a];
          }
        }
        return null;}
