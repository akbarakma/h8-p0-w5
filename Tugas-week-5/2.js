//Object berisi para seller minuman
//object ini disediakan

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan object bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 */
function beliTermurah(toBuy) {
	var sellers = {
		BobaFett: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.15
		},
		BobaFest: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
		},
		ChatTime: {
			items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
		},
		Kokumi: {
			items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
		}
  };
    if(toBuy.length === 0){
      return 'Pembeli Tidak Membeli Apa-Apa';
    }
    var hasil = '';
    for(var i = 0 ; i < toBuy.length ; i ++){
      var harga = [];
      for(var keys in sellers){
        var temp;
        for(var j = 0 ; j < sellers[keys].items.length ; j ++){
          if(sellers[keys].items[j].name === toBuy[i]){
            temp = sellers[keys].items[j].price;
          }
        }
        var dis = temp * sellers[keys].discount;
        temp -= dis;
        harga.push([temp , keys]);
      }
      for(var j = 0 ; j < harga.length ; j ++){
        for(var k = 0 ; k < harga.length - 1 - j ; k ++){
          if(harga[k][0] > harga[k+1][0]){
            var tampung = harga[k];
            harga[k] = harga[k+1];
            harga[k+1] = tampung;
          }
        }
      }

      hasil += `${toBuy[i]} bisa dibeli dengan harga paling murah ${harga[0][0]} di ${harga[0][1]}`
      if(i !== toBuy.length-1){
        hasil += '\n'
      }
    }

    return hasil;

}

var tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
var tc2 = ['Fett Drink'];
var tc3 = [];
var tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
*/
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(
	beliTermurah(tc4)
); /**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */