$(function () {
    getAll();
});

function buyTicket() {
    let movie = $("#movie").val();
    let quantity = $("#quantity").val();
    let firstname = $("#firstname").val();
    let lastname = $("#lastname").val();
    let email = $("#email").val();
    let phone = $("#phone").val();

    if (movie === "") {
        alert("Pick a movie");
        return;
    }
    if (parseInt(quantity) <= 0) {
        alert("Larger quantity than 0 required");
        return;
    }
    if (firstname === "") {
        alert("Provide first name");
        return;
    }
    if (lastname === "") {
        alert("Provide last name");
        return;
    }

    let phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert("Provide a valid phone number");
        return;
    }
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Provide a valid email address");
        return;
    }
    const ticket = {
        movie: movie,
        quantity: quantity,
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone
    };

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

    $("#movie").val("");
    $("#quantity").val("");
    $("#firstname").val("");
    $("#lastname").val("");
    $("#email").val("");
    $("#phone").val("");
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

