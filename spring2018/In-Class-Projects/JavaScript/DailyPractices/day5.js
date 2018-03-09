function getListHtml(array) {
    var html = '<ul>';



    for (let i = 0; i < array.length; i++) {
        html += '<li>' + array[i] + '</li>';
    }

    html += '</ul>'

    return html
}


var cars = ['BMW', 'Tesla', 'Lambo', 'Hyundai'];
document.getElementById('cars1').innerHTML = getListHtml(cars);

cars.push('Volvo');
document.getElementById(cars2).innerHTML = getListHtml(cars);

cars[0] = 'Tesla';
document.getElementById(cars3).innerHTML = getListHtml(cars);

cars[2] = 'Ford';


