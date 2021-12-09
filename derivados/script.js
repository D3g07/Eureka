const quizData = [
  {
      question: "Você gosta de lugares mais urbanos?",
      a: "De preferência",
      b: "Sim",
      c: "Não, mas não me impoto tanto",
      d: "Não",
      certa: "d",
  },
  {
      question: "Interior ou litoral?",
      a: "Interior",
      b: "Litoral",
      c: "Os dois",
      d: "Nenhum dos dois",
      certa: "b",
  },
  {
      question: "Praias, rios/cachoeiras ou montanhas?",
      a: "Praias",
      b: "Rios e Cachoeiras",
      c: "Montanhas",
      d: "Nenhum dos citados acima",
      certa: "a",
  },
  {
      question: "Você viaja com o pensamento de aprender sobre a região?",
      a: "Adoro conhecer histórias de locais novos",
      b: "Gosto, mas não faz muita difereça",
      c: "Eu não gosto",
      d: "Tanto faz",
      certa: "d",
  },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.resposta')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_texto')
const b_text = document.getElementById('b_texto')
const c_text = document.getElementById('c_texto')
const d_text = document.getElementById('d_texto')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].certa) {
         score++
     }

     currentQuiz++

     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>Seu local de seu gosto, de acordo com as pergutas apresentadas é:</br><h3> Iguape - São paulo </h3></br> </h2>
         <small>De uma olhada na nosso aba de locais para ver mais!</small></br>

         <button onclick="location.reload()">Refazer o quiz</button>
         `
     }
  }
})