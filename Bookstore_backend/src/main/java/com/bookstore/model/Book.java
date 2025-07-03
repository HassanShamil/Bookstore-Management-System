package com.bookstore.model;

/**
 *
 * @author Hassan
 */
public class Book {
    
    private int id;
    private String title;
    private Author author;
    private String ISBN;
    private int year;
    private double price;
    private int stockQuantity;

    // Constructors
    
    public Book() {}

    public Book(int id, String title, Author author, String ISBN, int year, double price, int stockQuantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.year = year;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }
    
    // Getters ans Setters
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public String getISBN() {
        return ISBN;
    }

    public void setISBN(String ISBN) {
        this.ISBN = ISBN;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
