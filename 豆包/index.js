function login() {  
    const username = document.getElementById('username').value;  
    const password = document.getElementById('password').value;  
    const correctUsername = localStorage.getItem('Rusername');  
    const correctPassword = localStorage.getItem('Rpassword');
    var container = document.querySelector('.container');  
    var loginC = document.querySelector('.login-container');  
    var container = document.querySelector('.container');  
    var loginC=document.querySelector('.login-container');
    if (username === correctUsername && password === correctPassword) {  
              container.style.display = 'flex'; 
              loginC.style.display='none';
    } 
    else {  
        alert('用户名或密码错误');  
    }  
}  
    var loginC=document.querySelector('.login-container');
    var registerC=document.getElementById('hidden');
function register() {  
        const Rusername = document.getElementById('R-username').value;  
        const Rpassword = document.getElementById('R-password').value;    
        const captcha ='20061004';
        const Rcaptcha = document.getElementById('R-captcha').value;  
    if(Rcaptcha===captcha){
        localStorage.setItem('Rusername', Rusername);  
        localStorage.setItem('Rpassword', Rpassword); 
        alert('注册成功！请登录。');    
        loginC.style.display='block';
        registerC.style.display='none';
    }
    else{
        alert('验证码错误');
    }
    }
    
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
  
        x.addEventListener('mouseleave', function(event) {  
            x.classList.add('hidden');  
        });
        x.addEventListener('mouseenter', function(event) {  
            x.classList.remove('hidden');  
        });  
  
        daxuesheng.addEventListener('mouseleave', function(event) {  
            x.classList.add('hidden');  
        });
        const arrow3 = document.getElementById('arrow3');  
        const arrow1 = document.getElementById('arrow1');  
        var resent = document.getElementById('resent-conversition-name');
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
        var myAI = document.getElementById('my-AI-name');
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
    x.addEventListener('click', function(event) {
    daxuesheng.style.display = 'none';
    x.style.display = 'none';

    });
      var xx = document.getElementById('xx');
      var sheetsvg=document.getElementById('sheetsvg');
      xx.addEventListener('click', function(event) {
        sheetsvg.style.display = 'none';
    
      });
      var myInput = document.getElementById('myInput');  
      var realSendButton = document.getElementById('real-send-button');  
  
    myInput.addEventListener('input', function() {  
    if (myInput.value.trim() !== '') {  
        realSendButton.disabled = false;  
    } else {  
        realSendButton.disabled = true;  
    }  
    });
     var register=document.getElementById('register');
     var loginC=document.querySelector('.login-container');
     var registerC=document.querySelector('.register-container');
     register.addEventListener('click', function(event) {
        loginC.style.display = 'none';
        registerC.style.display='block';
      });
      var login=document.getElementById('login');
      login.addEventListener('click', function(event) {
         registerC.style.display = 'none';
         loginC.style.display='block';
       });
       //搜索
       var chatWindow = document.getElementById('chatWindow');    
       var needHidden=document.getElementsByClassName('right-zhongjian');
       realSendButton.addEventListener('click', function(event) {  
        event.preventDefault();
        for (var i = 0; i < needHidden.length; i++) {  
            needHidden[i].style.display = 'none';  
        }  
            chatWindow.style.display = 'block';  
        });


    const contentA1=document.getElementById('content-a1');
    const contentA2=document.getElementById('content-a2');
    const contentA3=document.getElementById('content-a3');
    const content1=document.getElementById('content1');
    const content2=document.getElementById('content2');
    const content3=document.getElementById('content3');
    content1.addEventListener('click', function(event) {
        content1.style.backgroundColor='white';
        for (var i = 0; i < needHidden.length; i++) {  
            needHidden[i].style.display = 'none';  
        }  
        contentA1.style.display='block';
        if(chatWindow){
            chatWindow.style.display='none';
        }
        if(contentA2){
            contentA2.style.display='none';
        }
        if(contentA3){
            contentA3.style.display='none';
        }
      });
      content2.addEventListener('click', function(event) {
        content2.style.backgroundColor='white';
        for (var i = 0; i < needHidden.length; i++) {  
            needHidden[i].style.display = 'none';  
        }  
        contentA2.style.display='block';
        if(chatWindow){
            chatWindow.style.display='none';
        }
        if(contentA1){
            contentA1.style.display='none';
        }
        if(contentA3){
            contentA3.style.display='none';
        }
      });
      content3.addEventListener('click', function(event) {
        content3.style.backgroundColor='white';
        for (var i = 0; i < needHidden.length; i++) {  
            needHidden[i].style.display = 'none';  
        }  
        contentA3.style.display='block';
        if(chatWindow){
            chatWindow.style.display='none';
        }
        if(contentA2){
            contentA2.style.display='none';
        }
        if(contentA1){
            contentA1.style.display='none';
        }
      });
      document.getElementById('real-send-button').addEventListener('click', function() {  
        const input = document.getElementById('myInput');  
        const messages = document.getElementById('messages');  
        const userMessage = document.createElement('div');  
        const contentContainer = document.getElementById('content-container');  
        if (messages.children.length === 0) {  
            const newContent = document.createElement('div');  
            newContent.classList.add('content1');  
            newContent.style.backgroundColor='white';
            newContent.textContent = '新对话';  
            contentContainer.appendChild(newContent);  
            arrow1.classList.add('hidden');  
            arrow3.classList.remove('hidden'); 
            content.classList.remove('hidden');
            
            if(contentA3){
                contentA3.style.display='none';
            }
            if(contentA2){
                contentA2.style.display='none';
            }
            if(contentA1){
                contentA1.style.display='none';
            }
        }  
        userMessage.classList.add('message', 'user-message');  
        userMessage.textContent = input.value;  
        messages.appendChild(userMessage);  
        const botMessage = document.createElement('div');  
        botMessage.classList.add('message', 'bot-message');  
        botMessage.textContent = 'AI回复: ' + '您输入了: ' + input.value ;  
        messages.appendChild(botMessage);  
        input.value = '';  
        this.disabled = true;  
        // 滚动到底部  
        messages.scrollTop = messages.scrollHeight;  

    });
    var addConversitions = document.getElementsByClassName('add-conversition');  
    for (var j = 0; j < addConversitions.length; j++) {  
        addConversitions[j].addEventListener('click', function(event) {  
            for (var i = 0; i < needHidden.length; i++) {  
                needHidden[i].style.display = 'block';  
            }  
            chatWindow.style.display = 'none';  
            if(contentA3){
                contentA3.style.display='none';
            }
            if(contentA2){
                contentA2.style.display='none';
            }
            if(contentA1){
                contentA1.style.display='none';
            }
        });  
    }  

    //API
});

    



