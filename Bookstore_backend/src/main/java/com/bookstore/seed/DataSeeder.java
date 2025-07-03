/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


/**
 *
 * @author Hassan
 */

package com.bookstore.seed;

import com.bookstore.dao.AuthorDAO;
import com.bookstore.dao.BookDAO;
import com.bookstore.dao.CartDAO;
import com.bookstore.dao.CustomerDAO;
import com.bookstore.dao.OrderDAO;
import com.bookstore.model.Author;
import com.bookstore.model.Book;
import com.bookstore.model.Cart;
import com.bookstore.model.Customer;
import com.bookstore.model.Order;

import java.util.logging.Logger;

public class DataSeeder {

    private static final Logger logger = Logger.getLogger(DataSeeder.class.getName());
    private static boolean seeded = false;

    public static void seed() {
        if (seeded) return;

        logger.info("Seeding initial data...");

        AuthorDAO authorDAO = new AuthorDAO();
        BookDAO bookDAO = new BookDAO();
        CustomerDAO customerDAO = new CustomerDAO();
        CartDAO cartDAO = new CartDAO();
        //OrderDAO orderDAO = new OrderDAO();

        Author a1 = new Author(1, "J.K.", "Rowling", "British author of the Harry Potter series.");
        Author a2 = new Author(2, "George", "Orwell", "British writer, essayist, and journalist.");
        Author a3 = new Author(0, "Jane", "Austen", "English novelist known for Pride and Prejudice.");

        authorDAO.addAuthor(a1);
        authorDAO.addAuthor(a2);
        authorDAO.addAuthor(a3);
        
        bookDAO.addBook(new Book(0, "Harry Potter and the Sorcerer's Stone", a1, "978-0439708180", 1997, 29.99, 50));
        bookDAO.addBook(new Book(0, "1984", a2, "978-0451524935", 1949, 19.99, 100));
        bookDAO.addBook(new Book(0, "Pride and Prejudice", a3, "978-0141439518", 1813, 14.99, 75));
        
        Customer c1 = new Customer(1, "Alice", "Smith", "alice@example.com", "alice123");
        Customer c2 = new Customer(2, "Bob", "Johnson", "bob@example.com", "bob123");
        
        customerDAO.addCustomer(c1);
        customerDAO.addCustomer(c2);
        


        seeded = true;
        logger.info("Data seeding completed");
    }
}
