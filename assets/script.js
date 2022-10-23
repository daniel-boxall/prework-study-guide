var topics = ['HTML', 'CSS', 'Git', 'Javascript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (topics === 'HTML') {
        console.log("Let's study HTML!");
    } else if (topics === 'CSS') {
        console.log("Let's study CSS!");
    } else if (topics === 'Git') {
        console.lof("Let's study Git!");
    } else if (topics === 'Javascript') {
        console.log("Let's study javascript!");
    } else {
        console.log('Please try again!')
    }
}

console.log('Here are the topics we learned through Prework:' );
listTopics();
console.log('which topic should we study first?');
selectTopic();