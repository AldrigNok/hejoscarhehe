$("nav a").on("click", function (event) {
    
    event.preventDefault()
    
    const href = $(this).attr("href")
    
    window.history.pushState(null, null, href)
    
    $("nav a").removeClass("sel")
    $(this).addClass("sel")
    
    $.ajax({
        url: href,
        success: function (data) {
            $("section").fadeOut(500, function() {
                const newPage = $(data).filter("section").html()
                
                
                $("section").html(newPage)
                
                
                $("section").fadeIn(500)
            })
        }
    })
    
})