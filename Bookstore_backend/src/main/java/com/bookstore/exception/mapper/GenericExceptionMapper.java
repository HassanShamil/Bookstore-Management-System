package com.bookstore.exception.mapper;

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
public class GenericExceptionMapper implements ExceptionMapper<Throwable> {

    private static final Logger logger = Logger.getLogger(GenericExceptionMapper.class.getName());

    @Override
    public Response toResponse(Throwable ex) {
        
        logger.severe("Unexpected Error Occurred: " + ex.getMessage());
        ex.printStackTrace();  // Log the stack trace to help with debugging
        
        
        Map<String, Object> errorResponse = new HashMap<>();
        
        
        String errorType = "Internal Server Error";
        String errorMessage = "An unexpected error occurred.";
        int statusCode = Response.Status.INTERNAL_SERVER_ERROR.getStatusCode();

 
        if (ex.getMessage() != null && !ex.getMessage().isEmpty()) {
            errorMessage = ex.getMessage();
        }

        
        errorResponse.put("error", errorType);
        errorResponse.put("message", errorMessage);
        errorResponse.put("status", statusCode);

        
        return Response.status(statusCode)
                       .entity(errorResponse)
                       .build();
    }
}


