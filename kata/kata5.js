const urlEncode = function(text) {
  let urlName = "" 
  for (let i of text) {
    if ( i === " ") {
      text = text.replace(" ", "%")
    }
  };
  return text
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));