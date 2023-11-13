var navlink = document.querySelectorAll ('header ul li a');
var section = document.querySelectorAll('section')

window.onscroll=()=>{
    section.forEach(sec=>{
        var top =window.scrollY;
        var offset=sec.offsetTop-200;
        var height =sec.offsetHeight ;
        var id= sec.getAttribute("id");
        if (top>offset && top<offset+height){
            navlink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header ul li a[href*='+id+']').classList.add('active');
            })
        }

    })
}