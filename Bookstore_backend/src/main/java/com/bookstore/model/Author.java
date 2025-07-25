package com.bookstore.model;

/**
 *
 * @author Hassan
 */
public class Author {
    
    private int id;
    private String firstName;
    private String lastName;
    private String biography;

 // Constructors
    
    public Author() {}
    

    public Author(int id, String firstName, String lastName, String biography) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.biography = biography;
    }
    
    // Getters ans Setters
    
    public String getFullName() {
        return firstName + " " + lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
    
}
