package com.bookstore.exception.mapper;

import com.bookstore.exception.CartNotFoundException;
import java.util.HashMap;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.Map;
import java.util.logging.Logger;

/**
 *
 * @author Hassan
 */

@Provider
public class CartNotFoundExceptionMapper implements ExceptionMapper<CartNotFoundException> {

    private static final Logger logger = Logger.getLogger(CartNotFoundExceptionMapper.class.getName());

    @Override
    public Response toResponse(CartNotFoundException ex) {
        
        logger.warning("Cart Not Found Exception: " + ex.getMessage());
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", ex.getMessage());
        errorResponse.put("error", "Cart Not Found");

        return Response.status(Response.Status.NOT_FOUND)
                       .entity(errorResponse)
                       .build();
    }
}
