let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack"
              and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really
              an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at 
              Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long 
              way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George 
              Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time 
              I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the 
              coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross 
              back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/* To print no. of words in the story */
const storyWords= story.split(' ');
console.log(storyWords);


/* To filter out unnecessary words from story and store the remaining words in another array betterWords*/
let betterWords= storyWords.filter( word =>{
    return !unnecessaryWords.includes(word);
    });
//console.log(betterWords);


/* To filter out overused words from story and show the count of each word present in the overused array.*/
let count1=0;
let count2=0;
let count3=0;
for (i of storyWords){
  if (i==='really'){
    count1+=1;
  }
  else if (i==='very'){
    count2+=1;
}
  else if (i==='basically'){
    count3+=1;
}
}

//console.log(count1);
//console.log(count2);
//console.log(count3);



/* To count hoe many sentences are present in the paragraph/story */
let sentenceCount=0;
for (word of storyWords){
  if (word[word.length-1]==='.' || word[word.length-1]==='!'){
    sentenceCount+=1;
  }
}
console.log(sentenceCount);


/* To log all the better words present in betterWords array as a single string*/
console.log(betterWords.join(' '));
