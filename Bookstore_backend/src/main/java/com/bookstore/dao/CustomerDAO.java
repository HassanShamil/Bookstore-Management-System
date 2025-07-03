package com.bookstore.dao;

import com.bookstore.exception.CustomerNotFoundException;
import com.bookstore.exception.InvalidInputException;
import com.bookstore.model.Customer;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

/**
 *
 * @author Hassan
 */

public class CustomerDAO {

    private static final Logger logger = Logger.getLogger(CustomerDAO.class.getName());
    private static final Map<Integer, Customer> customers = new HashMap<>();
    private static int idCounter = 1;

    public List<Customer> getAllCustomers() {
        return new ArrayList<>(customers.values());
    }

    public Customer getCustomerById(int id) {
        Customer customer = customers.get(id);
        if (customer == null) {
            logger.warning("Customer with ID " + id + " not found.");
            throw new CustomerNotFoundException("Customer with ID " + id + " does not exist.");
        }
        return customer;
    }

    public Customer addCustomer(Customer customer) {
        validateCustomer(customer);
        
        if (findCustomerByEmail(customer.getEmail()) != null) {
            throw new InvalidInputException("A customer with this email already exists.");
    }

        customer.setId(idCounter++);
        customers.put(customer.getId(), customer);

        logger.info("Customer added with ID " + customer.getId());
        return customer;
    }

    public Customer updateCustomer(int id, Customer updatedCustomer) {
        if (!exists(id)) {
            logger.warning("Customer with ID " + id + " not found for update.");
            throw new CustomerNotFoundException("Customer with ID " + id + " does not exist.");
        }
        
        if (updatedCustomer == null) {
            throw new InvalidInputException("Updated customer data cannot be null.");
        }
        
            // Prevent duplicate email (excluding current one)
        for (Customer customer : customers.values()) {
            if (customer.getId() != id && customer.getEmail().equalsIgnoreCase(updatedCustomer.getEmail())) {
                throw new InvalidInputException("Another customer with the same email already exists.");
            }
        }

        validateCustomer(updatedCustomer);

        updatedCustomer.setId(id); // Keep ID same
        customers.put(id, updatedCustomer);

        logger.info("Customer updated with ID " + id);
        return updatedCustomer;
    }

    public void deleteCustomer(int id) {
        if (!exists(id)) {
            logger.warning("Customer with ID " + id + " not found for delete.");
            throw new CustomerNotFoundException("Customer with ID " + id + " does not exist.");
        }

        customers.remove(id);

        logger.info("Customer deleted with ID " + id);
    }

    public boolean exists(int id) {
        return customers.containsKey(id);
    }
    
    
    public Customer findCustomerByEmail(String email) {
        for (Customer customer : customers.values()) {
            if (customer.getEmail().equalsIgnoreCase(email)) {
                return customer;
            }
        }
        return null;
    }

    
    private void validateCustomer(Customer customer) {
        if (customer == null) {
            throw new InvalidInputException("Customer data cannot be null.");
        }
        if (customer.getFirstName() == null || customer.getFirstName().trim().isEmpty()
         || customer.getLastName() == null || customer.getLastName().trim().isEmpty()) {
            throw new InvalidInputException("Customer first name and last name must be provided.");
        }
        if (customer.getEmail() == null || !customer.getEmail().contains("@")) {
            throw new InvalidInputException("Invalid email address.");
        }
        if (customer.getPassword() == null || customer.getPassword().length() < 6) {
            throw new InvalidInputException("Password must be at least 6 characters.");
        }
    }
}

