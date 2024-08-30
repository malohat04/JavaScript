// const h1 = document.getElementById('head')
// const h1 = document.getElementsByClassName('heading')

// const h1 = document.querySelector('.heading')
// const headings = document.querySelectorAll('.heading')

// console.log(headings[3])

// const btn = document.querySelector('.button')

// const onclick = (e)=> {
//   console.log(e);

// }

// btn.addEventListener('click', (e)=>{
//   console.log(e.target);

// })

// const ul = document.querySelector('.list')

// const fruits = ["apple", "banana", "pinapple"];

// fruits.forEach((item) => {
//   const li = document.createElement('li')
//   li.textContent = item
//   ul.appendChild(li)
// })

let cars = [];

// Task 1: valuelarni arrayga yuklash
const ul = document.querySelector(".cars-list");

const input = document.querySelector(".name");
const btn = document.querySelector(".add-btn");

btn.addEventListener("click", () => {
  cars.push(input.value);
  // console.log(cars);

  let inputValue = String(input.value).trim();

  if (inputValue !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
  }
  input.value = "";
});

const allHeadings = document.querySelectorAll(".mouseover");

allHeadings.forEach((el)=> {
  console.log(el);
  
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = el.style.backgroundColor === "red" ? "green" : "red"
  });
})

const listItems = document.querySelectorAll('.off')
x

listItems.forEach((item)=> {
  item.addEventListener('click', ()=> {
    item.textContent = item.textContent === 'ON' ? 'OFF' : 'ON'
  })
})