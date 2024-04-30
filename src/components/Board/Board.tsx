//import BoardPiece from "../BoardPiece/BoardPiece.tsx";
interface BoardPieceInterFace {
    letter: String;
    number: String;
}
import {StrictMode} from "react";
import {data as BoardData} from "../../Data/Board/BoardData.json"
import styleBoard from "./Board.module.css"
import BoardPiece from "../BoardPiece/BoardPiece.tsx";
export default function Board(){
    function pieceClicked(BoardPieceEl:BoardPieceInterFace){
        console.log(BoardPieceEl)

    }
    const BoardArray = BoardData.BoardArray;
    return (
        <StrictMode>
            <h1>This is Board</h1>
            <div className={`${styleBoard.GridContainer} justify-center grid grid-cols-8 gap-0`}>
                {
                    BoardArray.map((BoardField)=>{
                        return(
                            <StrictMode key={BoardField[0].number}>
                                {
                                    BoardField.map((BoardPieceEl)=>{
                                        return(
                                            <button id={`${BoardPieceEl.letter}${BoardPieceEl.number}`} onClick={()=>{pieceClicked(BoardPieceEl)}} key={`${BoardPieceEl.letter}${BoardPieceEl.number}`}>
                                                <BoardPiece BoardPieceEl={BoardPieceEl}/>
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