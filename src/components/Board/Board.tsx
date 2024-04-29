//import BoardPiece from "../BoardPiece/BoardPiece.tsx";
interface BoardPieceInterFace {
    letter: String;
    number: String;
}
import {StrictMode} from "react";
import {data as BoardData} from "../../Data/Board/BoardData.json"
import styleBoard from "./Board.module.css"
export default function Board(){
    function pieceClicked(BoardPiece:BoardPieceInterFace){
        console.log(BoardPiece)
    }
    const BoardArray = BoardData.BoardArray;
    return (
        <StrictMode>
            <h1>This is Board</h1>
            <div key="Board" className="GridContainer grid grid-cols-8">
                {
                    BoardArray.map((BoardField)=>{
                        return(
                            <StrictMode key={BoardField[0].letter}>
                                {
                                    BoardField.map((BoardPiece)=>{
                                        return(
                                            <button onClick={()=>{pieceClicked(BoardPiece)}} className={styleBoard.BoardPiece} key={`${BoardPiece.letter}${BoardPiece.number}`}>
                                                {BoardPiece.letter}{BoardPiece.number}
                                            </button>
                                        )
                                    })
                                }
                            </StrictMode>
                        )
                    })
                }
            </div>
        </StrictMode>
    )
}