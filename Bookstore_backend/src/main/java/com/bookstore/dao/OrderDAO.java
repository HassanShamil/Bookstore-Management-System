package com.bookstore.dao;

import com.bookstore.exception.CustomerNotFoundException;
import com.bookstore.exception.InvalidInputException;
import com.bookstore.exception.OutOfStockException;
import com.bookstore.model.Book;
import com.bookstore.model.Cart;
import com.bookstore.model.CartItem;
import com.bookstore.model.Customer;
import com.bookstore.model.Order;
import com.bookstore.model.OrderItem;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;
/**
 *
 * @author Hassan
 */

public class OrderDAO {

    private static final Logger logger = Logger.getLogger(OrderDAO.class.getName());

    private final Map<Integer, List<Order>> orders = new HashMap<>();
    private final CustomerDAO customerDAO = new CustomerDAO();
    private final CartDAO cartDAO = new CartDAO();
    private final BookDAO bookDAO = new BookDAO();

    private int nextOrderId = 1;
    
    private static OrderDAO instance = new OrderDAO();

    private OrderDAO() {
    // private constructor
    }

    public static OrderDAO getInstance() {
        return instance;
    }


    public Order createOrder(int customerId) {
        validateCustomer(customerId);

        Cart cart = cartDAO.getCartByCustomerId(customerId);

        if (cart.getItems().isEmpty()) {
            logger.warning("Cart is empty for customer ID " + customerId);
            throw new InvalidInputException("Cart is empty. Cannot place order.");
        }

        List<OrderItem> orderItems = new ArrayList<>();

        for (CartItem cartItem : cart.getItems()) {
            Book book = bookDAO.findBookByTitle(cartItem.getBookTitle());
            if (book == null) {
                throw new InvalidInputException("Book " + cartItem.getBookTitle() + " does not exist.");
            }
            if (cartItem.getQuantity() > book.getStockQuantity()) {
                throw new OutOfStockException("Only " + book.getStockQuantity() + " copies available for " + book.getTitle());
            }

            // Decrease stock
            book.setStockQuantity(book.getStockQuantity() - cartItem.getQuantity());

            orderItems.add(new OrderItem(book.getTitle(), cartItem.getQuantity()));
        }

        Order order = new Order(nextOrderId++, customerId, orderItems);
        orders.computeIfAbsent(customerId, k -> new ArrayList<>()).add(order);

        cartDAO.clearCart(customerId);

        logger.info("Created order ID " + order.getId() + " for customer ID " + customerId);
        return order;
    }

    public List<Order> getOrdersByCustomerId(int customerId) {
        validateCustomer(customerId);

        List<Order> customerOrders = orders.get(customerId);
        if (customerOrders == null || customerOrders.isEmpty()) {
            logger.info("No orders found for customer ID " + customerId);
            return Collections.emptyList();
        }
        return new ArrayList<>(customerOrders);
    }

    public Order getOrderById(int customerId, int orderId) {
        validateCustomer(customerId);

        List<Order> customerOrders = orders.get(customerId);
        if (customerOrders == null || customerOrders.isEmpty()) {
            logger.warning("No orders found for customer ID " + customerId);
            throw new InvalidInputException("No orders found for customer ID " + customerId);
        }

        for (Order order : customerOrders) {
            if (order.getId() == orderId) {
                return order;
            }
        }

        logger.warning("Order ID " + orderId + " not found for customer ID " + customerId);
        throw new InvalidInputException("Order with ID " + orderId + " not found for customer ID " + customerId);
    }

    private void validateCustomer(int customerId) {
        Customer customer = customerDAO.getCustomerById(customerId);
        if (customer == null) {
            logger.warning("Customer ID " + customerId + " does not exist.");
            throw new CustomerNotFoundException("Customer with ID " + customerId + " does not exist.");
        }
    }
}
