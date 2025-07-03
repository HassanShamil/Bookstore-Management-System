package com.bookstore.exception.mapper;

import com.bookstore.exception.OutOfStockException;
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
public class OutOfStockExceptionMapper implements ExceptionMapper<OutOfStockException> {

    private static final Logger logger = Logger.getLogger(OutOfStockExceptionMapper.class.getName());

    @Override
    public Response toResponse(OutOfStockException ex) {
        
        logger.warning("Out of Stock Exception: " + ex.getMessage());
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", ex.getMessage());
        errorResponse.put("error", "Out Of Stock");

        return Response.status(Response.Status.BAD_REQUEST)
                       .entity(errorResponse)
                       .build();
       
    }
}
