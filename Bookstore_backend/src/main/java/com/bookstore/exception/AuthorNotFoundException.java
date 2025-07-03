package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class AuthorNotFoundException extends RuntimeException{
    
    public AuthorNotFoundException(String message) {
        super(message);
    }
}
