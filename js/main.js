const elForm = document.querySelector(".record__form");
const elTextInput = document.querySelector(".record__text");
const elTextBtn = document.querySelector(".record__text-btn");
const elNumberInput = document.querySelector(".record__number");
const elNumberBtn = document.querySelector(".record__number-btn");
const List = document.querySelector(".record__list");
const RecRes = document.querySelector(".record__error");
let array = [
    {
        id:1,
        title: "Uygonaman",
        time: 19,
    },
    {
        id:2,
        title: "Uygonaman1",
        time: 19,
    },
    {
        id:3,
        title: "Uygonaman",
        time: 19,
    },
    {
        id:4,
        title: "Uygonaman1",
        time: 19,
    },
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
        numberesult.classList.add("record__num-result");
        let btnremove = document.createElement("button");
        btnremove.classList.add("btn-remove");
        let btnedit = document.createElement("button");
        btnedit.classList.add("btn-edit");
        btnedit.dataset.id = element.id;
        btnremove.dataset.id = element.id;
        // console.log(btnremove)
        List.appendChild(item);
        item.append(firstdiv, seconddiv, btnedit, btnremove);
        firstdiv.appendChild(textresult);
        seconddiv.appendChild(numberesult);
        textresult.textContent = element.title;
        numberesult.textContent = element.time;

    })
}
myFunction(array);
// let newdata = new Date();
// let Hours = newdata.getHours();
// let Minuts = newdata.getMinutes();
// let rec = new webkitSpeechRecognition();
// rec.onstart = function () {
//     RecRes.textContent = "Gapiring... 🗣️ ";
// };

// elTextBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     rec.start();
//     rec.onresult = function (item) {
//         let answer = item.results[0][0].transcript;
//         elTextInput.value = answer;
//     }
// })
// elNumberBtn.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     rec.start();
//     rec.onresult = function (item) {
//         let answer = item.results[0][0].transcript;
//         let clock
//         let minute
//         if (Number(answer) && answer.length == 4) {
//             clock = answer.slice(0, 2)
//             minute = answer.slice(2, 4)
//             rec.onend = function () {
//                 RecRes.textContent = "Ovozingiz yozb muvafaqiyatli yozb olindi..✅ ";
//             };

//             elNumberInput.value = `${clock}:${minute}`

//         } else {
//             rec.onend = function () {
//                 RecRes.textContent = "unaqa vaqtb yo'q ";
//             };
//         }
//     }
// })


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    let elTextInputValue = elTextInput.value.trim();
    let elNumberInputValue = elNumberInput.value.trim();
    let newSecArr = {
        id: array.length ? array.length + 1 : 1 ,
        title: elTextInputValue,
        time: elNumberInputValue,
    }
    array.push(newSecArr)
    elTextInput.value = ""
    elNumberInput.value = ""
    myFunction(array);

});
elNumberInput.addEventListener("keyup", function (evt) {
    evt.preventDefault();
    let str
    let elNumberInputValue = elNumberInput.value.trim();
    if (elNumberInputValue.length == 2) {
        elNumberInput.value = `${elNumberInputValue}:`
    }
    else {
        elNumberInputValue.value = " "
    }

});
List.addEventListener("click", function (evt) {
    if (evt.target.matches(".btn-remove")) {
        const deletId = evt.target.dataset.id;
        const findobj = array.findIndex(item => {
            return item.id == deletId;
        });
        console.log(findobj)
        array.splice(findobj, 1);
        myFunction(array);
        // window.localStorage.setItem("todo", array)
    }
    if (evt.target.matches(".btn-edit")) {
        let editText = prompt("edit value");
        let editTime = prompt("edit time");
        let editId = evt.target.dataset.id;
        let finedit = array.find(item => {
            return item.id == editId;
        })
        finedit.title = editText;
        finedit.time = editTime;
        myFunction(array);
    }

})





