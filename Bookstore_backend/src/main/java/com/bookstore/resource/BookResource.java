package com.bookstore.resource;

import com.bookstore.dao.BookDAO;
import com.bookstore.exception.BookNotFoundException;
import com.bookstore.model.Book;

import java.util.List;
import java.util.Map;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Hassan
 */

@Path("/books")
public class BookResource {
    
    private final BookDAO bookDao = new BookDAO();
    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllBooks() {
        List<Book> books =  bookDao.getAllBooks();
        
        if (books.isEmpty()) {
            return Response.status(Response.Status.NOT_FOUND)
                .entity(Map.of("message", "No books available in the store."))
                .build();
        }
        
        return Response.ok(books).build();
    }
    
    
    @GET
    @Path("/{bookId}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getBookById (@PathParam("bookId") int bookId) {
        return bookDao.getBookById(bookId);
    }
    
   
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response AddBook(Book book){
        Book addedBook = bookDao.addBook(book);
        return Response.status(Response.Status.CREATED)
                .entity(addedBook)
                .build();
    }
    
    
    @PUT
    @Path("/{bookId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateBook(@PathParam("bookId") int bookId, Book book) {
    try {
        Book updated = bookDao.updateBook(bookId, book);
        return Response.ok(updated).build();
    } catch (BookNotFoundException ex) {
        return Response.status(Response.Status.NOT_FOUND)
                .entity(Map.of("error", "Book Not Found", "message", ex.getMessage()))
                .build();
        }
    }

        @DELETE
        @Path("/{bookId}")
        @Produces(MediaType.APPLICATION_JSON)
        public Response deleteBook(@PathParam("bookId") int bookId) {
            bookDao.deleteBook(bookId);
            return Response.ok(Map.of("message", "Book with ID " + bookId + " deleted successfully.")).build(); 
    }
}
