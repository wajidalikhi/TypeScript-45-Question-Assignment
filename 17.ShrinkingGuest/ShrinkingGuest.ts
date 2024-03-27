"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       Guest_List[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
//   );
// }

let absend_Guest: string = 'Imran Khan';

let new_Guest: string = 'Kamran Tessori';

Guest_List[0] = new_Guest;

// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       Guest_List[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
//   );
// }

console.log(`Mr. ${absend_Guest} is not coming to the party. `);
console.log('Good News! we find big table so we are inviting 3 more guests.');
// array me 3 guest add keye hn
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2 , 0 , 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari')

// yhn par mne 6 guest ke array ko print krwaya h
for (let i = 0; i < Guest_List.length; i++) {
    console.log(
      "Dear Mr. " +
        Guest_List[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
    );
  }
  // sorry message to guest for not inviting. 
console.log('\nSorry we can not arrange big table, only two peoples wii be invited.')

// yhn par mne guest remove keye hn
while(Guest_List.length > 2){
  let remove_Guest = Guest_List.pop();
  console.log(`Sorry Mr. ${remove_Guest}, you are not invited for dinner.`);

}
// hamare bache howe 2 invited guest.
for (let i = 0; i < Guest_List.length; i++) {
  console.log(
    "Dear Mr. " +
      Guest_List[i] +
      ",\n\nYou are still invited in our party.\n\nThank You!\n\n"
  );
}

// mne sare guest array se remove krdiye hn.
Guest_List.splice(0, 2);

console.log(Guest_List);