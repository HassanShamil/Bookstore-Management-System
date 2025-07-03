package com.bookstore.exception.mapper;

import com.bookstore.exception.BookNotFoundException;
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
public class BookNotFoundExceptionMapper implements ExceptionMapper<BookNotFoundException>{
    
    private static final Logger logger = Logger.getLogger(BookNotFoundExceptionMapper.class.getName());

    @Override
    public Response toResponse(BookNotFoundException ex) {
        
        logger.warning("Book Not Found Exception: "+ex.getMessage());
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", ex.getMessage());
        errorResponse.put("error", "Book Not Found");

        return Response.status(Response.Status.NOT_FOUND)
                       .entity(errorResponse)
                       .build();
        
    }
    
}
