function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if(angka < 10){
      return angka;
  }
  else{
      var temp = 1;
      for(var i = 0 ; i < angka.toString().length ; i ++){
          temp *= angka.toString()[i]/1;
      }
      return kaliTerusRekursif(temp);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6