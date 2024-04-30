interface propsInterface{
        BoardPieceEl: {
        letter: String;
        number: String;
    }
}
export default function BoardPiece(props:propsInterface){
    const BoardPieceEl = props.BoardPieceEl
    return (
        <>
        <div>
            {BoardPieceEl.letter}{BoardPieceEl.number}
        </div>
        </>
    )
}