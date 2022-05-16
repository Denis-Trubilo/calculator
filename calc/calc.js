const calc = function() {
    let a = '';
    let b = '';
    let c = '';
    let operation = '';
    let finish = false; 
    let pr = false;   
    
    let screen = document.getElementById('screen');
    let numbers = document.querySelectorAll(`[data-num]`);
    let oper = document.querySelectorAll(`[data-id]`);
    let ac = document.querySelector(`[data-ac]`);
    let equally = document.querySelector(`[data-equally]`);
    let percent = document.querySelector(`[data-pr]`);
       
    numbers.forEach(function(elem){
        elem.addEventListener('click', function(event){					
            if(event.target.textContent) {
                if(b === '' && operation === ''){
                    a += event.target.textContent;							
                    screen.innerText = a;
                }
                else if (a !== '' && b !== '' && finish && !pr) {
                    b = event.target.textContent;
                    finish = false;
                    screen.innerText = b;
                }
                else {
                    b += event.target.textContent;
                    screen.innerText = b;
                }                   
                return;
            }
        });
    });
    
    oper.forEach(function(elem){
        elem.addEventListener('click', function(event){
            
            oper.forEach(function(el){
                el.classList.remove('active')
            });
            this.classList.add('active');
            if(event.target.textContent) {
                
                operation = event.target.textContent;
            }					
        })
    }) 
    
    ac.addEventListener('click', function(){
        a = '';
        b = '';
        c = '';
        operation = '';
        finish = false;
        pr = false;
        screen.textContent = '0';
        oper.forEach(function(el){
            el.classList.remove('active')
        });
    });

    percent.addEventListener('click', function(){
        if(b === '') {
            c = (+a) / 100;
        } else {
            c = (+a) * (+b) / 100;
        }
        pr = true;
        screen.textContent = c;
        return;
    })

    equally.addEventListener('click', function(event){
        if(event.target.textContent === '=' && !pr){
            switch (operation) {
                case '+':
                    a = (+a) + (+b);
                    break;
                case '-':
                    a = a - b;
                    break;
                case 'x':
                    a = a * b;
                    break;
                case '/':
                    if(b === '0'){
                        screen.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        operation = '';
                        return;
                    }
                    a = Math.ceil(a / b * 10000) / 10000;
                    break;
                case '+/-':
                    a = a / '-1';
                    break;
            }
            finish = true;
            screen.textContent = a;	
        }
        if(event.target.textContent === '=' && pr){
            switch (operation) {
                case '+':
                    a = (+a) + c;
                    break;
                case '-':
                    a = a - c;
                    break;
                case 'x':
                    a = a * c;
                    break;
                case '/':
                    if(b === '0'){
                        screen.textContent = 'Ошибка';
                        a = '';
                        b = '';
                        operation = '';
                        return;
                    } else {
                        a = Math.ceil(a / c * 10000) / 10000;
                    }
                    break;
                    
                case '+/-':
                    if(b === '') {
                        a = c / '-1';
                    } else {
                        a = a / '-1';
                    }            
                    break;
            }
            finish = true;
            screen.textContent = a;	
        }
    });
        
};
