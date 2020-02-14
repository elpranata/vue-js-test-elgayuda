function mirror(str) {
    return str+str.split("").reverse().join("");
  } 
  
  console.log(mirror('avg')) 