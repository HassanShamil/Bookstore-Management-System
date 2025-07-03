package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class BookNotFoundException extends RuntimeException{
    
    public BookNotFoundException(String message) {
        super(message);
    }
}
