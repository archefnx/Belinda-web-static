// const words = {
//     'list': [
//         {
//             'word': 'Saccess',
//             'translation': 'Успех',
//         },
//         {
//             'word': 'Error',
//             'translation': 'Ошибка',           
//         },
//     ]
// }

let words = null;
$.ajax({
    'async': false,
    'global': false,
    'url': "json/words-rus-eng.json",
    'dataType': "json",
    'success': function (data) {
        words = data;
    }
});

console.log(words);
console.log(words['list'][1]['word']);



$('#next-button').on('click', function() {
    let randNum = Math.floor(Math.random() * 20);
    $('#word').text(words['list'][randNum]['word']);
    $('#translation').text(words['list'][randNum]['translation']);
});