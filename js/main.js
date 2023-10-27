var elInp = document.querySelector('.inp')
var elTitle = document.querySelector('.title')
var elOpt = document.querySelector('.joy')
var arr = ['olma', 'anor', 'behi']

function fn(){
    console.log(elInp.value)
    console.log(elOpt.value)
    if(elOpt.value == 'oxiri'){
        arr.push(elInp.value)
        elTitle.textContent = arr
    }else{
        arr.unshift(elInp.value)
        elTitle.textContent = arr

    }
    console.log(arr);
}