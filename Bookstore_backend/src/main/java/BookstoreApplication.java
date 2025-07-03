import com.bookstore.seed.DataSeeder;
import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

/**
 *
 * @author Hassan
 */


@ApplicationPath("/rest")
public class BookstoreApplication extends Application {

    public BookstoreApplication() {
        DataSeeder.seed();
    }
}


//import com.bookstore.seed.DataSeeder;
//import filters.CorsFilter;
//
//import javax.ws.rs.ApplicationPath;
//import javax.ws.rs.core.Application;
//import java.util.HashSet;
//import java.util.Set;
//
//@ApplicationPath("/rest")
//public class BookstoreApplication extends Application {
//
//    public BookstoreApplication() {
//        DataSeeder.seed();
//    }
//
//    @Override
//    public Set<Class<?>> getClasses() {
//        Set<Class<?>> classes = new HashSet<>();
//
//        // Register resources
//        classes.add(com.bookstore.resource.BookResource.class); // and others...
//
//        // ✅ Register the CORS filter
//        classes.add(CorsFilter.class);
//
//        return classes;
//    }
//}
