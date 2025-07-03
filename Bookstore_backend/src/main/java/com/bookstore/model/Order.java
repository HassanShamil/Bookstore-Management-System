package com.bookstore.model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Hassan
 */

public class Order {

    private int id;
    private int customerId;
    private List<OrderItem> items = new ArrayList<>();
    
    // Constructors

    public Order() {
    }

    public Order(int id, int customerId, List<OrderItem> items) {
        this.id = id;
        this.customerId = customerId;
        this.items = items;
    }
    
    // Getters ans Setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
}
