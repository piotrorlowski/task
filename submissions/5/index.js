// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

/** 
 * The problem with the above code is with the scope of var.
 * I would use let instead of var so the scope of the variable is reduced.
 */

for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i) }, i * 1000);
}
