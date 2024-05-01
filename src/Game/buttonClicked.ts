interface BoardPieceInterFace {
    letter: String,
    number: String,
    player: String,
    piece: String,
}
export default function buttonClicked(BoardPieceEl:BoardPieceInterFace,step:BoardPieceInterFace[]):
{
    BoardPieceEl:BoardPieceInterFace,step:BoardPieceInterFace[]
}
{
    if (!step.length){
        step.push(BoardPieceEl)
        console.log(step)
    }
    console.log(BoardPieceEl)
    console.log(step.length)
    return {BoardPieceEl,step}
}