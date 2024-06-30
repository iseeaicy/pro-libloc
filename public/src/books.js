function findAuthorById(authors, id) {
  let findAut = authors.find((author) => author.id === id);
  return findAut;
}

function findBookById(books, id) {
  let findBoo = books.find((books) => books.id === id);
  return findBoo;
}

function partitionBooksByBorrowedStatus(books) {
 let booRe = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let booBo = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let finalRe = [[...booBo], [...booRe]];
 return finalRe;
}

function getBorrowersForBook(book, accounts) {
 return book.borrows
  .map((borrow) => {
   let account = accounts.find((account) => account.id === borrow.id);
   return { ...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
