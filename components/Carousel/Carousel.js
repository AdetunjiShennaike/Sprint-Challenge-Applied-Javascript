class Carousel {
    constructor(object) {
    this.object = object;
    
    //grab left and right buttons
    this.leftBtn = document.querySelector('.left-button');
    this.rightBtn = document.querySelector('.right-button');

    //grab all the images
    this.pics = document.querySelectorAll('.carousel img');
    this.imgs = new Images(pics);

    //grab single img
    // this.current = document.querySelector('.active-img')
    // not sure about the approach

    //event listener for the click buttons
    this.leftBtn.addEventListener('click', () => this.moveRight());
    this.rightBtn.addEventListener('click', () => this.moveLeft());
    
    }

    moveLeft() {
        // this.imgs.forEach(pic => pic.classList.remove('active-img'));
        this.imgs.forEach(pic => pic.setAttribute('style', 'display:none'));


        this.imgs.nextImage(-1);

    }

    moveRight() {
        this.imgs.forEach(pic => pic.setAttribute('style', 'display:none'));

        this.imgs.nextImage(1);
    }
}

class Images {
    constructor(pics) {
        this.pics = pics;

        //grab all the imgs
        this.img = document.querySelectorAll('.carousel img');

        //select individual img
        this.current = 
    }

    nextImage(int) {
        
    }
}

let carousel = document.querySelector('carousel');
return new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/