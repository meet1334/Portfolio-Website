window.addEventListener("scroll",shadow);

function shadow(){
    var h=window.innerHeight/2;
    var f=document.getElementById("abc");
    var n=f.getBoundingClientRect().top
    console.log(n);
    if(n<h){
        var a=document.getElementById("DoneHtml");
        a.style.width=a.getAttribute("data-done");

        var b=document.getElementById("DoneCss");
        b.style.width=b.getAttribute("data-done");
        
        var c=document.getElementById("DoneBootstrap");
        c.style.width=c.getAttribute("data-done");
        
        var d=document.getElementById("DoneSaas");
        d.style.width=d.getAttribute("data-done");
        
        var e=document.getElementById("DoneJavascript");
        e.style.width=e.getAttribute("data-done");
        
        var f=document.getElementById("DoneReactjs");
        f.style.width=f.getAttribute("data-done");
     
    }
}

const counters = document.querySelectorAll('.counter')  
 counters.forEach(counter => {  
   counter.innerText = '0'  
   const updateCounter = () => {  
     const target = +counter.getAttribute('data-target')  
     const c = +counter.innerText  
     const increment = target / 200 
     if(c < target) {  
       counter.innerText = `${Math.ceil(c + increment)}`  
       setTimeout(updateCounter, 1)  
     } else {  
       counter.innerText = target  
     }  
   }  
   updateCounter()  
 })  