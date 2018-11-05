
//my json object with my answers exported 
const MikeData = [
  {
    question: 'Tell me a little bit about yourself?',
    answer: 'I am a front end developer by trade focused on continuing to learn and further my skills.',
    param: 'description',
  },
  {
    question: 'What excites you about technology?',
    answer: 'I love the fact that technology changes everyday. The ability to keep learning and building to create tangible solutions to problems is extremely appealing to me.',
    param: 'tech',
  },
  {
    question: 'What is your preferred technology stack',
    answer: 'I have a deep understanding of Javascript (ES6) and front end tech (HTML5, CSS3). Professionally, I have built products in React and Redux. I have dabbled in Node.js with a VPS and I learned Express and EJS for this mini project. I would love to continue working on front end technology and expanding my knowledge of full stack development.',
    param: 'techstack',
  },
  {
    question: 'What are your favorite hobbies?',
    answer: 'I enjoy hiking, and running 5ks as well as constantly adding new features of Javascript to my many side projects to better my skills as a Front End Developer.',
    param: 'hobbies',
  },
];

module.exports = {
	dataReturn(){
		return MikeData;
	}
}