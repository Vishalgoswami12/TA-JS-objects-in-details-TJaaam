

function Question(title,options,correctAnswerIndex){
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

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );