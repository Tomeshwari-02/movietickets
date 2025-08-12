const movieSelect = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const bookBtn = document.getElementById('bookBtn');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        updateSelectedCount();
    });
});

// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Book button click
bookBtn.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
    } else {
        alert(`You booked ${selectedSeats.length} seat(s) for $${total.innerText}`);
    }
});
