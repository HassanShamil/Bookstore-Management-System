package com.bookstore.model;

/**
 *
 * @author Hassan
 */

public class CartItem {

    private String bookTitle;
    private int quantity;
    
    // Constructors

    public CartItem() {
    }

    public CartItem(String bookTitle, int quantity) {
        this.bookTitle = bookTitle;
        this.quantity = quantity;
    }

    // Getters ans Setters
    
    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
