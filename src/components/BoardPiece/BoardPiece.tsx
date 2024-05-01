interface PieceInterface {
    player: String,
    piece: String,
    letter: String,
    number: String,
}
interface propsInterface{
    BoardPieceEl : {
        letter: String,
        number: String,
    }
    PieceStartData: {
        PieceStart1:  [Array<PieceInterface>]
    },
    index: number
}
import { useState } from "react"
import parse from "html-react-parser"
import styleBoardPiece from "./BoardPiece.module.css"
import {data as SvgData} from "../../Data/Svg/SvgData.json"
import buttonClicked from "../../Game/buttonClicked.ts";
export default function BoardPiece(props:propsInterface){
    function pieceClicked(BoardPieceEl:PieceInterface){
        buttonClicked(BoardPieceEl)
    }
    const PieceStartData = props.PieceStartData
    const index = props.index
    const BoardPieceEl = props.BoardPieceEl
    const found = PieceStartData.PieceStart1.find((element)=>{
        return element.number === String(8 - Math.floor(index/8)) && element.letter === String.fromCharCode(65 + index%8)
    })
    const [piece,setpiece] = useState(found)
    let pieceColor = ""
    if ((index%8)%2 === (Math.floor(index/8))%2){
        pieceColor = "light"
    } else {
        pieceColor = "brown"
    }
    console.log(found)
    return (
        <>
            <button 
                id={`${BoardPieceEl.letter}${BoardPieceEl.number}`} 
                className={`${styleBoardPiece.PieceBox} ${styleBoardPiece[pieceColor]}`}
                onClick={()=>{pieceClicked(found)}}
            >
                {
                    (found !== undefined)
                    ?
                    parse(SvgData.SvgType1[found.piece][found.player])
                    :
                    <svg></svg>
                }
            </button>
        </>
    )
}