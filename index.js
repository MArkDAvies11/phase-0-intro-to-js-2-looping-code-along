// Code your solutions in this file

function writeCards(names) {
  if (!names || !Array.isArray(names)) {
    return [];
  }
  const thankYouMessages = names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);

  return thankYouMessages;
}
function countDown(startNumber) {
  for (let i = startNumber; i >= 0; i--) {
    console.log(i);
  }
}