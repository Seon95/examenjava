function Text(string){

    this.str = string;
}

Text.prototype.left = function(number){

    return this.str.slice(0,number)
  }

Text.prototype.right = function(number){
    
    return this.str.slice(number,)

  }

Text.prototype.charCount = function(){

  return this.str.length
}

Text.prototype.wordCount = function(){

  return this.str.split(" ").length
}


Text.prototype.vowelCount = function(){
  return this.str.replace(/[^aeiou]/gi, "").length;
}


Text.prototype.capitalsCount = function(){

  let result = 0;
  for (let i = 0; i < this.str.length; i += 1) {
    if (this.str[i].toUpperCase() === this.str[i]) {
      result++;
    }
  }
  return result;
}


Text.prototype.append = function(string){
  return this.str + string
}


Text.prototype.append = function(string){
  return string +  this.str
}



const Text1 = new Text("PoeeSs dzdz")
console.log(Text1.wordCount())