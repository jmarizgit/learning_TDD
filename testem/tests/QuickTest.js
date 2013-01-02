// Generated by CoffeeScript 1.4.0
(function() {
  var should;

  should = chai.should();

  describe('A Quiz', function() {
    beforeEach(function() {
      return this.quiz = new Quiz({
        numQuestions: 10
      });
    });
    it('should have a default score of 0', function() {
      return this.quiz.score.should.equal(0);
    });
    it('should store the total # of questions', function() {
      this.quiz.numQuestions.should.be.above(0);
      return console.log(this.quiz.numQuestions);
    });
    return it('Should  correctly increment correct questions', function() {
      this.quiz.increment();
      this.quiz.score.should.equal(10);
      this.quiz.numQuestions = 2;
      this.quiz.score = 0;
      this.quiz.increment();
      return this.quiz.score.should.equal(50);
    });
  });

}).call(this);