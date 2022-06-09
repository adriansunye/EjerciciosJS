function functionParImpar(num, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  
  if(num%2 == 0){
    p.innerHTML = num + ' es Par';
  }
  else{
    p.innerHTML = num + ' es Impar';  
  }
   
  textToParagraph(div, p);
}

function functionMayorMenor(num1, num2, div) {
  functionDestroyP(div);
    
  let p = createPargraph();
  addClass(p);
    
  if(num1 > num2){
    p.innerHTML = num1 + ' es més gran que ' +num2;  
  }
  else if(num1 < num2){
    p.innerHTML = num2 + ' es més gran que ' +num1;  
  }
  else{
    p.innerHTML = num1 + ' i ' +num2 + ' són iguals.';    
  }
   
  textToParagraph(div, p);
}

function functionDivision(num, div){
  functionDestroyP(div);
  
  let p = createPargraph();
  let textToAdd = document.createTextNode("");  
  addClass(p);
  
  let count = 0;
  if(num%2 == 0){
      textToAdd = document.createTextNode(num + ' es par.');
      count+=1;
      p.appendChild(textToAdd);
  }
  if(num%3 == 0){
      if(count>=1){
         textToAdd =  document.createTextNode('  //  ' + num + ' es divisible por 3.');
         }
      else{
         textToAdd = document.createTextNode(num + ' es divisible por 3.'); 
      }
      count+=1;
      p.appendChild(textToAdd);
  }
  if(num%5 == 0){
    if(count>=1){
         textToAdd =  document.createTextNode('  //  ' + num + ' es divisible por 5.');
         }
      else{
         textToAdd = document.createTextNode(num + ' es divisible por 5.'); 
      }
      count+=1;
      p.appendChild(textToAdd);
  }
  if(num%9 == 0){
    if(count>=1){
         textToAdd = document.createTextNode('  //  ' + num + ' es divisible por 9.');
         }
      else{
         textToAdd = document.createTextNode(num + ' es divisible por 9.'); 
      }
      count+=1;
      p.appendChild(textToAdd); 
  }
  else if(count===0){
    textToAdd = document.createTextNode(num + " no es cap d'aquestes coses.");
    p.appendChild(textToAdd); 
  }    
   
  textToParagraph(div, p);
}

function functionSuma(num1, num2, num3, div) {
  functionDestroyP(div);
  
  let array = [num1, num2, num3];
  array = array.map(Number);
  let suma = 0;
    
  let p = createPargraph();
  addClass(p);
  
  for(let i = 0; i<array.length; i++){
      suma+=array[i];
  }

  p.innerHTML = 'La suma de: ' + num1 + ' + ' + num2 + ' + ' + num3 + ' = ' + suma;     
   
  textToParagraph(div, p);
}

function functionFactorial(num, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  let suma = 1; 
	for (i=1; i<=num; i++) {
		suma = suma * i; 
	}
	p.innerHTML = 'El factorial de : ' + num + ' es: ' + suma; 
   
  textToParagraph(div, p);
}

function functionPrimo(num, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  let isPrime = true;

  // check if number is equal to 1
  if (num === 1) {
    p.innerHTML = num + " no es numero primo.";
  }
  // check if number is greater than 1
  else if (num > 1) {

  // looping through 2 to number-1
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
         }
      }
      if (isPrime) {
        p.innerHTML =`${num} es numero primo`;
      } else {
        p.innerHTML =`${num} no es numero primo`;
      }
  }
  // check if number is less than 1
  else {
    p.innerHTML =`${num} no es numero primo`;
  }
   
  textToParagraph(div, p);
}

function functionFibonacci(term, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  let textToAdd = document.createTextNode("");
  addClass(p);
    
  // take input from the user
  let n1 = 0, n2 = 1, nextTerm;

  textToAdd = document.createTextNode('Fibonacci Series: ');
  p.appendChild(textToAdd);

  for (let i = 1; i <= term; i++) {
    if(term == 1 || i == term){
        textToAdd = document.createTextNode(n1);
    }
    else{
        textToAdd = document.createTextNode(n1 + ' // ');
    }
    p.appendChild(textToAdd);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
   
  textToParagraph(div, p);
}

function functionGreaterThan(num1, num2, num3, div) {
  functionDestroyP(div);
  
  let array = [num1, num2, num3];
  array = array.map(Number);
    
  let p = createPargraph();
  addClass(p);
  
  array.sort(function(a, b) {
    return b - a;
  });

  p.innerHTML = 'Els numeros ordenats de major a menor són: ' + array.join(' ');
   
  textToParagraph(div, p);
}

function functionLowerThan(num1, num2, num3, div) {
  functionDestroyP(div);
  
  let array = [num1, num2, num3];
  array = array.map(Number);
    
  let p = createPargraph();
  addClass(p);
  
  array.sort(function(a, b) {
    return a - b;
  });

  p.innerHTML = 'Els numeros ordenats de menor a major són: ' + array.join(' ');     
   
  textToParagraph(div, p);
}

function functionDifference(num1, num2, num3, div) {
  functionDestroyP(div);
  
  let array = [num1, num2, num3];
  array = array.map(Number);
    
  let p = createPargraph();
  addClass(p);
  
  array.sort(function(a, b) {
    return b - a;
  });

  p.innerHTML = 'Els numero menor és: ' + array[(array.length -1)] + ' // El numero major és: ' + array.slice(0, 1);     
   
  textToParagraph(div, p);
}

function functionUpperCase(string, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  let lowerCase = string.toLowerCase();
    
  p.innerHTML = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
   
  textToParagraph(div, p);
}

function functionUpperCaseAll(string, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  
  let separateWord = string.toLowerCase().split(' ');
  for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
      separateWord[i].substring(1);
   }
   p.innerHTML = separateWord.join(' '); 
   
  textToParagraph(div, p);
}

function functionLengthWord(string, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  string = string.replace(/\s/g, ''); 
  p.innerHTML = 'Esta palabra tiene ' + string.length + ' caracteres.';
   
  textToParagraph(div, p);
}

function functionVowelsWord(string, div) {
  functionDestroyP(div);
  
  let p = createPargraph();
  addClass(p);
  
  let lowerCase = string.toLowerCase();
  // find the count of vowels
  let count = lowerCase.match(/[aeiou]/gi)||[];
  // return number of vowels
  p.innerHTML = 'Esta palbra tiene ' + count.length + ' vocales.';
   
  textToParagraph(div, p);
}

function functionDestroyP (tag){   
    if (tag.lastChild.className=='p') {
        tag.removeChild(tag.lastChild);
    }
}

function textToParagraph(tag, p){
    tag.appendChild(p);
}

function createPargraph(){
    return document.createElement('p');
}

function addClass(p){
    p.setAttribute('class', 'p');
}