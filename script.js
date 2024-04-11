document.getElementById('text').style.textTransform = "upperCase";
var k = 1;

document.getElementById('btn').addEventListener('click', function() {
    if (document.getElementById('text').value == "") {
        alert("Please Fill something");
    } else if (k == 21) {
        alert("Please Do Some Pending Work and Remove It");
    } else {
        const tr = document.createElement('tr');
        tr.id=k;
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const status = document.createElement('td');
        const a = document.createElement('input');
        
        a.type = 'checkbox';
        a.className = 'delete-btn';
        a.dataset.id = k;
        status.appendChild(a);
        td1.innerText = k;
        td2.innerText = document.getElementById('text').value;
        td2.id = k;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(status);
        document.getElementById('tbody').appendChild(tr);
        k = k + 1;
    }
});

document.getElementById('tbody').addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const id = event.target.dataset.id;
        const row = event.target.closest('tr').querySelectorAll('td');
        
        if (event.target.checked) {
            row[1].style.textDecoration = 'line-through';
        } else {
            row[1].style.textDecoration = 'none';
        }
    }
});

document.getElementById('del').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('.delete-btn');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            const row = checkbox.closest('tr');
            row.remove();
            setSerialNumbers();
        }
    });
});
function setSerialNumbers() {
    const rows = document.querySelectorAll('#tbody tr');
    rows.forEach((row, index) => {
        row.querySelector('td:first-child').innerText = index + 1;
    });
}
