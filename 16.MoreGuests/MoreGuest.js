"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       Guest_List[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
//   );
// }
let absend_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " +
        Guest_List[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
}
console.log(`Mr. ${absend_Guest} is not coming to the party. `);
console.log('Good News! we find big table so we are inviting 3 more guests.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " +
        Guest_List[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n");
}
