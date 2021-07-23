$('#navMenuBar').click(function(){

    let sideNavId = $('#sideNavId');
    let contentOverlayId = $('#contentOverlayId');
    let menutext =  $('.menutext');

    if(sideNavId.hasClass('sideNavClose')){

        sideNavId.removeClass('sideNavClose')
        sideNavId.addClass('sideNavOpen')

        menutext.removeClass('d-none')

        contentOverlayId.removeClass('contentOverlayClose')
        contentOverlayId.addClass('contentOverlay')


    }else{
        sideNavId.removeClass('sideNavOpen')
        sideNavId.addClass('sideNavClose')

        menutext.addClass('d-none')

        contentOverlayId.removeClass('contentOverlay')
        contentOverlayId.addClass('contentOverlayClose')
        
    }

   

    
});



// overlay 

$('#contentOverlayId').click(function(){

    let sideNavId = $('#sideNavId');
    let contentOverlayId = $('#contentOverlayId');
    let menutext =  $('.menutext');

    if(sideNavId.hasClass('sideNavClose')){

        sideNavId.removeClass('sideNavClose')
        sideNavId.addClass('sideNavOpen')
        menutext.removeClass('d-none')

        contentOverlayId.removeClass('contentOverlayClose')
        contentOverlayId.addClass('contentOverlay')


    }else{
        sideNavId.removeClass('sideNavOpen')
        sideNavId.addClass('sideNavClose')
        menutext.addClass('d-none')

        contentOverlayId.removeClass('contentOverlay')
        contentOverlayId.addClass('contentOverlayClose')
        
    }

   

    
});
