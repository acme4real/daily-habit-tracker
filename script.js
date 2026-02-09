document.getElementById('habitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const habit = document.getElementById('habit').value;
    if (habit) {
        const li = document.createElement('li');
        li.textContent = habit;
        document.getElementById('habitList').appendChild(li);
        document.getElementById('habit').value = '';
    }
});