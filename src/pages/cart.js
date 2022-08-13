const quantOfGoods = document.querySelectorAll('.control-buttons__sum')

const minus = document.querySelectorAll('.control-buttons__minus')

const plus = document.querySelectorAll('.control-buttons__plus')

const maxQuant = 10
const minQuant = 1



function sub(event){
    // if (event.target.dataset.nun == event.target.closest('.control-buttons__sum').)
    console.log(event.target.dataset.num)
    // console.log(event.currenttarget.closest('.control-buttons__sum'))
    console.log(quantOfGoods)
} 


function add(event){
    

} 
minus.forEach((elm) =>elm.addEventListener('click', sub))

plus.forEach((elm) =>elm.addEventListener('click', add))

const text = document.querySelector("input[name='name']")
const tel = document.querySelector("input[name='phone']")
const mail = document.querySelector("input[name='email']")
const btn = document.querySelector('.person-form__button')



if (text.value !== '' ){
    btn.removeAttribute('disabled')
}
