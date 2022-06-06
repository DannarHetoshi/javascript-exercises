const getTheTitles = function(books) {
    const ans = books.map(book => (book.title))
    console.table(ans);
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
