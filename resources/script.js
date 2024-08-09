window.addEventListener('load', ()=>{
    const select = el => document.querySelector(el);
    select('header #navToggler').addEventListener('click', ()=>{
        select('header nav ul').classList.toggle('open');
    });

    select('.faq .faqLeft').addEventListener('click', e=>{
        const target = e.target;
        if(target.tagName!=='BUTTON')return;
        const parent = target.parentNode.parentNode;
        parent.classList.toggle('active');
        const ansNum = '.faq .faqLeft .answer.'+target.className;
        const answerHeight = select(ansNum + ' p').clientHeight;
        select(ansNum).style.cssText = parent.classList.contains('active') ? 'height: '+answerHeight+'px; margin-top: 15px' : '';
    });
});