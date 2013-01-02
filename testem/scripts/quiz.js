Quiz = function(config){
  this.score = 0;
  this.title = config.title;
  this.numQuestions = config.numQuestions;
};

Quiz.prototype.increment = function(){
  this.score += 100 / this.numQuestions;
};