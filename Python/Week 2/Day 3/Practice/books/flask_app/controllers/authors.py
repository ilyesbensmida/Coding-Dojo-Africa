from flask_app import app
from flask import redirect, render_template,request
from ..models.author import Author
from ..models.book import Book


@app.route('/')
def index():
    return redirect('/authors')

@app.route('/authors')
def authors():
    all_authors = Author.get_all()
    return render_template('authors.html',all_authors=all_authors)

@app.route('/create/author',methods=['POST'])
def create_author():
    data = {
        "name": request.form['name']
    }
    author_id = Author.save(data)
    return redirect('/authors')

@app.route('/author/<int:id>')
def show_author(id):
    data = {
        "id": id
    }
    all_authors = Author.get_all()
    author = Author.get_by_id(data)
    unfavorited_books = Book.unfavorited_books(data)
    return render_template('show_author.html',author=author,unfavorited_books=unfavorited_books, all_authors=all_authors)

@app.route('/join/book',methods=['POST'])
def join_book():
    data = {
        'author_id': request.form['author_id'],
        'book_id': request.form['book_id']
    }
    author_book= Author.add_favorite(data)
    return redirect(f"/author/{request.form['author_id']}", author_book=author_book)