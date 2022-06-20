 $(document).ready(function() { 

    var acertos = 0;
    var total = 0;

    function atualiza(timer) {

        setInterval(function() {

            const m_top = Math.floor((Math.random() * $('.areaGamer').height()) + 1);
            const m_left = Math.floor((Math.random() * $('.areaGamer').width()) + 1); 

            $(".bloco").css({ 'margin-top': m_top+ 'px', 'margin-left':m_left+ 'px' });

            $(".acertos").text(acertos)

            $(".total").text(total += 1)

        }, timer)
        
    }

    setTimeout(function() {
        $(".mascara").addClass(".ocultar")
    }, 3000)
            
    atualiza(18)

    $(".bloco.habilitar").on("click", function() {
        var bloco = $(this)
        bloco.css({"border": "1px #f00 solid"})
        bloco.find("img").attr("src", "img/mancha.png")
        bloco.removeClass("habilitar")
        setTimeout(function() {
            bloco.css({"border": "0"})
            bloco.find("img").attr("src", "img/inseto.png")
            bloco.addClass("habilitar")
            acertos += 1
        }, 50)
    })
    


});
