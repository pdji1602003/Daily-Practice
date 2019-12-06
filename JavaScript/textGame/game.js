/*
1.點擊選項按鈕==> 
textElement內容會改變
按鈕內容、數量也會改變
 */
const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');



//state是用來幹嘛的呢？這是用let聲明的變量，代表其數值之後會再更改
let state = {};

function startGame(){
  //debugger 使用debugger去看一個每function到底在做什麼
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex){
  /*
  array是一群兄弟，他們擁有共同的侍僕，侍僕們個個具備奇怪的個性，
  其中一位名為find。*/
  
  const textNode = textNodes.find(textNode => //textNodes的每個元素們都是object
    /*
    找到滿足以下條件的第一個textNode，條件可任意。
    比方説若我想使用者點擊網頁進後來，看到的第一段text是'You venture forth...'
    我可以將條件改為textNode.options[0].nextText === textNodeIndex(3) 
    */
    textNode.id === textNodeIndex);
    
    //從textNodes裡找尋符合id是1的元素並返回，
    //取用id是1元素的text
    textElement.innerText = textNode.text;


    /* 1.
    一開始怎麼也看不明白，為何while(condition)可以接受optionButtonsElement.firstChild為condition，
    let result = optionButtonsElement.firstChild;
    console.log(result)不會等於true啊
    結果再次去看了文檔，while的condition可以是任何表达式或变量都可以是循环条件，而不仅仅是比较。
    while會对它们进行计算，并将其结果转化为布尔值。
    
    換句話說，只要condition尚未是falsy值，code block裡的code都會被執行。(直到condition裡的值變成falsy)
    *備註：這可能是跟for...loop比較不一樣的地方。(for...loop裡通常使用比較，而while是將真值假值作為condition)
    在以下這個例子中，optionElement.firstChild取得的值不是button.btn就是text，他們都不是falsy value，
    因此optio...Element.removeChild會一直移除，直到將所有的孩子們都清除。
    都清除的狀況之下，optionButtonsElement.firstChild會變成null，表示沒有取得任何東西。
    null是falsy value，條件為假，while循環結束。
    */

    /* 2.
    順帶一提，optionButtonsElement之所以要清除小孩們，
    是因為使用者點按後，需要將所有按鈕清除，再生成符合使用使用者選擇的按扭。
    這邊使用的是firstChild才可以清除element以及文本本身。
    */
    while(optionButtonsElement.firstChild){
      optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }
    //當下面showOption(option)返回真值時，if條件語句就會運行，button就會被創造。
    textNode.options.forEach(option => {
      if(showOption(option)){
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () =>selectOption(option));
        optionButtonsElement.appendChild(button);
      }
    })
}

/*
是真值的條件是什麼？先想一下再什麼情況不用產生button
*/
function showOption(option) {
  // console.log(option.requiredState == null || option.requiredState(state)); 返回值為true
  return option.requiredState == null || option.requiredState(state)//或運算尋找第一個真值
}


function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

// 任何文本在網頁裡都被視為是textNode
// 將此頁面需要用到的全部text都以array存進這個textNodes變量

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true }, //我猜，這是指使用者目前透過選項所獲取到的物品，true表示使用者目前擁有blueGoo
        nextText: 2 //指向下一個text的id
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,//檢查使用者目前是否有blueGoo?
        setState: { blueGoo: false, sword: true },//使用者目前沒有blueGoo，但有sword
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerour looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4 
      },
      {
        text: 'Fine a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep, the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

//畫面一load進來，即調用startGame()，讓畫面已經存在遊戲文字
startGame()

//game.js:54 Uncaught ReferenceError: Cannot access 'textNodes' before initialization
/* 若試圖在cost textNodes被聲明之前取值，若跑出以上那段錯誤，直譯就是
無法在初始化前取得textNodes，可是textNodes明明就有在game:21被使用了啊？為何會這樣？
*/
console.log(textNodes[0].id);

console.log(textNodes[1].options[1].requiredState);
