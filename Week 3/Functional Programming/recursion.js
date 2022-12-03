var lives = 3;
function remaining_lives(){
    console.log(lives);
    lives -=1;
    if (lives == 0) return;
    remaining_lives()
}
remaining_lives();