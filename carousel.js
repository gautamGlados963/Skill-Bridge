let carousels = document.querySelectorAll('.carousel');
let currentIndex = [0, 0]; // One index for each row of carousels

function moveCarousel(rowIndex, direction) {
    const totalTiles = carousels[rowIndex].children.length; 
    currentIndex[rowIndex] = (currentIndex[rowIndex] + direction + totalTiles) % totalTiles;
    
    // Move the carousel by translating its X position
    carousels[rowIndex].style.transform = `translateX(-${currentIndex[rowIndex] * 33.3333}%)`;
}
