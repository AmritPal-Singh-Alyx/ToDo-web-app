let count = 0;

document.getElementById("input-btn").addEventListener('click', function () {
    const inputValue = document.getElementById('input-value').value;
    count++;

    const tableContainer = document.getElementById('table-container');

    const tr = document.createElement('tr');

    tr.innerHTML =
        `<td>${count}</td>
     <td>${inputValue}</td>
     <td>
     <button class="btn btn-danger me-2 px-lg-4 delete-btn">Delete</button>
     </td> 
    `;
    tableContainer.appendChild(tr);
    document.getElementById('input-value').value = '';
    

    const elements = document.querySelectorAll('.delete-btn');

    for(const element of elements){
        element.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = 'none';
        })
    }

})

document.getElementById('Delete-all-btn').addEventListener('click', function(e){
    e.target.parentNode.parentNode.style.display = 'none';
})