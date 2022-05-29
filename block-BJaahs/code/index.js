let title='Where is the capital of Jordan';
let options=['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex=1;


function isAnswerCorrect(index){
    return index===correctAnswerIndex;
}

function coorectAnswer(){
    return options[correctAnswerIndex];
}

let quiz1={
    title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
   isAnswerCorrect(index){
    return index===quiz1.correctAnswerIndex;
},
 coorectAnswer(){
    return quiz1.options[quiz1.correctAnswerIndex];
}
}
let quiz2={
    title: 'Where is the capital of India',
  options: ['Tashkent', 'Delhi', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
   isAnswerCorrect(index){
    return index===quiz2.correctAnswerIndex;
},
 coorectAnswer(){
    return quiz2.options[quiz2.correctAnswerIndex];
},
};

// for multiple question
function mulQuestion(title,options,correctAnswerIndex){
    let question={};
    question.title=title;
    question.option=options;
    question.correctAnswerIndex=correctAnswerIndex;
    
    question.isAnswerCorrect=function(index){
        return index===this.correctAnswerIndex
    },
    question.coorectAnswer=function(){
        return this.options[this.correctAnswerIndex]
    };
    return question;
}

let question1=mulQuestion(
    'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
   1,
);
let question2=mulQuestion(
    'Where is the capital of India',
  ['Tashkent', 'India', 'Kuwait City', 'Nairobi'],
   1,
);