
const Word = require("./word")

const removeWord = async (w) => {
const deletedWord = await Word.findOneAndDelete({word:w})

return deletedWord
}



module.exports = removeWord