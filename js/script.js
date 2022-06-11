 $(document).ready(function(){ 

    function atualiza(timer) {

        setInterval(function() {

            const m_top = Math.floor((Math.random() * $('.areaGamer').height()) + 1);
            const m_left = Math.floor((Math.random() * $('.areaGamer').width()) + 1); 

            $(".bloco").css({ 'margin-top': m_top+ 'px', 'margin-left':m_left+ 'px' });

        }, timer)
        
    }

    atualiza(1000)


});