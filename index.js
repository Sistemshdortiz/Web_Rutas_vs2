"use strict";

$(document).ready(function(){
    $('#opciones').change(function(){
        if($('#opciones').val() == 'R_familiar'){
            $('.opciones_de_RF').css('display','block')
            $('.opciones_de_RD').css('display','none')
            $('.opciones_de_RF').animate({left: '50%'})
            $('.opciones_de_RD').css('left','50%')
        }else{
            $('.opciones_de_RD').css('display','block')
            $('.opciones_de_RF').css('display','none')
            $('.opciones_de_RD').animate({left: '50%'})
            $('.opciones_de_RF').css('left','50%')
        }
    })
})

// $(document).ready(function(){
//     $('.menu span: img').click(function(){
//         $("#img").animate({
//             height: 'toggle'
//           });
//     })
//   })

window.addEventListener('resize', function(event){
    if(window.innerWidth < 800 || window.innerHeight < 600){
      window.resizeTo(800, 600);
    }
  });