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
            <div key="Board" className="GridContainer grid grid-cols-8">
                {
                    BoardArray.map((BoardField)=>{
                        return(
                            <StrictMode key={BoardField[0].letter}>
                                {
                                    BoardField.map((BoardPieceEl)=>{
                                        return(
                                            <button onClick={()=>{pieceClicked(BoardPieceEl)}} className={styleBoard.BoardPieceButton} key={`${BoardPieceEl.letter}${BoardPieceEl.number}`}>
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