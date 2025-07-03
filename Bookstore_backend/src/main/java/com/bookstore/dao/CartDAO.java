package com.bookstore.dao;

import com.bookstore.exception.CustomerNotFoundException;
import com.bookstore.exception.InvalidInputException;
import com.bookstore.exception.OutOfStockException;
import com.bookstore.model.Book;
import com.bookstore.model.Cart;
import com.bookstore.model.CartItem;
import com.bookstore.model.Customer;

import java.util.*;
import java.util.logging.Logger;

/**
 *
 * @author Hassan
 */

public class CartDAO {

    private static final Logger logger = Logger.getLogger(CartDAO.class.getName());
    private static final Map<Integer, Cart> carts = new HashMap<>();
    private final BookDAO bookDAO = new BookDAO();
    private final CustomerDAO customerDAO = new CustomerDAO();

    public Cart getCartByCustomerId(int customerId) {
        validateCustomer(customerId);
        return carts.computeIfAbsent(customerId, Cart::new);
    }

    public Cart addBookToCustomerCart(int customerId, int bookId) {
        validateCustomerAndBook(customerId, bookId);

        Cart cart = getCartByCustomerId(customerId);
        Book book = bookDAO.getBookById(bookId);

        int quantityInCart = getQuantityInCart(cart, book);

        checkStockAvailability(book, quantityInCart, 1);

        cart.addBook(book.getTitle());
        logger.info("Added book ID " + bookId + " to cart of customer ID " + customerId);
        return cart;
    }

    public Cart incrementBookQuantity(int customerId, int bookId) {
        validateCustomerAndBook(customerId, bookId);

        Cart cart = getCartByCustomerId(customerId);
        Book book = bookDAO.getBookById(bookId);

        int quantityInCart = getQuantityInCart(cart, book);

        checkStockAvailability(book, quantityInCart, 1);

        cart.incrementBookQuantity(book.getTitle());
        logger.info("Incremented quantity for book ID " + bookId + " for customer ID " + customerId);
        return cart;
    }

    public Cart updateBookQuantityInCart(int customerId, int bookId, int quantity) {
        validateCustomerAndBook(customerId, bookId);

        if (quantity <= 0) {
            logger.warning("Quantity must be greater than 0.");
            throw new InvalidInputException("Quantity must be greater than 0.");
        }

        Cart cart = getCartByCustomerId(customerId);
        Book book = bookDAO.getBookById(bookId);

        if (quantity > book.getStockQuantity()) {
            throw new OutOfStockException("Only " + book.getStockQuantity() + " copies available for " + book.getTitle());
        }

        cart.updateBookQuantity(book.getTitle(), quantity);
        logger.info("Set quantity to " + quantity + " for book ID " + bookId + " in cart of customer ID " + customerId);
        return cart;
    }

    public Cart decrementBookQuantity(int customerId, int bookId) {
        validateCustomerAndBook(customerId, bookId);

        Cart cart = getCartByCustomerId(customerId);
        Book book = bookDAO.getBookById(bookId);

        cart.decrementBookQuantity(book.getTitle());
        logger.info("Decremented quantity for book ID " + bookId + " in cart of customer ID " + customerId);
        return cart;
    }

    public Cart removeBookCompletely(int customerId, int bookId) {
        validateCustomerAndBook(customerId, bookId);

        Cart cart = getCartByCustomerId(customerId);
        Book book = bookDAO.getBookById(bookId);

        cart.removeBookCompletely(book.getTitle());
        logger.info("Completely removed book ID " + bookId + " from cart of customer ID " + customerId);
        return cart;
    }

    public void clearCart(int customerId) {
        validateCustomer(customerId);

        Cart cart = carts.get(customerId);
        if (cart != null) {
            cart.getItems().clear();
            logger.info("Cleared cart for customer ID " + customerId);
        }
    }

    private void validateCustomer(int customerId) {
        Customer customer = customerDAO.getCustomerById(customerId);
        if (customer == null) {
            logger.warning("Customer ID " + customerId + " does not exist.");
            throw new CustomerNotFoundException("Customer with ID " + customerId + " does not exist.");
        }
    }

    private void validateCustomerAndBook(int customerId, int bookId) {
        validateCustomer(customerId);
        Book book = bookDAO.getBookById(bookId);
        if (book == null) {
            logger.warning("Book ID " + bookId + " does not exist.");
            throw new OutOfStockException("Book with ID " + bookId + " does not exist."); // Optional: change to BookNotFoundException if you want
        }
    }

    private int getQuantityInCart(Cart cart, Book book) {
        return cart.getItems().stream()
                .filter(item -> item.getBookTitle().equals(book.getTitle()))
                .mapToInt(CartItem::getQuantity)
                .findFirst()
                .orElse(0);
    }

    private void checkStockAvailability(Book book, int quantityInCart, int quantityToAdd) {
        if (quantityInCart + quantityToAdd > book.getStockQuantity()) {
            logger.warning("Out of stock for book " + book.getTitle());
            throw new OutOfStockException("Only " + book.getStockQuantity() + " copies available for " + book.getTitle());
        }
    }
}
