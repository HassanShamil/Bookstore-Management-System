package com.bookstore.dao;

import com.bookstore.exception.InvalidInputException;
import com.bookstore.exception.AuthorNotFoundException;
import com.bookstore.model.Author;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

/**
 * 
 * @author Hassan
 */
public class AuthorDAO {

    private static final Logger logger = Logger.getLogger(AuthorDAO.class.getName());
    private static Map<Integer, Author> authors = new HashMap<>();
    private static int id = 1;

    
    public List<Author> getAllAuthors() {
        logger.info("Fetching all authors.");
        return new ArrayList<>(authors.values());
    }

    public Author getAuthorById(int id) {
        Author author = authors.get(id);
        if (author == null) {
            logger.warning("Author with ID " + id + " not found.");
            throw new AuthorNotFoundException("Author with ID " + id + " does not exist.");
        }
        return author;
    }

    public Author addAuthor(Author author) {
        validateAuthor(author);
        
        if (findAuthorByName(author.getFullName()) != null) {
            throw new InvalidInputException("Author with name "+author.getFullName()+" already exist");
        }
        
        author.setId(id++);
        authors.put(author.getId(), author);
        logger.info("Author added with ID: " + author.getId());
        return author;
    }

    public Author updateAuthor(int id, Author updatedAuthor) {
        if (!authors.containsKey(id)) {
            throw new AuthorNotFoundException("Cannot update. Author with ID " + id + " does not exist.");
        }
        
        if (updatedAuthor == null) {
            throw new InvalidInputException("updated author data cannot be null");
        }
        
        for (Author a : authors.values()) {
            if (a.getId() != id && a.getFullName().equalsIgnoreCase(updatedAuthor.getFullName())) {
            throw new InvalidInputException("Another author with the same name already exists.");
            }
        }
        
        validateAuthor(updatedAuthor);
        updatedAuthor.setId(id);
        authors.put(id, updatedAuthor);
        logger.info("Author updated with ID: " + id);
        return updatedAuthor;
    }

    public void deleteAuthor(int id) {
        if (!authors.containsKey(id)) {
            throw new AuthorNotFoundException("Cannot delete. Author with ID " + id + " does not exist.");
        }
        authors.remove(id);
        logger.info("Author deleted with ID: " + id);
    }

    public boolean exists(int id) {
        return authors.containsKey(id);
    }
    
    public Author findAuthorByName(String name) {
        for (Author author : authors.values()) {
        if (author.getFullName().equalsIgnoreCase(name)) {
            return author;
        }
    }
    return null;
}


    private void validateAuthor(Author author) {
        if (author == null) {
            throw new InvalidInputException("Author data cannot be null.");
        }

        if (author.getFirstName() == null || author.getFirstName().trim().isEmpty()
        || author.getLastName() == null || author.getLastName().trim().isEmpty()) {
            throw new InvalidInputException("Author first name and last name must be provided.");
        }
    }
}