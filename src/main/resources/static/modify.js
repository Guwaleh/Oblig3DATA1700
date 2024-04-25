$(function(){
    const id = window.location.search.substring(1);
    const url = "/getOneTicket?"+id;
    $.get(url,function(ticket){
        $("#id").val(ticket.id);
        $("#movie").val(ticket.movie);
        $("#quantity").val(ticket.quantity);
        $("#firstname").val(ticket.firstname);
        $("#lastname").val(ticket.lastname);
        $("#email").val(ticket.email);
        $("#phone").val(ticket.phone);
    });
});

function modifyTicket() {
    const ticket = {
        id : $("#id").val(),
        movie : $("#movie").val(),
        quantity : $("#quantity").val(),
        firstname : $("#firstname").val(),
        lastname : $("#lastname").val(),
        email : $("#email").val(),
        phone : $("#phone").val()
    };

    $.post("/modifyTicket", ticket ,function(){
        window.location.href = 'index.html';
    });
}