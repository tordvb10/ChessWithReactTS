interface PieceInterface {
    player: String,
    piece: String,
    letter: String,
    number: String,
}
interface propsInterface{
    BoardPieceEl: {
        letter: String,
        number: String,
    },
    PieceStartData: {
        PieceStart1:  [Array<PieceInterface>]
    },
    index: number
}
import parse from "html-react-parser"
import styleBoardPiece from "./BoardPiece.module.css"
import {data as SvgData} from "../../Data/Svg/SvgData.json"
export default function BoardPiece(props:propsInterface){
    const BoardPieceEl = props.BoardPieceEl
    const PieceStartData = props.PieceStartData
    const index = props.index
    console.log(BoardPieceEl)
    const found = PieceStartData.PieceStart1.find((element)=>{
        return element.number === String(8 - Math.floor(index/8)) && element.letter === String.fromCharCode(65 + index%8)
    })
    let pieceColor = ""
    if ((index%8)%2 === (Math.floor(index/8))%2){
        console.log(found)
        pieceColor = "light"
    } else {
        pieceColor = "brown"
    }
    return (
        <>
            <div className={`${styleBoardPiece.PieceBox} ${styleBoardPiece[pieceColor]}`}>
                {
                    (found !== undefined)
                    ?
                    parse(SvgData.SvgType1[found.piece][found.player])
                    :
                    <svg></svg>
                }
            </div>
        </>
    )
}