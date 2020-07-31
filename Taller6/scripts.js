const buscar = document.getElementById('search');

document.addEventListener('DOMContentLoaded', (e) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        const table = document.getElementById('table');
        const trH = document.createElement('TR');

        for (const key in dataJSON[0]) {
            const th = document.createElement('TH');
            th.textContent = key;
            trH.appendChild(th);
        }
        table.appendChild(trH);

        for (let i = 0; i < dataJSON.length; i++) {
            const tr = document.createElement('TR');
            for (key in dataJSON[i]) {
                const td = document.createElement('TD');
                td.textContent = dataJSON[i][key];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    })
    xhr.send();
})

// let allNames = document.querSelectorAll('.table ')
buscar.addEventListener('keyup', (e) => {
    let value = buscar.value.toLowerCase();
    console.log(value);
})