const board = document.querySelector('.board');

let x;
for (x = 0; x < 8; x++){
     let boxColor;
     let boxStartColorWhite = x % 2 === 0? true : false;

     for ( let y = 0; y < 8; y++){
        if (boxStartColorWhite){
            boxColor = y % 2 === 0? 'white' : 'rgb(240, 29, 29)';
        }
        else {
            boxColor = y % 2 === 0? 'rgb(240, 29, 29)' : 'white'; 
        }
     
        const box = document.createElement('div');
        box.style.width = board.clientWidth / 8 + 'px';
        box.style.height = board.clientHeight / 8 + 'px';
        box.style.backgroundColor = boxColor;

        board.append(box);
     }
}