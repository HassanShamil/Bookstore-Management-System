package com.bookstore.model;

import java.util.ArrayList;
import java.util.List;
/**
 *
 * @author Hassan
 */

public class Cart {

    private int customerId;
    private List<CartItem> items = new ArrayList<>();
    
    // Constructors

    public Cart() {
    }

    public Cart(int customerId) {
        this.customerId = customerId;
    }

    // Getters ans Setters
    
    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(List<CartItem> items) {
        this.items = items;
    }

    
    
    public void addBook(String title) {
        for (CartItem item : items) {
            if (item.getBookTitle().equals(title)) {
                item.setQuantity(item.getQuantity() + 1);
                return;
            }
        }
        items.add(new CartItem(title, 1));
    }

    
    
    public void updateBookQuantity(String title, int quantity) {
        for (CartItem item : items) {
            if (item.getBookTitle().equals(title)) {
                if (quantity <= 0) {
                    items.remove(item);
                } else {
                    item.setQuantity(quantity);
                }
                return;
            }
        }
    }
    
    

    public void incrementBookQuantity(String title) {
        addBook(title); // Same as addBook
    }
    
    
    
    public void removeBookCompletely(String title) {
        items.removeIf(item -> item.getBookTitle().equals(title));
    }

    
    
    public void decrementBookQuantity(String title) {
        for (CartItem item : items) {
            if (item.getBookTitle().equals(title)) {
                if (item.getQuantity() > 1) {
                    item.setQuantity(item.getQuantity() - 1);
                } else {
                    items.remove(item);
                }
                return;
            }
        }
    }
}



