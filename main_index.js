const QUESTIONS_DATA = 'QuestionsData'
const AWSWERED_DATA = 'AnsweredData'

const question=document.querySelector('#question')
const correct=document.querySelector('#correct')
const answers=document.querySelectorAll('.answer')
const saveBtn=document.querySelector('#save')


const nextBtn = document.querySelector('#next')
const submitBtn = document.querySelector('#submit')
const startBtn = document.querySelector('#start')


const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const test = document.querySelector('#test')

const answerArray = Array.from(answers)
const checkArray = Array.from(('input[type="radio"]'))

const questionbank = JSON.parse(localStorage.getItem(QUESTIONS_DATA)) || []
var checkboxAnswers = Array.from(document.querySelectorAll('.answerV'))
let y = 0 




startBtn.onclick = function(){
    document.querySelector('.table').classList.add('hide')
    document.querySelector('.wrapper.form-quiz').classList.remove('hide')
    render_data()
}
let indeX = 0
function render_data(){
    document.querySelector('.test_question').innerHTML=questionbank[indeX].question
    
    var textAnswers = Array.from(document.querySelectorAll('.text_answer'))
    console.log(textAnswers[0])
    let i = 0
    
    console.log(document.querySelectorAll('.text_answer'))

    for(key in questionbank[indeX].answers) {
        textAnswers[i].innerHTML = questionbank[indeX].answers[key]
        i++
    }
    if(checkboxAnswers[0].checked)y++

}
function remove_checkbox(){
    for(let i=0;i<checkboxAnswers.length;i++)
    {
        checkboxAnswers[i].checked=false
    }

}

nextBtn.onclick = function () {
    if(indeX < questionbank.length-1)
    {
        indeX++
        render_data()
        remove_checkbox()
    }
}

submitBtn.onclick=function(){
    if(checkboxAnswers[0].checked)y++
    document.querySelector('.wrapper.form-quiz').classList.add('hide')
    results.innerHTML=`<p>Số điểm của bạn là</p>
                        <p>${y}/${questionbank.length}</p>`
}