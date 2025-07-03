package com.bookstore.exception.mapper;

import com.bookstore.exception.InvalidInputException;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author Hassan
 */

@Provider
public class InvalidInputExceptionMapper implements ExceptionMapper<InvalidInputException> {

    private static final Logger logger = Logger.getLogger(InvalidInputExceptionMapper.class.getName());

    @Override
    public Response toResponse(InvalidInputException ex) {
        
        logger.warning("Invalid Input Exception: " + ex.getMessage());

        Map<String, String> error = new HashMap<>();
        error.put("message", ex.getMessage());
        error.put("Error", "Invalid Input");
        
        return Response.status(Response.Status.BAD_REQUEST)
                .entity(error)
                .type("application/json") 
                .build();
    }
}

