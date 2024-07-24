let msg = " Cacttus Education  ";
console.log(msg[7]);

let uCMsg = msg.toUpperCase();
console.log(uCMsg);

let lCMsg = msg.toLowerCase();
console.log(lCMsg);

let noSpaceMsg = msg.trim();
console.log(noSpaceMsg);

let lNoSpaceMsg = msg.trimStart();
console.log(lNoSpaceMsg);

let rNoSpaceMsg = msg.trimEnd();
console.log(rNoSpaceMsg);

let tvShow = "catdog";

console.log(tvShow.indexOf("g"));
console.log(tvShow.indexOf("td"));
console.log(tvShow.indexOf("z"));

msg = "CacttusEducation";

let cacttusMsg = msg.slice(0, 7); // Slice the first 7 characters from the 'msg' variable
console.log(cacttusMsg);

let educationMsg = msg.slice(7); // Slice 'msg' string starting from the 7th character
console.log(educationMsg);

console.log(msg.slice(-9));

let annoyinLaugh = "hehehe very funny. hehehe";

let fixedLaoug = annoyinLaugh.replace("hehehe", "hahaha"); // // Replace "hehehe"  with "hahaha"

let fixedLaougAll = annoyinLaugh.replaceAll("hehehe", "hahaha"); // Replace all occurrences of "hehehe" with "hahaha"

console.log(fixedLaoug);
console.log(fixedLaougAll);
