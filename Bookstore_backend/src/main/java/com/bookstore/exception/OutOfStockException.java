package com.bookstore.exception;

/**
 *
 * @author Hassan
 */

public class OutOfStockException extends RuntimeException{
    
    public OutOfStockException(String message){
        super(message);
    }
}
