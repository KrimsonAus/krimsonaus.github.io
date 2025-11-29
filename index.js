const ball = document.querySelector('.metalball');
const contact = document.querySelector('.contact');

let x = 100;
let y = 0;
let velocityY = 0;
let gravity = 0.6;

let bounceFactor = 0.7;

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const floor = 1080;

let dest = false;

let posx=0;
let posy=0;

let hovers=false;

function update() {
    if (!isDragging) {
        velocityY += gravity;
        y += velocityY;

        if (y > floor) {
            y = floor;

            velocityY *= -bounceFactor;

            if (Math.abs(velocityY) < 1) {
                velocityY = 0;
            }
        }

        ball.style.top = y + "px";
        
    }

    let currentY = parseInt(contact.style.top) || 0;
    let currentX = parseInt(contact.style.right) || 0;

    if(!dest){
        max = 1080;
        min = 0;

        max2 = 2160;
        min2 = 0;

        r =Math.random()* (max - min) + min;
        r2 =Math.random()* (max2 - min2) + min2;
        
        r = Math.round(r)
        r2 = Math.round(r2);
        
        console.log(r)
        console.log("top: "+currentY)
        
        dest = true;
    }
    
    if(dest && !hovers){
        if(currentY!== r){
            if(r>currentY){
                posy++;
            }
            else{
                posy--;
            }

            contact.style.top = posy+"px";
        }
        if(currentX!== r2){
            if(r2>currentX){
                posx++;
            }
            else{
                posx--;
            }

            contact.style.right = posx+"px";
        }
        
        if(currentY == r && currentX == r2){
            dest = false;
        }
    }
    //contact.style.right = r2 + "px";

    requestAnimationFrame(update);
}
update();

ball.addEventListener('mousedown', (e) => {
    isDragging = true;
    velocityY = 0;

    offsetX = e.clientX - x;
    offsetY = e.clientY - y;

    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    x = e.clientX - offsetX;
    y = e.clientY - offsetY;

    ball.style.left = x + "px";
    ball.style.top = y + "px";
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

contact.addEventListener('mouseover', (e) => {
    hovers=true;
});

contact.addEventListener('mouseout', () => {
    hovers=false;
});