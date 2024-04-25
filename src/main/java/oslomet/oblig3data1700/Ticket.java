package oslomet.oblig3data1700;

// Ticket class
public class Ticket {
    private int id;
    private int quantity;
    private String movie;
    private String firstname;
    private String lastname;
    private String email;
    private String phone;

    // Empty constructor
    public Ticket(){
    }

    // Constructor
    public Ticket(int id, String movie, int quantity, String firstname, String lastname, String email, String phone) {
        this.id = id;
        this.movie = movie;
        this.quantity = quantity;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
