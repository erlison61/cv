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

console.log(window.pageYOffset);
const animeScroll=()=>{
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach((element)=> element.classList.toggle(animationClass, windowTop > element.offsetTop))
}

animeScroll();

if(target.length) window.addEventListener('scroll', debounce(() => animeScroll(), 200));