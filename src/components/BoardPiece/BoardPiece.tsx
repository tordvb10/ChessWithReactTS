interface propsInterface{
        BoardPieceEl: {
        letter: String;
        number: String;
    }
}
export default function BoardPiece(props:propsInterface){
    console.log(props)
    const BoardPieceEl = props.BoardPieceEl
    return (
        <>
            {BoardPieceEl.letter}{BoardPieceEl.number}
        </>
    )
}