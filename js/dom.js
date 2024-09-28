const loader = document.getElementById('loader')

function showloader() {

    if( loader.classList.contains('hidden')){
        loader.classList.remove('hidden')
    }
}
function hideloader() {
    loader.classList.add('hidden')

}

window.addEventListener('load', () => {
    showloader();
    setTimeout(hideloader, 2500)
})



// const dropdown = document.getElementById('accordion');

// function dropdown(){
    
//     for(i = 0; dropdown.length; i++ ){
//         dropdown[i].addEventListener('click', function(){
//             this.classList.toggle('active')
//         })
//     }
//     console.log('come and go')
// }
// dropdown()
