package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class InvalidInputException extends RuntimeException{
    
    public InvalidInputException(String message) {
        super(message);
    }
}

