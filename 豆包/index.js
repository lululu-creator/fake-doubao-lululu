    document.addEventListener('DOMContentLoaded', function() {  
        var hover1 = document.getElementById('hover1');  
        var tip1 = document.getElementById('tip1');  
  
        hover1.addEventListener('mouseenter', function(event) {  
            tip1.classList.remove('hidden');  
        });  
  
        hover1.addEventListener('mouseleave', function(event) {  
            tip1.classList.add('hidden');  
        });  
        var hover2 = document.getElementById('hover2');  
        var tip2 = document.getElementById('tip2');  
  
        hover2.addEventListener('mouseenter', function(event) {  
            tip2.classList.remove('hidden');  
        });  
  
        hover2.addEventListener('mouseleave', function(event) {  
            tip2.classList.add('hidden');  
        });  
        var hover3 = document.getElementById('hover3');  
        var tip3 = document.getElementById('tip3');  
  
        hover3.addEventListener('mouseenter', function(event) {  
            tip3.classList.remove('hidden');  
        });  
  
        hover3.addEventListener('mouseleave', function(event) {  
            tip3.classList.add('hidden');  
        });  
        var hover4 = document.getElementById('hover4');  
        var tip4 = document.getElementById('tip4');  
  
        hover4.addEventListener('mouseenter', function(event) {  
            tip4.classList.remove('hidden');  
        });  
  
        hover4.addEventListener('mouseleave', function(event) {  
            tip4.classList.add('hidden');  
        });  
        var daxuesheng = document.getElementById('daxuesheng');  
        var x = document.getElementById('x');  
  
        daxuesheng.addEventListener('mouseenter', function(event) {  
            x.classList.remove('hidden');  
        });  
  
        daxuesheng.addEventListener('mouseleave', function(event) {  
            x.classList.add('hidden');  
        });
        var arrow3 = document.getElementById('arrow3');  
        var arrow1 = document.getElementById('arrow1');  
        var resent = document.getElementById('resent-conversition');
        var content=document.getElementById('content');
        resent.addEventListener('click', function(event) {  
            if (!arrow1.classList.contains('hidden')) {  
                arrow1.classList.add('hidden');  
                arrow3.classList.remove('hidden'); 
                content.classList.remove('hidden');
            }  
            else {  
                arrow1.classList.remove('hidden');  
                arrow3.classList.add('hidden');  
                content.classList.add('hidden');

            }   
        });  
        var arrow4 = document.getElementById('arrow4');  
        var arrow2 = document.getElementById('arrow2');  
        var myAI = document.getElementById('myAI');
        var AI=document.getElementById('AI');
        
        myAI.addEventListener('click', function(event) {  
            if (!arrow2.classList.contains('hidden')) {  
                arrow2.classList.add('hidden');  
                arrow4.classList.remove('hidden');  
                AI.classList.remove('hidden');
            }  
            else {  
                arrow2.classList.remove('hidden');  
                arrow4.classList.add('hidden');  
                AI.classList.add('hidden');
            }   
        });  
  
        
    });  



