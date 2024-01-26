
window.addEventListener("DOMContentLoaded", async function() {
    //bootstrap init
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    if(popoverTriggerList){
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
    }
    //clipboard init
    // new ClipboardJS('.btn-clipboard');
    
    
});
