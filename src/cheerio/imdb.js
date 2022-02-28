var request = require('request');
var cheerio = require('cheerio');

var link = 'https://www.imdb.com/chart/moviemeter';


request(link, function(err, res, body) {
    if(err) console.log('Erro: '+err)

    var $ = cheerio.load(body);

    var titleList = $('.chart').find('thead tr th').text().trim();
    var showTitles = $('.desc').text();

    console.log('\n'+showTitles);
    console.log('\n'+titleList);

    $('.lister-list tr').each(function() {
        var img = $(this).find('.posterColumn a img').attr('src').toString();
        //var rank = $(this).find('.velocity').text().trim();
        var title = $(this).find('.titleColumn a').text().trim();
        var rating = $(this).find('.imdbRating strong').text().trim();

        console.log(`\nTITULO: ${title} \nAVALIAÇÃO: ${rating} \nIMAGEM: ${img}`);
    })
})