async function getData(url) {
try {
 const response = await fetch(url);
 if(!response.ok){
  throw new error('Error insert here');
 }
 return response.json();
} catch (error) {
console.log("Unable to get data", error);
  }
}

function getNames(names) {
 return getData("directory/to/names");
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function GenerateNames(genNames){
try {
 const response = await Promise.all;
 const [RevivalNames] = response;

const RevivalNames = pickRandom(RevivalNames.data);

return `${RevivalNames}`;
} catch (error) {
 console.log("Insert Error", error);
 }
}

function logRandom(log)
 GenerateNames(genNames).then(console.log);
}

logRandom();



