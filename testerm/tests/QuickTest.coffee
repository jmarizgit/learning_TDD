should = chai.should()

describe 'A Quiz', ->
  beforeEach ->
    @quiz = new Quiz numQuestions: 10

  it 'should have a default score of 0', ->
    @quiz.score.should.equal 0

  it 'should store the total # of questions', ->
    @quiz.numQuestions.should.be.above 0
    console.log @quiz.numQuestions

  it 'Should  correctly increment correct questions', ->
    @quiz.increment()
    @quiz.score.should.equal 10

    @quiz.numQuestions = 2
    @quiz.score = 0
    @quiz.increment()
    @quiz.score.should.equal 50