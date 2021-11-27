let v = performance.now();

// build the nav
let sec = document.querySelectorAll("section"),
    navItems = document.getElementById('navbar__list'),
    tog = document.getElementById('toggel');

sec.forEach(section => {
    let items = document.createElement("li"),
        link = document.createElement('a');

    items.appendChild(link);
    link.href = '#' + section.id;
    link.innerText = section.id;
    navItems.appendChild(items);
});

tog.addEventListener('click',()=>{
    nav.classList.toggle('tog');
})

for(i=0;i<navItems.children.length;i++){
    navItems.children[i].addEventListener('click',() =>{
        nav.classList.remove('tog');
    })
}

navItems.children[0].classList.add('active');

// add scrolling effect to nav items
document.addEventListener('scroll', () => {
    for(let i = 0; i<sec.length; i++){
            if(window.scrollY >= sec[i].offsetTop -50  && i != sec.length-1){

                if(window.scrollY < sec[i+1].offsetTop){

                    for(let j = 0; j<sec.length; j++){
                        if(i != j){
                            navItems.children[j].classList.remove('active');
                        }
                    }

                    navItems.children[i].classList.add('active');
                }
            }

            if(window.scrollY >= sec[i].offsetTop && i == sec.length-1){
                for(let j = 0; j<sec.length-1; j++){
                        navItems.children[j].classList.remove('active');
                }

                navItems.children[sec.length-1].classList.add('active');
            }
    }
})
//  clicking an item from the navigation menu, the link should scroll to the appropriate section
for(i = 0; i < navItems.children.length; i++){
    let s = sec[i].offsetTop;

    navItems.children[i].children[0].addEventListener('click', (ev) =>{
        ev.preventDefault();
        window.scroll({
            top : s,
            behavior : 'smooth'
        });

    },false);

}
//add active class to nav by scrolling and remove when return to orifinal position
let nav = document.querySelector('nav');

window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 50){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }   
})

/********************************************************************** */
// build work filter
let filter = document.querySelectorAll(".work-filter li"),
    work = document.querySelectorAll(".all");

    filter.forEach(el => {
        el.addEventListener('click', () => {
            filter.forEach(ele => {
                ele.classList.remove('active');
            });

            el.classList.add('active');
        })

        el.addEventListener('click', () =>{
            work.forEach(el =>{
                el.classList.remove('active');
            })
            
            document.querySelectorAll(el.getAttribute('data-filter')).forEach(el =>{
                el.classList.add('active');
            })
        })
        
    });

    let z = performance.now();

    console.log(z-v);