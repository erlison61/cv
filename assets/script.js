const getElements = (...queries) => document.querySelectorAll(...queries)

const target= getElements('[data-anime]')

const animationClass= 'animate'

const debounce =(func, wait, immediate) =>{
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

const animeScroll=()=>{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach((element)=>{
        if(windowTop > element.offsetTop){
            element.classList.add(animationClass)
        }else{
            element.classList.remove(animationClass)
        }
    })
}

animeScroll()

if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
}