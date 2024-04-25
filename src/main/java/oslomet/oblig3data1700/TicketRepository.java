package oslomet.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {


    @Autowired
    private JdbcTemplate db;

    public void save(Ticket ticket) {
        String sql = "INSERT INTO Ticket (movie, quantity, firstname, lastname, email, phone) VALUES (?, ?, ?, ?, ?, ?);";
        db.update(sql,
                ticket.getMovie(),
                ticket.getQuantity(),
                ticket.getFirstname(),
                ticket.getLastname(),
                ticket.getEmail(),
                ticket.getPhone());
    }

    public List<Ticket> getAll() {
        String sql = "SELECT * FROM Ticket ORDER BY lastname DESC;";
        List<Ticket> allTickets = db.query(sql, new BeanPropertyRowMapper<>(Ticket.class));
        return allTickets;
    }

    public Ticket getOneTicket(int id) {
        Object [] param = new Object[1];
        param[0] = id;
        String sql = "SELECT * FROM Ticket WHERE id = ?;";
        Ticket ticket = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Ticket.class));
        return ticket;
    }

    public void modifyTicket(Ticket ticket){
        String sql = "UPDATE Ticket SET movie=?, quantity=?, firstname=?, lastname=?, email=?, phone=? WHERE id=?";
        db.update(sql,
                ticket.getMovie(),
                ticket.getQuantity(),
                ticket.getFirstname(),
                ticket.getLastname(),
                ticket.getEmail(),
                ticket.getPhone(),
                ticket.getId());
    }


    public void deleteAll() {
        String sql = "DELETE FROM Ticket;";
        db.update(sql);
    }

    public void deleteOne(int id) {
        String sql = "DELETE FROM Ticket WHERE id=?;";
        db.update(sql, id);
    }
}
