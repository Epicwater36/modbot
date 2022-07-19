
const Word = require("./word")

const addWord = async (w) => {
  const word = new Word({
    word: w,
    yes: "Yes"
  })

  await word.save()


}



module.exports = addWord