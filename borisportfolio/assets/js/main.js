const element = document.querySelector("html");
element.addEventListener('wheel',(event)=>{event.preventDefault();
    element.scrollBy({left: event.deltaY < 0 ? -300 : 300, });});

ele.scrollIntoView({ behavior: 'smooth' });