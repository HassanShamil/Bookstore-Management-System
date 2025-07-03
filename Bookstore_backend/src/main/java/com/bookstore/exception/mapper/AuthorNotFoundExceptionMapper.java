package com.bookstore.exception.mapper;
import com.bookstore.exception.AuthorNotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;
/**
 *
 * @author Hassan
 */

@Provider
public class AuthorNotFoundExceptionMapper implements ExceptionMapper<AuthorNotFoundException> {
    
    private static final Logger logger = Logger.getLogger(AuthorNotFoundExceptionMapper.class.getName());

    @Override
    public Response toResponse(AuthorNotFoundException ex) {
        
        logger.warning("Author Not Found Exception: " + ex.getMessage());
        
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("message", ex.getMessage());
        errorResponse.put("error", "Author Not Found");

        return Response.status(Response.Status.NOT_FOUND)
                       .entity(errorResponse)
                       .build();
    }
}