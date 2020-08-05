// const paises = document.getElementById('paises');
const disableds = Array.from(document.querySelectorAll('.disabled'));
const MunContainer = document.getElementById('municipiosContainer');
const selectDptos = document.getElementById('departamentos');
const selectMun = document.getElementById('municipios');



paises.addEventListener('change', (e) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.datos.gov.co/resource/xdk5-pm3f.json');

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);

        const option = document.createElement('OPTION');
        option.textContent = 'Peguelo';
        selectDptos.appendChild(option);

        for (let i = 0; i < disableds.length / 2; i++) {
            disableds[i].classList.remove('disabled');
        }

        selectDptos.addEventListener('change', (e) => {
            const option = document.createElement('OPTION');
            option.textContent = 'Menor';
            selectMun.appendChild(option);
            for (let i = 2; i < disableds.length; i++) {
                disableds[i].classList.remove('disabled');
            }
            $(document).ready(function () {
                $('select').formSelect();
            });
        })

        $(document).ready(function () {
            $('select').formSelect();
        });
    });
    xhr.send();
})

