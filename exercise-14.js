function changeVocals (str) {
  //code di sini
  var hasil = '';
  var vokal = 'aiueoAIUEO';
  var abjad = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for(var i = 0 ; i < str.length ; i ++){
      var check = false;
      for(var j = 0 ; j < vokal.length ; j ++){
          if(str[i] === vokal[j]){
              for(var k = 0 ; k < abjad.length ; k ++){
                  if(vokal[j] === abjad[k]){
                      hasil += abjad[k+1];
                      check = true;
                  }
              }
          }
      }
      if(!check){
          hasil += str[i];
      }
  }
  return hasil;
  
}

function reverseWord (str) {
  //code di sini
    var hasil = '';
    for(var i = str.length - 1 ; i >= 0 ; i --){
        hasil += str[i];
    }
    return hasil;

}

function setLowerUpperCase (str) {
  //code di sini
  var temp = [];
  for(var i = 0 ; i < str.length ; i ++){
      if(str[i].toLowerCase() === str[i]){
          temp.push(str[i].toUpperCase());
      }
      else{
          temp.push(str[i].toLowerCase());
      }
  }
  var hasil = '';
  for(var i = 0 ; i < temp.length ; i ++){
      hasil += temp[i];
  }
  return hasil;
}

function removeSpaces (str) {
  //code di sini
    var hasil = '';
    for(var i = 0 ; i < str.length ; i ++){
        if(str[i] !== ' '){
            hasil += str[i];
        }
    }
    return hasil;


}

function passwordGenerator (name) {
  //code di sini
  if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var vocal = changeVocals(name);
  var reverse = reverseWord(vocal);
  var lower = setLowerUpperCase(reverse);
  var hasil = removeSpaces(lower);
  return hasil;

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'