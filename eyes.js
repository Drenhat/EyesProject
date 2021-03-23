const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = "translate(-" + x + ",-" + y + ")";
  }
};

//Create a random color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

getRandomSize = () => {
 return ((Math.random() * 50) + 30);
}

transformEye = () => {
  //change the color and the size of the eye balls
  for (let i = 0; i < 2; i++) {
    let firstEye = balls[i];
    firstEye.style.background = getRandomColor();
    let size = getRandomSize();
    firstEye.style.width = `${size}px`;
    firstEye.style.height = `${size}px`;
  }
}

transformEye()
