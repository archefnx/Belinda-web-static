function randomInt(max) {
    return Math.floor(Math.random() * max)
}

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

$('#next-button').on('click', function() {
    let randNum = randomInt(20);

    $('#word').text(words['list'][randNum]['word']);
    $('#translation').text(words['list'][randNum]['translation']);
});

$(window).keypress(function (e) {
    if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()

        let randNum = randomInt(20);

        $('#word').text(words['list'][randNum]['word']);
        $('#translation').text(words['list'][randNum]['translation']);
    }
});