// onload =() =>{

// const labels = document.querySelectorAll(".input > label");
// labels.forEach((item) => {
//     item.innerHTML = item.innerHTML.split("")
//     //convert the email string into ARRAY of letter eith elements e,m,a,i,l
//   .map((letter,idx) => `<span style="transition:${idx * 50}ms">${letter}</span>`);
//   //wrap
//   .join("")
// });
 
// }


onload = () => {
  let targets = document.querySelectorAll('.input > label');
  targets.forEach((item) => {
      item.innerHTML = item.innerHTML.split('').map((elem, index) => {
          return(
              `<span style="transition-delay: ${(index+1)*80}ms" >${elem}</span>`
          );
      }).join('')
  })
}
