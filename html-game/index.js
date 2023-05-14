kr_words = []
eng_words = []
const encodedParams = new URLSearchParams();
encodedParams.append("source_language", "en");
encodedParams.append("target_language", "ko");
encodedParams.append("text", "Mihi the lizard");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '280f1851d5msh9732617d27b48cdp10228bjsn6644690b6716',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	},
	body: encodedParams
};

async function translate(word, language){
  options.body.set("target_language", language)
  console.log(options.body.getAll("target_language"))
  word = "I love you Mom!"
  options.body.set("text", word) 
  eng_words.push(word)
  console.log(word)

  const result = await fetch('https://text-translator2.p.rapidapi.com/translate', options);
  let json = await result.json();
  word = json.data.translatedText;
  document.getElementById("translatedtext").innerHTML = word;

  // document.getElementById("title").innerHTML = translate("Mihi the Lizard")
  return word
}

window.addEventListener('keydown', (event) => {
  switch(event.key){
    case 'Enter':
      translate(document.getElementById("text".value), document.getElementById("text").value)
      // console.log(document.getElementById("text").value)
      break
    case 'Control':
      // getDict()
      console.log(event.key)
      break
  }

})

// async function getDict(){

//   if (typeof(Storage) !== "undefined") {
//     // document.getElementById("eng").innerHTML = localStorage.getItem("text");
//     //console.log(localStorage.getItem("translatedWord").length)
//     for(i=0; i < kr_words.length; i++){
//       document.getElementById("kr").innerHTML = kr_words[i] + '---' + eng_words[i];
//       console.log(kr_words[i] + '------' + eng_words[i])
//     }
//     // document.getElementById("kr").innerHTML = localStorage.getItem("translatedWord") + "-" + document.getElementById("text").value;
//       // document.getElementById("text").innerHTML = localStorage.getItem("translatedWord");
//     } else {
//       document.getElementById("translatedtext").innerHTML = "Sorry, your browser does not support Web Storage...";
//     }
//     document.getElementById("kr").style.display = 'block';

//    for(j = 0; j < kr_words.length; j++){
//     console.log(kr_words[j] + '----' + eng_words[j] + ' ' +j)
//    }
  
// }



// async function translateSomething(args){

// }






