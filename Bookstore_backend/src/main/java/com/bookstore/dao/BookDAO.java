/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.bookstore.dao;

import com.bookstore.exception.AuthorNotFoundException;
import com.bookstore.exception.BookNotFoundException;
import com.bookstore.exception.InvalidInputException;
import com.bookstore.model.Author;
import com.bookstore.model.Book;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

/**
 *
 * @author Hassan
 */
public class BookDAO {

    
    private static final Logger logger = Logger.getLogger(BookDAO.class.getName());
    
    private static Map<Integer, Book> books = new HashMap<>();
    private static int id = 1;
    private final AuthorDAO authorDAO = new AuthorDAO(); // Add this line at the top if not already
    
    public List<Book> getAllBooks() {
        
        logger.info("Fetching all books.");
        return new ArrayList<>(books.values());
    }
    
    public Book getBookById(int id) {
        Book book = books.get(id);
        if (book == null) {
            logger.warning("Book with "+id+" not found.");
            throw new BookNotFoundException("cannot find. Book with "+ id +" does not exist.");
        } 
        return book;
    }


    public Book addBook(Book book) {
        
        validateBook(book);
        
        // checking if the book already exists before adding 
        if (findBookByTitleAndAuthor(book.getTitle(), book.getAuthor().getFullName()) != null) {
            throw new InvalidInputException("A book with this title and author already exists.");
        }
        
        
        if (book.getAuthor() != null) {
            Author incomingAuthor = book.getAuthor();
        
            Author existingAuthor = authorDAO.findAuthorByName(incomingAuthor.getFullName());
        
            if (existingAuthor != null) {
                book.setAuthor(existingAuthor);
          } else {
                Author addedAuthor = authorDAO.addAuthor(new Author(0, incomingAuthor.getFirstName(), incomingAuthor.getLastName(), incomingAuthor.getBiography()));
                book.setAuthor(addedAuthor);
            }
        }

        book.setId(id++); // Only addBook generates new ID
        books.put(book.getId(), book);
        logger.info("Book added with ID: " + book.getId());
        return book;
}

    
    public Book updateBook(int id, Book updatedBook) {
    if (!books.containsKey(id)) {
        throw new BookNotFoundException("Cannot update. Book with ID " + id + " does not exist.");
    }

    validateBook(updatedBook);
    
    for (Book existingBook : books.values()) {
        if (existingBook.getId() != id &&
            existingBook.getTitle().equalsIgnoreCase(updatedBook.getTitle()) &&
            existingBook.getAuthor() != null &&
            existingBook.getAuthor().getFullName().equalsIgnoreCase(updatedBook.getAuthor().getFullName())) {
            throw new InvalidInputException("Another book with this title and author already exists.");
        }
    }

    if (updatedBook.getAuthor() != null) {
        Author incomingAuthor = updatedBook.getAuthor();
        Author existingAuthor = authorDAO.findAuthorByName(incomingAuthor.getFullName());

        if (existingAuthor != null) {
            updatedBook.setAuthor(existingAuthor);
        } else {
            Author addedAuthor = authorDAO.addAuthor(new Author(0, incomingAuthor.getFirstName(), incomingAuthor.getLastName(), incomingAuthor.getBiography()));
            updatedBook.setAuthor(addedAuthor);
        }
    }

    updatedBook.setId(id); // Keep same Book ID
    books.put(id, updatedBook);

    logger.info("Book updated with ID: " + id);
    return updatedBook;
}



    public void deleteBook(int id) {
        
        if (!books.containsKey(id)) {
            throw new BookNotFoundException("Cannot delete. Book with ID " + id + " does not exist.");
        }

        books.remove(id);
        logger.info("Book deleted with ID: " + id);
    }
    
    public List<Book> getBooksByAuthorId(int authorId) {
        
        if (authorDAO.getAuthorById(authorId)== null) {
            throw new AuthorNotFoundException("Author with id "+ authorId +" does not exist");
        }
        
        List<Book> result = new ArrayList<>();
        for (Book book : books.values()) {
            if (book.getAuthor() != null && book.getAuthor().getId() == authorId) {
                result.add(book);
        }
    }
    return result;
}

    public boolean exists(int id) {
        return books.containsKey(id);
    }
    
    public Book findBookByTitleAndAuthor(String title, String authorFullName) {
        for (Book book : books.values()) {
            if (book.getTitle().equalsIgnoreCase(title)
                && book.getAuthor() != null
                && book.getAuthor().getFullName().equalsIgnoreCase(authorFullName)) {
                return book;
            }
        }
        return null;
    }
    
    public Book findBookByTitle(String title) {
    for (Book book : books.values()) {
        if (book.getTitle().equalsIgnoreCase(title)) {
            return book;
        }
    }
    return null;
}


    
    private void validateBook(Book book) {
        if (book == null) {
            throw new InvalidInputException("Book data cannot be null.");
        }
        
        if (book.getTitle() == null || book.getTitle().trim().isEmpty()) {
            throw new InvalidInputException("Book title cannot be empty.");
        }

        if (book.getYear() > Calendar.getInstance().get(Calendar.YEAR)) {
            throw new InvalidInputException("Publication year cannot be in the future.");
        }

        if (book.getPrice() < 0) {
            throw new InvalidInputException("Book price cannot be negative.");
        }

        if (book.getStockQuantity() < 0) {
            throw new InvalidInputException("Stock quantity cannot be negative.");
        }

        if (book.getAuthor() == null) {
            throw new InvalidInputException("Author details must be provided.");
        }
        
        if (book.getAuthor().getFirstName() == null || book.getAuthor().getFirstName().trim().isEmpty()
            || book.getAuthor().getLastName() == null || book.getAuthor().getLastName().trim().isEmpty()) {
            throw new InvalidInputException("Author first name and last name must be provided.");
        }
    }   


}
