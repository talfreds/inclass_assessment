var mopen = 0;


document.getElementById('openb').addEventListener('click',    
                                                 function(){
    document.getElementById('menu').style.left = mopen+'px';
});

document.getElementById('closeb').addEventListener('click',    
                                                 function(){
    document.getElementById('menu').style.left = '-110px';
});

document.getElementById('mbgb').addEventListener('click',    
                                                 function(){
    zoombg = document.getElementById('zoom').style.backgroundImage
    document.getElementById('bg').style.backgroundImage = zoombg;
});


document.getElementById('resetb').addEventListener('click',    
                                                 function(){
    document.getElementById('bg').style.backgroundImage = 'none';
});

document.getElementById('showappb').addEventListener('click',    
                                                 function(){
    document.getElementById('app1').style.display = 'block';
});

document.getElementById('hideappb').addEventListener('click',    
                                                 function(){
    document.getElementById('app1').style.display = 'None';
});
