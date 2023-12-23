import {
    Scene,
    SpriteMaterial,
    TextureLoader,
    Sprite,
    WebGLRenderer,
    OrthographicCamera
} from 'three';

class CustomSprite extends Sprite {
    speed = 0;
}
  
let renderer:WebGLRenderer;
const scene = new Scene();
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
const camera = new OrthographicCamera( 0, windowWidth, windowHeight, 0, 0.1, 2000 );
camera.position.z = 10;

const bubblesNo = Math.round(0.042 * windowWidth);
const bubbleTexture = new TextureLoader().load('resources/background/bubble.png');
const bubbleMaterial = new SpriteMaterial( { map: bubbleTexture } );

let bubbleSprites: CustomSprite[] = []; 


function initBubbles() {
    for (let i = 0; i < bubblesNo; i++) {
        let bubbleSprite = new CustomSprite(bubbleMaterial);
        bubbleSprite.scale.x = bubbleSprite.scale.y = getRandInRange(10,60);
        bubbleSprite.position.set(getRandInRange(0,windowWidth), getRandInRange(0,windowHeight), 0);
        bubbleSprite.speed = getRandInRange(1,5);
        bubbleSprites.push(bubbleSprite);
        scene.add(bubbleSprite);
    }
}

function getRandInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

const animate = () => {
      requestAnimationFrame(animate);
      for(let i=0; i<bubblesNo;i++) {
        bubbleSprites[i].position.y += bubbleSprites[i].speed;
        if(bubbleSprites[i].position.y > windowHeight + bubbleSprites[i].scale.y) {
            bubbleSprites[i].position.y = 0 - bubbleSprites[i].scale.y;
            bubbleSprites[i].position.x = getRandInRange(0, windowWidth);
            bubbleSprites[i].scale.x = bubbleSprites[i].scale.y = getRandInRange(10,60);
            bubbleSprites[i].speed = getRandInRange(1,5);
        }
      }
      renderer.render(scene, camera);
};
  
const resize = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    camera.left = 0;
    camera.right = windowWidth;
    camera.top = windowHeight;
    camera.bottom = 0;
    camera.updateProjectionMatrix();
    renderer.setSize(windowWidth, windowHeight);
};
  
export const createScene = (el:HTMLCanvasElement) => {
    renderer = new WebGLRenderer({ antialias: true, canvas: el });
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    initBubbles();

    resize();
    animate();
};
  
window.addEventListener('resize', resize);