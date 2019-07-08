export default function headerStates(){
    const headerWrapper = document.querySelector('.header-wrapper');
    const anchors = document.querySelectorAll('*[anchor]');
    var headerHeight = headerWrapper.getBoundingClientRect().height;
    document.addEventListener("scroll", function(){
        if(window.scrollY > 0) headerWrapper.classList.add('active');
        else if(window.scrollY <= 0) headerWrapper.className = 'header-wrapper';
        anchors.forEach(function (element){
            var size = -element.getBoundingClientRect().height + headerWrapper.getBoundingClientRect().height;
            var height;
            if(element.getAttribute('anchor') !== 'slim'){
                height = headerWrapper.getBoundingClientRect().height;
            }
            else height = headerHeight;
            if(element.getBoundingClientRect().y < height){
                if(!headerWrapper.classList.contains(element.getAttribute('anchor'))){
                    headerWrapper.classList.add(element.getAttribute('anchor'));
                }
            } else{
                headerWrapper.classList.remove(element.getAttribute('anchor'));
            }
            if(element.hasAttribute('both')){
                if(element.getBoundingClientRect().y < size){
                    headerWrapper.classList.remove(element.getAttribute('anchor'));
                }
            }
        })
    })
}