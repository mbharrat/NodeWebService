//module for my search function for about me

module.exports = {
	//returns search that takes the whole query and the json file
	search(query,json){
		//if query is not there then return json object of all answers and questions
		if(Object.keys(query).length === 0){
			var final = [];
			for(let j in json){
				var tmp = {};
				tmp.question = json[j].question;
				tmp.answer = json[j].answer;
				final = [...final,tmp];
				
			}
			return final;
			//return json;

		//if query is present
		}else{
			//loop and find a match and return that as json object
			for(j in json){
				if(json[j].param===query.q){
					var final = {};
					final.question = json[j].question;
					final.answer = json[j].answer;
					return final;
					
				}
			}
		}	
			
		//edge case of param not being in the json file of my answers/questions
		return { error: 'Not found'};
	}
};