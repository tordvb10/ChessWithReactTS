//import BoardPiece from "../BoardPiece/BoardPiece.tsx";
import {data as BoardData} from "../../Data/Board/BoardData.json"
export function Board(){
    const BoardArray = BoardData.BoardArray;
    console.log(BoardArray)
    return (
        <>
            <h1>This is Board</h1>
            {
                BoardArray.map((BoardField)=>{
                    return(
                        <>
                            {
                                BoardField.map((BoardPiece)=>{
                                    console.log(BoardPiece)
                                    return(
                                        <div>
                                            {BoardPiece.letter}
                                        </div>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </>
    )
}