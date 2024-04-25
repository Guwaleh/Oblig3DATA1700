$(function () {
    getAll();
});

function isValidInput(movie, quantity, firstname, lastname, phone, email) {
    const phoneRegex = /^\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!movie) {
        alert("Pick a movie");
        return false;
    }
    if (parseInt(quantity) < 1) {
        alert("Larger quantity than 0 required");
        return false;
    }
    if (!firstname) {
        alert("Provide firstname");
        return false;
    }
    if (!lastname) {
        alert("Provide lastname");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Provide a valid phone number");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Provide a valid email address");
        return false;
    }
    return true;
}

function buyTicket() {
    const movie = $("#movie").val();
    const quantity = $("#quantity").val();
    const firstname = $("#firstname").val();
    const lastname = $("#lastname").val();
    const email = $("#email").val();
    const phone = $("#phone").val();

    if (!isValidInput(movie, quantity, firstname, lastname, phone, email)) return;

    const ticket = { movie, quantity, firstname, lastname, email, phone };

    $.ajax({
        url: '/save',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(ticket),
        success: function () {
            getAll();
        },
        error: function (response) {
            alert('Error saving ticket: ' + response.responseText);
        }
    });
    $("#movie, #quantity, #firstname, #lastname, #email, #phone").val("");
}

function getAll() {
    $.get("/getAll", function (ticket) {
        formatData(ticket);
    });
}

function formatData(ticket) {
    let print = "<table class='table table-striped table-bordered'><thead class='thead-dark'><tr>" +
        "<th>Movie</th>" +
        "<th>Quantity</th>" +
        "<th>First Name</th>" +
        "<th>Last Name</th>" +
        "<th>Email</th>" +
        "<th>Phone</th>" +
        "<th>Actions</th>" +
        "</tr></thead><tbody>";
    for (const tick of ticket) {
        print += "<tr>" +
            "<td>" + tick.movie + "</td>" +
            "<td>" + tick.quantity + "</td>" +
            "<td>" + tick.firstname + "</td>" +
            "<td>" + tick.lastname + "</td>" +
            "<td>" + tick.email + "</td>" +
            "<td>" + tick.phone + "</td>" +
            "<td>" +
            "<a class='btn btn-primary btn-sm' href='modify.html?id=" + tick.id + "' style='margin-right: 5px;'>Modify</a>" +
            "<button class='btn btn-danger btn-sm' onclick='deleteOne(" + tick.id + ")'>Delete</button>" +
            "</td>" +
            "</tr>";
    }
    print += "</tbody></table>";
    $("#result").html(print);
}

function deleteAll() {
    $.get("/deleteAll", function () {
        getAll();
    });
}

function deleteOne(id) {
    let url = "/deleteOne?id=" + id;
    $.get(url, function () {
        window.location.href = "/";
    })
}

