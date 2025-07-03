package com.bookstore.resource;

import com.bookstore.dao.CartDAO;
import com.bookstore.model.Cart;


import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.Map;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
/**
 *
 * @author Hassan
 */

@Path("/customers/{customerId}/cart")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CartResource {

    private final CartDAO cartDAO = new CartDAO();

    @POST
    @Path("/items")
    public Response addBookToCart(@PathParam("customerId") int customerId, @QueryParam("bookId") int bookId) {
        Cart cart = cartDAO.addBookToCustomerCart(customerId, bookId);
        return Response.ok(cart).build();
    }

    @GET
    public Response getCart(@PathParam("customerId") int customerId) {
        Cart cart = cartDAO.getCartByCustomerId(customerId);
        return Response.ok(cart).build();
    }


    @PUT
    @Path("/items/{bookId}")
    public Response updateBookQuantity(@PathParam("customerId") int customerId,
                                        @PathParam("bookId") int bookId,
                                        Map<String, Integer> requestBody) {
        if (requestBody == null || requestBody.isEmpty()) {
            Cart cart = cartDAO.incrementBookQuantity(customerId, bookId);
            return Response.ok(cart).build();
        } else {
            int quantity = requestBody.getOrDefault("quantity", 1);
            Cart cart = cartDAO.updateBookQuantityInCart(customerId, bookId, quantity);
            return Response.ok(cart).build();
        }
    }

    @DELETE
    @Path("/items/{bookId}")
    public Response deleteOrDecrementItem(@PathParam("customerId") int customerId, @PathParam("bookId") int bookId) {
        Cart cart = cartDAO.decrementBookQuantity(customerId, bookId);
        //return Response.ok(cart).build();
        return Response.ok(Map.of("message", "Decremented quantity of book ID " + bookId)).build();
        
    }
    
    @DELETE
    @Path("/items/{bookId}/remove")
    public Response removeBookCompletely(@PathParam("customerId") int customerId,@PathParam("bookId") int bookId) {
        Cart cart = cartDAO.removeBookCompletely(customerId, bookId);
        //return Response.ok(cart).build();
        return Response.ok(Map.of("message", "Removed book ID " + bookId + " completely from cart.")).build();

}

}
