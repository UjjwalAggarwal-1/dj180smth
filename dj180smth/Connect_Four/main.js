const A = "B"
// const A = window.prompt("Enter Player One's Name:")
const B = "A"
// const B = window.prompt("Enter Player Two's Name:")

$('#player_id').css('color','pink')

$('div.row1>i').on('click',function(){
    console.log(this);
    let liss = $(/row\d/)
    console.log(liss)
    for(let i=liss.length;i>0;i--){
        console.log(liss.eq(i))
    }
})