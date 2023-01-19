/*1-task : Longest word in the text */


let Words = "bgsrg sgrs earttgfgrht egtghtjht geer";
let splitWord = Words.split("  ");
let maxCount=0;
function NumberOfWords() {
	for (let i=0;i<splitWord.length;i++) {
            if(splitWord[i].length>maxCount){
                maxCount=splitWord[i].length;
            }
        
	}
return(maxCount);
}
console.log(NumberOfWords());

/*2-task : Palindrome*/

const number = "101";
const checkOfPalindrome = () => {

	const reverseNumber = number.toString().split("").reverse().join("");
	const string = number.toString();

	if (string === reverseNumber) {
		console.log("Palindrome");
	} else {
		console.log("Not a Palindrome");
	}
};
checkOfPalindrome();

/*3-task : Find year of kabisa */
function findKabisa(year) {

	return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

}
console.log(findKabisa(2000));



/*4-task : Secret number*/


const arr = [17,24,39,-5,-25,49,87,97,-46] ;
function findSecretNumber() {
	const neww = [];
	arr.forEach((num) => {
		if (num < 0) {
			neww.push(num);
		}
	});
	console.log(neww);
}
findSecretNumber();