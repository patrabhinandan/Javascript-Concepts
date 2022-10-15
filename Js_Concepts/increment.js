let calcScore = {
    score : 0,
    inc : function (){
        this.score++;
    },
    dec : function (){
        this.score--;
    },
    totalScore : function (){
        console.log("Total Score:", this.score);
    }
  }

  calcScore.inc();
  calcScore.dec();
  calcScore.inc();
  calcScore.inc();
  calcScore.dec();
  calcScore.inc();
  calcScore.totalScore();
  

