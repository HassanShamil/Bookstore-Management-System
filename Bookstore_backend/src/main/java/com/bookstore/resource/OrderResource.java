/**
 *
 * @author Hassan
 */

package com.bookstore.resource;

import com.bookstore.dao.OrderDAO;
import com.bookstore.model.Order;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Map;

@Path("/customers/{customerId}/orders")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class OrderResource {

    //private final OrderDAO orderDAO = new OrderDAO();
    private final OrderDAO orderDAO = OrderDAO.getInstance();


    @POST
    public Response createOrder(@PathParam("customerId") int customerId) {
        Order order = orderDAO.createOrder(customerId);
        return Response.status(Response.Status.CREATED).entity(order).build();
    }

    @GET
    public Response getOrdersByCustomer(@PathParam("customerId") int customerId) {
        List<Order> orders = orderDAO.getOrdersByCustomerId(customerId);
        
            if (orders.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND)
                .entity(Map.of("message", "No orders available for Customer with id "+customerId))
                .build();
        }
        
        return Response.ok(orders).build();
    }

    @GET
    @Path("/{orderId}")
    public Response getOrderById(@PathParam("customerId") int customerId, @PathParam("orderId") int orderId) {
        Order order = orderDAO.getOrderById(customerId, orderId);
        return Response.ok(order).build();
    }
}
