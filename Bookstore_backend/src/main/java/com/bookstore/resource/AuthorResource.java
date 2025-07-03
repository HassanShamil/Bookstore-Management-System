package com.bookstore.resource;

import com.bookstore.dao.AuthorDAO;
import com.bookstore.dao.BookDAO;
import com.bookstore.model.Author;
import com.bookstore.model.Book;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Map;
/**
 *
 * @author Hassan
 */

@Path("/authors")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuthorResource {

    private final AuthorDAO authorDao = new AuthorDAO();

    @GET
    public Response getAllAuthors() {
        List<Author> authors = authorDao.getAllAuthors();
        
        // 
        if (authors.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND)
                .entity(Map.of("message", "No books available in the store."))
                .build();
        }
                
        return Response.ok(authors).build();
    }

    @GET
    @Path("/{authorId}")
    public Response getAuthorById(@PathParam("authorId") int authorId) {
        return Response.ok(authorDao.getAuthorById(authorId)).build();
    }

    @POST
    public Response addAuthor(Author author) {
        Author created = authorDao.addAuthor(author);
        return Response.status(Response.Status.CREATED)
                       .entity(created)
                       .build();
    }

    @PUT
    @Path("/{authorId}")
    public Response updateAuthor(@PathParam("authorId") int authorId, Author author) {
        Author updated = authorDao.updateAuthor(authorId, author);
        return Response.ok(updated).build();
    }

    @DELETE
    @Path("/{authorId}")
    public Response deleteAuthor(@PathParam("authorId") int authorId) {
        authorDao.deleteAuthor(authorId);
        return Response.ok(Map.of("message", "Author with ID " + authorId + " deleted successfully.")).build();
    }
    
    @GET
    @Path("/{id}/books")
    public Response getBooksByAuthor(@PathParam("id") int id) {
        List<Book> booksByAuthor = new BookDAO().getBooksByAuthorId(id);
        
        if (booksByAuthor.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND)
                .entity(Map.of("message", "No books from author with id "+id))
                .build();
        }
        
        return Response.ok(booksByAuthor).build();
    }

}

