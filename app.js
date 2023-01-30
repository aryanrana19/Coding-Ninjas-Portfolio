const toggle = document.getElementById('toggle')
const open = document.getElementById('open')
const close = document.getElementById('close')
const modal = document.getElementById('modal')
const personalBlogList = document.getElementById('personal-blog-list')
const personalModal = document.getElementById('personal-blog')
const closePersonal = document.getElementById('closeit')
const portfolioList = document.getElementById('portfolio-list')
const portfolioModal = document.getElementById('portfolio')
const closePortfolio = document.getElementById('close-portfolio')



toggle.addEventListener('click', function(){
    document.body.classList.toggle('show-nav');
})

// SHOW MODAL

open.addEventListener('click', function(){
    console.log('working open')
    modal.classList.add('show-m')
})

close.addEventListener('click', function(){
    console.log('working close')
    modal.classList.remove('show-m')
})

window.addEventListener('click', function(e){
    e.target = modal ? modal.classList.remove('show-modal') : false
})

// SHOW PERSONAL BLOG

personalBlogList.addEventListener('click', function(){
    console.log('working personal')
    personalModal.classList.add('showp')
})

closePersonal.addEventListener('click', function(){
    console.log('working close')
    personalModal.classList.remove('showp')
})

// SHOW PORTFOLIO

portfolioList.addEventListener('click', function(){
    console.log('Working Open')
    portfolioModal.classList.add('showpf')
})

closePortfolio.addEventListener('click', function(){
    console.log('Working Close')
    portfolioModal.classList.remove('showpf')
})