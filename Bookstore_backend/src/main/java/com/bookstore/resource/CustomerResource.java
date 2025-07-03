package com.bookstore.resource;

import com.bookstore.dao.CustomerDAO;
import com.bookstore.model.Customer;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Hassan
 */

@Path("/customers")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CustomerResource {

    private final CustomerDAO customerDAO = new CustomerDAO();

    @GET
    public Response getAllCustomers() {
        List<Customer> customers = customerDAO.getAllCustomers();
        if (customers.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND)
                    .entity(Map.of("message", "No customers found."))
                    .build();
        }
        return Response.ok(customers).build();
    }

    @GET
    @Path("/{id}")
    public Response getCustomerById(@PathParam("id") int id) {
        Customer customer = customerDAO.getCustomerById(id);
        return Response.ok(customer).build();
    }

    @POST
    public Response addCustomer(Customer customer) {
        Customer addedCustomer = customerDAO.addCustomer(customer);
        return Response.status(Response.Status.CREATED).entity(addedCustomer).build();
    }

    @PUT
    @Path("/{id}")
    public Response updateCustomer(@PathParam("id") int id, Customer customer) {
        Customer updatedCustomer = customerDAO.updateCustomer(id, customer);
        return Response.ok(updatedCustomer).build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteCustomer(@PathParam("id") int id) {
        customerDAO.deleteCustomer(id);
        return Response.ok(Map.of("message", "Customer with ID " + id + " deleted successfully.")).build();
    }
}
