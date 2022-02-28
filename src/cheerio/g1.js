var request = require('request');
var cheerio = require('cheerio');

var link = 'https://g1.globo.com/';

   
    request.get(link, function(err, res, body) {
        if(err) console.log('Erro: '+err)
    
        var $ = cheerio.load(body);         
    
        $('.bastian-page div').each(function() {
            
            var header = $(this).find(' ._evt .feed-post .feed-post-header span').text().trim();
            var title = $(this).find('._evt .feed-post .feed-post-body-title ._evt a').text();
            var img = $(this).find(' ._evt .feed-post .feed-media-wrapper img').attr('src');
            var linkNotice = $(this).find(' ._evt .feed-post .feed-media-wrapper a').attr('href');                
            var description = $(this).find('._evt .feed-post .feed-post-body .feed-post-body-resumo').text().trim();
            var otherdescription = $(this).find('._evt .feed-post .feed-post-body .bstn-related li a').text();  
            var since = $(this).find('._evt .bastian-feed-item .feed-post .feed-post-body .feed-post-metadata .feed-post-datetime').text().trim().substring(0, 10);
            var beforeSince = $(this).find('._evt .bastian-feed-item .feed-post .feed-post-body .feed-post-metadata .feed-post-metadata-section').text().trim();
    
    
            if( since !== ''){
                console.log(`
                    \n\n Header: ${header} 
                    \n Title: ${title} 
                    \n Description: ${description} 
                    \n Image: ${img} 
                    \n Link: ${linkNotice} 
                    \n Description 2: ${otherdescription} 
                    \n ${since} - ${beforeSince}
                `);
            }
        })

    })
