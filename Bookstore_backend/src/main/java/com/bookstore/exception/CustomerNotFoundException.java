package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class CustomerNotFoundException extends RuntimeException{
    
    public CustomerNotFoundException(String message) {
    
        super(message);
    }
}
