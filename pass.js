let elForm = document.querySelector('.form-box');

let userName = document.querySelector('.input-name');

let res = false;

let tortma = 0;

let result = document.querySelector('.output');

let shkaf = [
  ["0934"],
  ["5478"],
  ["3434"]
];

elForm.addEventListener('submit', function(evt){
  evt.preventDefault();

  user = prompt('Parolni kiriting!   3434')

  if (user.value == '') {
    result.textContent = 'Xechnima kiritilmadi!'
  } else {

  let res = false;
  for (let tortma = 0; tortma < shkaf.length; tortma++) {
    for (let kitob = 0; kitob < shkaf[tortma].length; kitob++) {
      if((shkaf[tortma][kitob] == user)) {
        result.textContent = `Xush kelibsiz ${userName.value}`
        res = true;
        break;
      }
    }
    if (res) {
      break;
    }
  }

  if (!res) {
    result.textContent = 'Bunday foydalanuvchi mavjud emas!'
  }
}
})





































// let passwords = [2390, 2389, 4378, 3434, 3489, 9483];
// let user = 3434;


// for (let i = 0; i < passwords.length; i++) {
//   if((passwords[i] == user)) {
//     console.log('right')
//   } else {
//     console.log('wrong');
//   }
// }


// let shkaf = [
//   ["O'tkan kunlar", "Kecha va kunduz", "Sariq devni minib", "Ufq", "Shum bola", "Ikki eshik orasi"],
//   ["Urush va tinchlik", "Yevgeniy Onegin", "Mumu", "Buratino", "Telbalar", "Iqrornoma"],
//   ["Chol va dengiz", "Alvido, qurol!", "Alif", "Alkimyogar", "Kichkina shahzoda", "O'n ikki stul"]
// ]
// let user =  'Ufq';
// let res = false;
// for (let tortma = 0; tortma < shkaf.length; tortma++) {
//   for (let kitob = 0; kitob < shkaf[tortma].length; kitob++) {
//     if((shkaf[tortma][kitob] == user)) {
//       console.log('bor')
//       res = true;
//       break;
//     }
//   }
//   if (res) {
//     break;
//   }
// }

// if (!res) {
//   console.log('suu');
// }
