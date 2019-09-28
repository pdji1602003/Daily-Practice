// window 一經滾動即調用scrollbar function
window.onscroll = scrollBar;

function scrollBar(){
    //或許可以這麼理解：元素被捲動後距離自身頂端的pixel值，可以視為我們已經捲動的部分
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log( document.body.scrollTop);//0
    console.log(document.documentElement.scrollTop);
    /* 
    documentElement.scrollHeight: html頁面當前滾條可滑動的高度，會隨著寬度增加，而高度縮減。/
    documentElement.clientHeight:視窗當前可滑動的距離。
    height = 上述兩個相減得剩餘可滑動的距離。(為何需要將兩個相減？)
    這是因為我們作為使用者一進入一個網頁，在整個clientHeight的部分對我們而言已經是可視部分，
    我們不需要針對這個部分做滾動以閱覽內容，
    隨著我們視野往下，我們會往下滾動20px，以將視窗下20px的內容拉進視線內。
    所以在這往下的部分(也就是一開始clientHeight以下的html高度)才是我們真正可滑動的距離。
    也因此，我們才需要將document.documentElement.scrollHeight - document.documentElement.clientHeigh
    */
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    //需要針對progressBar這個用途精確解釋：progressbar會讓使用者知道自己已經滑動了內容多少%
    //被滾動的距離/整體可滑動總高* 100得到已滾動的比例  
    let scrolled = (winScroll/height) * 100;
    document.querySelector('.progress-bar').style.width = scrolled +'%';
}
