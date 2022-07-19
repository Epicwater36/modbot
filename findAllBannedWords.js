const Word = require("./word")

const getAllWords = async () => {
    const words = await Word.find({yes:"Yes"})
    let w =[]
    for (i=0;i<words.length;i++){
     
        w.push(words[i].word)
    }
    return w
}

module.exports = getAllWords