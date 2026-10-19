const linkPattern = /(https?:\/\/|www\.|chat\.whatsapp\.com\/)/i;

function containsLink(message) {
  return linkPattern.test(message);
}

console.log("Payman AntiLink Bot is ready");

module.exports = { containsLink };