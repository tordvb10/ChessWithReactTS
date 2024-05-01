//import BoardPiece from "../BoardPiece/BoardPiece.tsx";
interface BoardPieceInterFace {
    letter: String;
    number: String;
}
import {StrictMode} from "react";
import {data as BoardData} from "../../Data/Board/BoardData.json"
import styleBoard from "./Board.module.css"
import {data as PieceStartData} from "../../Data/PieceStart/PieceStartData.json"
import BoardPiece from "../BoardPiece/BoardPiece.tsx";
export default function Board(){
    const BoardArray = BoardData.BoardArray;
    return (
        <StrictMode>
            <h1>This is Board</h1>
            <div className={`${styleBoard.GridContainer} justify-center grid grid-cols-8 gap-0`}>
                {
                    BoardArray.map((BoardField,index_i)=>{
                        return(
                            <StrictMode key={BoardField[0].number}>
                                {
                                    BoardField.map((BoardPieceEl,index_j)=>{
                                        return(
                                            <StrictMode 
                                                key={`${BoardPieceEl.letter}${BoardPieceEl.number}`}>
                                                <BoardPiece 
                                                    index={index_i*8+index_j}
                                                    PieceStartData={PieceStartData}
                                                    BoardPieceEl={BoardPieceEl}
                                                />
                                            </StrictMode>
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