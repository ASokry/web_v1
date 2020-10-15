$(function() {
    $('.carousel').each(function() {
    // Carousel Size
        var w = $(this).attr('width')
            h = $(this).attr('height')
            $(this).css({
                'width': w,
                'height': h
            })
    // HTML img -> array
        var imgSRC = []
        for (var i = 1; i <= $(this).find('img[src]').length; i++)
            imgSRC.push( $(this).find(`img:nth-child(${i})`).attr('src') )
    // BG Image & Arrows
        var content = 0
        $(this).css({
            'background-image': `url('${imgSRC[content]}')`,
            'background-position': 'center',
            'background-size': 'cover',
            'background-repeat': 'no-repeat'
        })
        if ( $(this).find('img[src]').length > 1)
            $(this).append(`
                <span class="arrowL"><</span>
                <span class="arrowR">></span>
            `)
        $(this).append(`<a href="${imgSRC[content]}" target="_blank"></a>`)
    // Next Image
        var carousel = $(this)
        setInterval(function() {
            nextImage(carousel)
        }, 1000*5)    // n seconds
        $(this).find('.arrowR').click(function() {
            nextImage( $(this).parent() )
        })
        function nextImage(elem) {
            content++
            if (content >= elem.find('img[src]').length) content = 0
            elem.css({
                'background-image': `url('${imgSRC[content]}')`,
                'background-position': 'center',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
            elem.find('a').attr({
                'href': imgSRC[content]
            })
        }
    // Previous Image
        $(this).find('.arrowL').click(function() {
            content--
            if (content < 0 ) content = $(this).parent().find('img[src]').length - 1
            $(this).parent().css({
                'background-image': `url('${imgSRC[content]}')`,
                'background-position': 'center',
                'background-size': 'cover',
                'background-repeat': 'no-repeat'
            })
            elem.find('a').attr({
                'href': imgSRC[content]
            })
        })
    })
})
