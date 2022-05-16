const calc = function() {
    let screen = document.getElementById('screen'); // ищем результат
    let a = '';
    let b = '';
    let operation = '';
    let finish = false;    
    
    let numbers = document.querySelectorAll(`[data-num]`);
    let oper = document.querySelectorAll(`[data-id]`);
    let ac = document.querySelector(`[data-ac]`);
    let equally = document.querySelector(`[data-equally]`);
    
    numbers.forEach(function(elem){
        elem.addEventListener('click', function(event){					
            if(event.target.textContent) {
                if(b === '' && operation === ''){
                    a += event.target.textContent;							
                    screen.innerText = a;
                }
                else if (a !== '' && b !== '' && finish) {
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
        operation = '';
        finish = false;
        screen.textContent = '0';
        oper.forEach(function(el){
            el.classList.remove('active')
        });
    });

    equally.addEventListener('click', function(event){
        if(event.target.textContent === '='){
            oper.forEach(function(el){
                el.classList.remove('active')
            });
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
                    a = a / b;
                    break;
                case '%':
                    a = a / '100';
                    break;
                case '+/-':
                    a = a / '-1';
                    break;
            }
            finish = true;
            screen.textContent = a;	
        }
    });
        
};
