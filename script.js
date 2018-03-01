var app = new Vue({
    el: '#app',
    data: {
	score: 0,
	current: {},
	question:'',
	one:'',
	two:'',
	three:'',
	four:'',
	picked:'',
    },
    created: function(){
	this.getquestion();
    },    
    methods: {
	getquestion: function() {
	    randNum =  Math.floor((Math.random() * 300) + 1);
	    fetch('https://qriusity.com/v1/questions/' + randNum).then(response => {
		return response.json();
	    }).then(json => {
		this.current = json;
		this.picked = '';
		this.one = this.current[0].option1;
		this.two = this.current[0].option2;
		this.three = this.current[0].option3;
		this.four = this.current[0].option4;
		this.question = this.current[0].question;
		return true;
	    }).catch(err => { console.log("error: " + err);
			    });
	},

	submit: function(){
	    var answer = '' + this.current[0].answers;
	    if(answer === this.picked){
		this.score ++;
		this.getquestion();
	    }		
	}
    }
});
