package oslomet.oblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {
    @Autowired
    TicketRepository rep;

    @PostMapping("/save")
    public void save(@RequestBody Ticket ticket){rep.save(ticket);}

    @GetMapping("/getAll")
    public List<Ticket> getAll() {
        return rep.getAll();
    }

    @GetMapping("/getOneTicket")
    public Ticket getOneTicket(int id){
        return rep.getOneTicket(id);
    }

    @PostMapping("/modifyTicket")
    public void modifyTicket(Ticket ticket){
        rep.modifyTicket(ticket);
    }

    @GetMapping("/deleteAll")
    public void deleteAll() {
        rep.deleteAll();
    }

    @GetMapping("/deleteOne")
    public void deleteOne(int id) {
        rep.deleteOne(id);
    }
}
