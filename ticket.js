document.addEventListener("DOMContentLoaded", () => {
    const months = document.querySelectorAll(".month-btn");
    const ticketsDisplay = document.querySelector(".tickets-display");
    const ticketFormContainer = document.getElementById("ticket-form-container");
    const buyTicketForm = document.getElementById("buy-ticket-form");
    const cancelButton = document.getElementById("cancel-button");

    months.forEach(month => {
        month.addEventListener("click", () => {
            const selectedMonth = month.getAttribute("data-month");
            displayTickets(selectedMonth);
        });
    });

    function displayTickets(month) {
        const allTickets = document.querySelectorAll(".tickets");
        allTickets.forEach(tickets => {
            if (tickets.getAttribute("data-month") === month) {
                tickets.style.display = "block";
            } else {
                tickets.style.display = "none";
            }
        });
    }

    displayTickets(new Date().toLocaleString('default', { month: 'short' }).toLowerCase());

    ticketsDisplay.addEventListener("click", (e) => {
        if (e.target.classList.contains("ticket") || e.target.closest(".ticket")) {
            const ticket = e.target.closest(".ticket");
            const game = ticket.querySelector("h3").textContent;
            const date = ticket.querySelector("p:nth-of-type(1)").textContent.replace("Date: ", "");
            const time = ticket.querySelector("p:nth-of-type(2)").textContent.replace("Time: ", "");
            const price = ticket.getAttribute("data-price");

            buyTicketForm.game.value = game;
            buyTicketForm.date.value = date;
            buyTicketForm.time.value = time;
            buyTicketForm.price.value = `$${price}`;

            ticketFormContainer.style.display = "flex";
        }
    });

    cancelButton.addEventListener("click", () => {
        ticketFormContainer.style.display = "none";
    });
});
