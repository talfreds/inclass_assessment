var zoomh = 100;
var zoomw = 100;

document.getElementById('bg1b').addEventListener('click',    
                                                 function(){
    document.getElementById('ch1').style.backgroundImage = "url(imgs/i1.jpg)";
    document.getElementById('ch2').style.backgroundImage = "url(imgs/i2.jpg";
    document.getElementById('ch3').style.backgroundImage = "url(imgs/i3.jpg)";
});

    
document.getElementById('bg2b').addEventListener('click',    
                                                 function(){
    document.getElementById('ch1').style.backgroundImage = "url(imgs/i4.jpg)";
    document.getElementById('ch2').style.backgroundImage = "url(imgs/i5.jpg)";
    document.getElementById('ch3').style.backgroundImage = "url(imgs/i6.jpg)";
});


document.getElementById('bg3b').addEventListener('click',    
                                                 function(){
    document.getElementById('ch1').style.backgroundImage = "url(imgs/i7.jpg)";
    document.getElementById('ch3').style.backgroundImage = "url(imgs/i9.jpg)";
    document.getElementById('ch2').style.backgroundImage = "url(imgs/i8.jpg)";
    chclicked = 3;
});

document.getElementById('bg4b').addEventListener('click',    
                                                 function(){
    document.getElementById('ch1').style.backgroundImage = "url(imgs/i10.jpg)";
    document.getElementById('ch2').style.backgroundImage = "url(imgs/i11.jpg)";
    document.getElementById('ch3').style.backgroundImage = "url(imgs/i12.jpg)";
});

document.getElementById('ch1').addEventListener('mouseenter',    
                                                 function(){
    ch1 = document.getElementById('ch1').style.backgroundImage
    document.getElementById('zoom').style.backgroundImage = ch1;
});

document.getElementById('ch2').addEventListener('mouseenter',    
                                                 function(){
    ch2 = document.getElementById('ch2').style.backgroundImage
    document.getElementById('zoom').style.backgroundImage = ch2;
});

document.getElementById('ch3').addEventListener('mouseenter',    
                                                 function(){
    ch3 = document.getElementById('ch3').style.backgroundImage
    document.getElementById('zoom').style.backgroundImage = ch3;
});

document.getElementById('zoom').addEventListener('click',    
                                                 function(){
    document.getElementById('zoomcontrols').style.display = 'block';
});

document.getElementById('pluszoom').addEventListener('click',   
                                                 function(){
    zoomw = zoomw + 10;
    zoomh = zoomh + 7;
    
    document.getElementById('zoom').style.height = zoomh + '%';
    document.getElementById('zoom').style.width = zoomw+'%';
});

document.getElementById('minuszoom').addEventListener('click',   
                                                 function(){
    zoomw = zoomw - 10;
    zoomh = zoomh - 7;
    
    document.getElementById('zoom').style.height = zoomh + '%';
    document.getElementById('zoom').style.width = zoomw+'%';
});

document.getElementById('previousb').addEventListener('click',
                                                      function(){
    ch1bg = document.getElementById('ch1').style.backgroundImage
    console.log(ch1bg);
    bg1set = "url(\"imgs/i1.jpg\")";
    console.log(bg1set);
    bg2set = "url(\"imgs/i4.jpg\")";
    bg3set = "url(\"imgs/i7.jpg\")";
    bg4set = "url(\"imgs/i10.jpg\")";
    
    if (ch1bg == bg1set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i10.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i11.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i12.jpg)";
            
        }
    if (ch1bg == bg2set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i1.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i2.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i3.jpg)";
            
        }
    if (ch1bg == bg3set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i4.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i5.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i6.jpg)";
            
        }
    if (ch1bg == bg4set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i7.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i8.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i9.jpg)";
            
        }
}); 

document.getElementById('nextb').addEventListener('click',
                                                      function(){
    ch1bg = document.getElementById('ch1').style.backgroundImage
    console.log(ch1bg);
    bg1set = "url(\"imgs/i1.jpg\")";
    console.log(bg1set);
    bg2set = "url(\"imgs/i4.jpg\")";
    bg3set = "url(\"imgs/i7.jpg\")";
    bg4set = "url(\"imgs/i10.jpg\")";
    
    if (ch1bg == bg1set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i4.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i5.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i6.jpg)";
            
        }
    if (ch1bg == bg2set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i7.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i8.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i9.jpg)";
            
        }
    if (ch1bg == bg3set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i10.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i11.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i12.jpg)";
            
        }
    if (ch1bg == bg4set)
        {
            document.getElementById('ch1').style.backgroundImage = "url(imgs/i1.jpg)";
            document.getElementById('ch2').style.backgroundImage = "url(imgs/i2.jpg)";
            document.getElementById('ch3').style.backgroundImage = "url(imgs/i3.jpg)";
            
        }
}); 