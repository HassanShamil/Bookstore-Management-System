package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class CartNotFoundException extends RuntimeException{
    
    public CartNotFoundException(String message){
        super(message);
    }
}
