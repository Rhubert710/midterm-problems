function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0 ? true:false
 }
 
 function halfSquare(num) {
   return num * num / 2
 }
 
 function isLong(str) {
  return str.length >= 15 ? true:false
 }
 
 function exclaim(str) {
   let newStr = ''
   let count = 0
 
   for (let i = str.length - 1 ; i > -1 ; i--){
     if (str[i] === '!') {
       count++;  
     } else {
       break
     }
   }
 
   for (let i = 0; i < str.length - count; i++){
     newStr += str[i]
   
   }
     return newStr += '!'
 }
 
 function countWords(str) {
   const strSplit = str.split(" ")
   return strSplit.length;
 }
 
 function containsDigit(str) {
   if (str === '') return false;
   const num = '0123456789';
   for (char of str) {
     if (num.includes(char))
     return true
   }
   return false
 }
 
 function containsLowerCase(str) {
   if (str === '') return false;
 
   const lowerCased = 'abcdefghijklmnopqrstuvwxyz';
   for (char of str) {
     if (lowerCased.includes(char))
       return true
   }
     return false
 }
 
 function containsUpperCase(str) {
   if (str === '') return false;
   const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
   for (let i = 0; i < str.length; i++) {
     if (char.includes(str[i]))
       return true
   }
     return false
 }
 
 function containsNonAlphanumeric(str) {
   if (str === '') return false;
 
   const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
   const numbers = '1234567890'
 
   for (char of str) {
     if (!letters.includes(char) && !numbers.includes(char))
       return true
   }
   return false
 }
 
 function containsSpace(str) {
   if (str === '') return false;
   let count = 0;
   for (const char of str) {
     if (char === ' ') {
       count ++;
     } 
   }
   if (count > 0) {
     return true 
   } else {
     return false
   }
 }
 
 function digits(num) {
   let newStr = num.toString()
   let result = []
   for (const char of newStr){
     if(char !== '-' && char !== '.'){
       result.push(parseInt(char))
     }
   }
   return result
 }
 
 
 
 function truncate(str) {
   let newStr =''
   if (str.length < 15) return str;
   if (str.length >= 15) {
     newStr += str.slice(0, 8) + '...'
   }
   return newStr
 }
 
 function isValidPassword(str) {
   return (
     containsUpperCase(str) &&
     containsLowerCase(str) &&
     containsDigit(str) &&
     containsNonAlphanumeric(str) &&
     !containsSpace(str)
   );
 }
 
 function onlyPunchy(titles) {
   const exclaimedTitles = titles.map(exclaim);
   const punchyTitles = exclaimedTitles.filter(
     (title) => title.length < 15
   );
   return punchyTitles;
 }
 
 
 
 module.exports = {
   isEvenlyDivisible,
   halfSquare,
   exclaim,
   isLong,
   containsDigit,
   containsLowerCase,
   containsUpperCase,
   containsNonAlphanumeric,
   containsSpace,
   countWords,
   digits,
   truncate,
   isValidPassword,
   onlyPunchy,
 }