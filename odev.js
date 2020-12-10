/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person);
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    const result = this.numbers[0].map(x => x * this.numbers[1]);
    console.log(result);
  }
}

numbers.multiply();


/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
*/
function isValidName(name){
    if(typeof(name) === 'string') {
      let trimmedName = name.trim();
      let dividedBySpaces = trimmedName.split(' ');
      for(let word of dividedBySpaces) {
        if(word.length <= 1) {
          //throw 'Invalid name';
          console.log('Invalid name');
          return false;
        }
      }
      return true;
    }
    //throw 'Invalid type';
    console.log('Invalid type');
    return false;
  }
  //Test Cases:
  console.log(isValidName("Frank") === true);
  console.log(isValidName(false) === false);
  console.log(isValidName(null) === false);
  console.log(isValidName(undefined) === false);
  console.log(isValidName("") === false);
  console.log(isValidName("  \t\n") === false);
  console.log(isValidName("X") === false);


/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi
  katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){
    let restrictedTypes = ['boolean', 'null', 'undefined'];
    for(let arg of arguments) {
        if(restrictedTypes.includes(typeof arg) || arg === null) {
            console.log(this.arg + ' ' + typeof arg + ' tipindedir.');
            return false;
        }
        else if(typeof arg === 'string' && arg.length === 0 ) {
            console.log(this.arg + ' ' + typeof arg + ' tipindedir.');
            return false;
        }
        else if(isNaN(dersSayisi) || isNaN(dersSuresi)) {
            console.log(this.arg + ' ' + typeof arg + ' tipindedir.');
            return false;
        }
        else if(!isFinite(dersSayisi) || !isFinite(dersSuresi)) {
            console.log(this.arg + ' ' + typeof arg + ' tipindedir.');
            return false;
        }
    }
    return Number(dersSayisi).toFixed() * Number(dersSuresi).toFixed();
}

// Test Cases
console.log(!!katilimSaati(6, 10) == true);
console.log(!!katilimSaati(6, "10") == true);
console.log(!!katilimSaati("6", 10) == true);
console.log(!!katilimSaati("6", "10") == true);
console.log(katilimSaati("", 6) === false);
console.log(katilimSaati(6, "") === false);
console.log(katilimSaati("", "") === false);
console.log(katilimSaati("foo", 6) === false);
console.log(katilimSaati(6, "foo") === false);
console.log(katilimSaati("foo", "bar") === false);
console.log(katilimSaati(null, null) === false);
console.log(katilimSaati(null, undefined) === false);
console.log(katilimSaati(undefined, null) === false);
console.log(katilimSaati(undefined, undefined) === false);
console.log(katilimSaati(Infinity, Infinity) === false);
console.log(katilimSaati(undefined, Infinity) === false);
console.log(katilimSaati(Infinity, undefined) === false);
console.log(katilimSaati(false, false) === false);
console.log(katilimSaati(false, true) === false);
console.log(katilimSaati(true, false) === false);
console.log(katilimSaati(true, true) === false);


