package com.bookstore.exception.mapper;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;
import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

/**
 *
 * @author Hassan
 */

@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException>{
    
    private static final Logger logger = Logger.getLogger(NotFoundExceptionMapper.class.getName());
    
    @Override
    public Response toResponse(NotFoundException ex) {
        
        logger.warning("Endpoint Not Found Exception: " + ex.getMessage());
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", ex.getMessage());
        errorResponse.put("error", "Endpoint Not Found");

        return Response.status(Response.Status.NOT_FOUND)
                       .entity(errorResponse)
                       .build();
    }
}
