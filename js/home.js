console.log('home.js loaded');

// const EL_img = document.querySelector("#img");
// const pos = {x:0, y:0};

// document.addEventListener("keydown", (ev) => {

//   const dir = (ev.key.match(/(?<=^Arrow)\w+/)||[])[0];
//   if (!dir) return; // Not an arrow key.
  
//   ev.preventDefault(); // Prevent Browser scroll if overflow

//   ({
//     Left:  () => pos.x -= 10,
//     Right: () => pos.x += 10,
//     Up:    () => pos.y -= 10,
//     Down:  () => pos.y += 10,
//   }[dir])(); 
  
//   EL_img.style.transform = `translate(${pos.x}px, ${pos.y}px)`
// });

// to move an img