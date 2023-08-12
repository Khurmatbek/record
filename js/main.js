const elForm = document.querySelector(".record__form");
const elTextInput = document.querySelector(".record__text");
const elTextBtn = document.querySelector(".record__text-btn");
const elNumberInput = document.querySelector(".record__number");
const elNumberBtn = document.querySelector(".record__text-btn");
const List = document.querySelector(".record__list");
const RecRes = document.querySelector(".record__error");
let array = [
    {
        title: "Uygonaman",
        time: 19,
    }
]
const myFunction = function (news) {
    List.innerHTML = " ";
    news.forEach(element => {
        let item = document.createElement("li");
        item.classList.add("record__item")
        let firstdiv = document.createElement("div");
        firstdiv.classList.add("record__text-result-box")
        let seconddiv = document.createElement("div");
        seconddiv.classList.add("record__num-result-box")
        let textresult = document.createElement("pi");
        textresult.classList.add("record__text-result")
        let numberesult = document.createElement("span");
        numberesult.classList.add("record__num-result")
        List.appendChild(item);
        item.append(firstdiv, seconddiv);
        firstdiv.appendChild(textresult);
        seconddiv.appendChild(numberesult);
        textresult.textContent = element.title;
        numberesult.textContent = element.time;
    })
}
myFunction(array);

let newdata = new Date();
let Hours = newdata.getHours();
let Minuts = newdata.getMinutes();
let rec = new webkitSpeechRecognition();
rec.onstart = function () {
    RecRes.textContent = "Gapiring... ";
};

rec.onend = function () {
    RecRes.textContent = "Ovozingiz yozb muvafaqiyatli yozb olindi.. ";
};
elTextBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    rec.start();
    rec.onresult = function (item) {
        let answer = item.results[0][0].transcript;
        elTextInput.value = answer;
    }
})

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let elTextInputValue = elTextInput.value.trim();
    let elNumberInputValue = elNumberInput.value.trim();
    let newSecArr={
        title:elTextInputValue,
        time:elNumberInputValue,
    }
    array.push(newSecArr) 
    elTextInput.value=""
    elNumberInput.value=""
    // elNumberInputValue.innerHTML="";
      
    myFunction(array);

});




