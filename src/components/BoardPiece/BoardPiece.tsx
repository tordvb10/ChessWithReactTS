interface BoardPieceInterface {
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
    index: number,
    step?: BoardPieceInterface[],
    setstepinchild: (stepsinchild:BoardPieceInterface[]|undefined) => void 
}
import {data as PieceStartData} from "../../Data/PieceStart/PieceStartData.json"
import { useState } from "react"
import parse from "html-react-parser"
import styleBoardPiece from "./BoardPiece.module.css"
import {data as SvgData} from "../../Data/Svg/SvgData.json"
import buttonClicked from "../../Game/buttonClicked.ts";
export default function BoardPiece(props:propsInterface){
    function pieceClicked(piecefunk:BoardPieceInterface,stepfunk:BoardPieceInterface[]|undefined){
        console.log(piecefunk)
        console.log(stepfunk)
        const returndata = buttonClicked(piecefunk,stepfunk)
        console.log(returndata)
    }
    console.log(props)
    let acp: string = "acp"
    console.log(acp)
    const step = props.step
    const index = props.index
    const BoardPieceEl = props.BoardPieceEl
    const found = PieceStartData.PieceStart1.find((element)=>{
        return element.number === String(8 - Math.floor(index/8)) && element.letter === String.fromCharCode(65 + index%8)
    })
    const [piece,setpiece] = useState(found)
    const pieceColor = ((index%8)%2 === (Math.floor(index/8))%2)?"light":"brown"
    return (
        <>
            <button 
                id={`${BoardPieceEl.letter}${BoardPieceEl.number}`} 
                className={`${styleBoardPiece.PieceBox} ${styleBoardPiece[pieceColor]}`}
                onClick={()=>{pieceClicked(piece,step)}}
            >
                {
                    (piece !== undefined)
                    ?
                    parse(SvgData.SvgType1[piece.piece][piece.player])
                    :
                    <svg></svg>
                }
            </button>
        </>
    )
}