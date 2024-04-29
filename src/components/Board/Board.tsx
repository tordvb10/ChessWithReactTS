//import BoardPiece from "../BoardPiece/BoardPiece.tsx";
interface BoardPieceInterFace {
    letter: String;
    number: String;
}
import {data as BoardData} from "../../Data/Board/BoardData.json"
import styleBoard from "./Board.module.css"
export default function Board(){
    function pieceClicked(BoardPiece:BoardPieceInterFace){
        console.log(BoardPiece)
    }
    const BoardArray = BoardData.BoardArray;
    console.log(BoardArray)
    return (
        <>
        <h1>This is Board</h1>
            <div className="GridContainer grid grid-cols-8">
                {
                    BoardArray.map((BoardField)=>{
                        return(
                            <>
                                {
                                    BoardField.map((BoardPiece)=>{
                                        console.log(BoardPiece)
                                        return(
                                            <button onClick={()=>{pieceClicked(BoardPiece)}} className={styleBoard.BoardPiece} key={`${BoardPiece.letter}${BoardPiece.number}`}>
                                                {BoardPiece.letter}{BoardPiece.number}
                                            </button>
                                        )
                                    })
                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}