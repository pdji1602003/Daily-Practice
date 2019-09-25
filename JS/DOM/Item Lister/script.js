const form = document.getElementById('addForm');
// 可以試試把addEventListener attach 到一個父元素的做法
// 不是返回單一元素，而是一個Node list(類array物件)，若是想對此list上的元素增加功能，則必須loop over every element.
const deleteBtn = document.querySelectorAll('.delete');
const filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
// 先將node list轉成array，才能loop over every element
// forEach已經可以用在Nodelist上了，但我們還是必須具備Nodelist != Array的觀念
deleteBtn.forEach(btn => {
    btn.addEventListener('click', deleteItem);
});
filter.addEventListener('keyup', filterItem);


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*   
新增Add items 功能
先一一條列出步驟 ==>

1. 監聽form submit function，並觸發相應function addItem
2. function addItem 該是取得input裡的值
3. 取得該值並把值推到 list 裡
    1. 新增list item element
    2. 新增textnode
*/
function addItem(e) {
    e.preventDefault();
    // 取得input的value，該value會以文本型式呈現
    let inputValue = document.querySelector('[data-input-box]').value;
    let list = document.getElementById('items');
    //let listItem = list.createElement('li'); 要以document.createElement();
    let listItem = document.createElement('li');

    /* 
    將創建的list item添加上既有的class name，
    這邊要注意的是className是屬性，所以要以assign value的方式，而不是將它視為method
    */
    //listItem.className('list-group-item'); -->沒有這種method
    listItem.className = 'list-group-item';

    //把抓取到的value塞進list item裡
    let text = document.createTextNode(inputValue);
    listItem.appendChild(text);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    let deleteText = document.createTextNode('X');

    deleteBtn.appendChild(deleteText);
    /* 
    需要替動態生成的deleteBtn加上deleteItem function，不然不會有這個function  <!important> 
    我覺得或許可以這麼理解，生成btn的code是活在這個function裡，但deleteItem這功能是寫在另一個code block裡，
    若你沒有透過deleteBtn.onclick = deleteItem;明確告知button們，嘿，我在其他code block裡幫你新增功能囉，
    動態生成button們怎麼可能自己知道本身具有那個功能呢？
    */
    deleteBtn.onclick = deleteItem;

    listItem.appendChild(deleteBtn);

    // 將包含text value的list item塞進去 list裡
    list.appendChild(listItem);

    // 將值變成空字串是使用asign value的"="，而不是嚴格相等的"==="
    document.querySelector('[data-input-box]').value = '';

}

////////////////////////////////////////////////////////////////////////////////////////////////////////

function deleteItem(e) {
    if (confirm('Are you sure?')) {
        // e.target =>事件作用的目標，在這邊即指button
        // e.target.parentElement =>listItem
        e.target.parentElement.remove();
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 
    filter功能拆解：
    1. 取得search box的值
    2. 取得list item的值
    3. 比對兩值是否相同(使用array.filter()?) 判斷式
    4. 不同的將display設為none
*/

//solution 1
function filterItem(e) {
    let inputText = document.getElementById('filter').value;
    inputText = inputText.toLowerCase();


    let listItems = document.querySelectorAll('.list-group-item');
    listItems.forEach(function (item) {
        // 針對listItems裡個每個項目，進行將其textContent assign給itemText的操作
        let itemText = item.firstChild.textContent;
        itemText = itemText.toLocaleLowerCase();
        // 不可以使用這種相等值比較，因為你的監聽事件是keyup，表示你是針對你每打一次的值(比方說"i"tem去跟item進行比較，所以不管你怎麼比，都只能拿單一值去跟完整值進行比較)
        if (inputText != itemText) { //因為inputText 永遠不等同於itemText，永遠運行if裡的code，else的code不會跑到
            console.log(inputText, itemText);
            console.log(inputText != itemText);
            item.style.display = 'block';
        } else {
            console.log(inputText, itemText);
            item.style.display = 'none';
        }

        if (itemText.toLocaleLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

//solution 2
function filterItem(e) {
    let text = e.target.value.toLowerCase();
    console.log(text);
    let listItems = document.querySelectorAll('.list-group-item');
    // 我卡在forEach這邊，不太明白要怎麼針對array裡的個別元素進行特定操作
    Array.from(listItems).forEach(item => {
        let itemText = item.firstChild.textContent;
        // 使用indexOf檢查！
        if (itemText.toLocaleLowerCase().includes(text) == true) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}


//filter功能：將string都轉換成小寫再進行確認
// if (itemText.toLowerCase().indexOf(text) != -1) {
//     //若有包含搜尋的字眼
//     item.style.display = 'block';
// } else {
//      //不包含搜尋的字眼
//     item.style.display = 'none';
// }

// // filter功能：檢查itemText裡是否包含text字眼
// if (itemText.toLocaleLowerCase().includes(text) == true) {
//     item.style.display = 'block';
// } else {
//     item.style.display = 'none';
// }