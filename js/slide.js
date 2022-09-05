$(function(){

    $(".slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        utoplaySpeed: 2000,
        // infinite: true,
        speed: 500,
        
        
    });
    

    $('.img_Text_03').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //       }
        //     }
        
        //   ]
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    
    
});

// @media(min-width:768px)and (max-width:1024px){}