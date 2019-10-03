//Book Class:Represents a book
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}
//UI Class: Handle UI tasks
class UI {
	static displayBooks() {

		const books = Store.getBooks();
		//以下是範例資料，只是為了coding時思路較清楚而展示
		// const StoredBooks = [
		// 	{
		// 		title: 'Book One',
		// 		author: 'Harris Moore',
		// 		isbn: '1256892'
		// 	},
		// 	{
		// 		title: 'Book Two',
		// 		author: 'Kate Wang',
		// 		isbn: '1253892'
		// 	},
		// 	{
		// 		title: 'Book Three',
		// 		author: 'Dom K',
		// 		isbn: '1256890'
		// 	}
		// ];
		// const books = StoredBooks;
		books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book) {
		const list = document.querySelector('#book-list');
		const row = document.createElement('tr');

		row.innerHTML = `
		<tr>
			<td>${book.title}</td>
			<td>${book.author}</td>
			<td>${book.isbn}</td>	
			<td><a href="#" class="btn btn-danger delete">X</td>
		</tr>
		`;
		list.appendChild(row);
	}

	static showAlert(message, className) {
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		const div = document.createElement('div')
		div.className = `alert alert-${className} mt-4`;
		div.appendChild(document.createTextNode(message));
		container.insertBefore(div, form);

		//報錯視窗2秒消失
		setTimeout(() => { document.querySelector('.alert').remove() }, 2000);
	}

	static deleteBook(el) {
		// deleteBook()傳進去的參數要跟if()裡的一致，我原先deleteBook()使用e
		// 而if(e.target)就報錯。el stands for element
		if (el.classList.contains('delete') === true) {
			el.parentElement.parentElement.remove();
		}
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}
//Store Class:Handles Storage
class Store {
	//取得儲存在localStorage的book資料，以展示在頁面上
	static getBooks() {
		let books;
		if (localStorage.getItem('books') === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem('books'));
			console.log(books);//array
		}
		return books;
	}

	//增加新書目
	static addBook(book) {
		//一定要先取得既有的
		//但為何要先取得既有的？如果我們不這麼做，會發生什麼事？
		const books = Store.getBooks();
		//再push新的書進去既有的值
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}

	//一本書擁有一個獨一無二的isbn，我們可將其視為其id，刪除他的id可以確保不會重複刪除到其他的書目
	static removeBook(isbn) {
		const books = Store.getBooks();

		books.forEach((book, index) => {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));
	}
}


//Event:Display books
/* 在document的dom content載入完成後，觸發UI.displayBooks function */
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event:Add a book
document.querySelector('#book-form').addEventListener('submit', e => {
	e.preventDefault();
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;
	//針對輸入資訊的驗證
	if (title === '' || author === '' || isbn === '') {
		UI.showAlert('Please fill in all the fields', 'danger');
	} else {
		//Instantiate book 
		const book = new Book(title, author, isbn);

		//Add book to UI
		UI.addBookToList(book);

		//將書添加到localStorage
		Store.addBook(book);

		UI.showAlert('Book added', 'success');

		UI.clearFields();
	}

})

//Event:Remove a book

document.querySelector('#book-list').addEventListener('click', e => {
	//Remove book from UI
	UI.deleteBook(e.target);

	//Remove book from localStorage
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

	//Show Success msg
	UI.showAlert('Book removed!', 'danger');
})