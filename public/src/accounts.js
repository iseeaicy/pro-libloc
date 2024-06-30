function findAccountById(accounts, id) {
  let findAcc = accounts.find((accounts) => accounts.id === id);
  return findAcc;
}

function sortAccountsByLastName(accounts) {
  let sortByLastName = accounts.sort((accA, accB) => (accA.name.last > accB.name.last ? 1 : -1));
  return sortByLastName;
}

function getTotalNumberOfBorrows(account, books) {
  let totalNumBor = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
        totalNumBor += 1;
      }
    }
  }
  return totalNumBor;
}

function getBooksPossessedByAccount(account, books, authors) {
 let result = [];
 let borYe = [];
 books.forEach((item) => {
  const borrowed = item.borrows;
  const book = {
   id: item.id,
   title: item.title,
   genre: item.genre,
   authorId: item.authorId,
   author: {},
   borrows: {}
  };
  const { id, title, genre, authorId, author, borrows } = book;

  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false) {
    result.push(book);
    borYe.push(borrow);
    book.borrows = borYe;
    book.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
 });
 return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
