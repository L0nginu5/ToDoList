let nameList = [], motivationList = [], importanceList = [], dueDateList = [];
let priorityList = [];
let buttonCount = 0;

// ボタン取得
const confirmation = document.getElementById('confirmation');
const completed1 = document.getElementById('completed1');
const completed2 = document.getElementById('completed2');
const completed3 = document.getElementById('completed3');
const completed4 = document.getElementById('completed4');
const completed5 = document.getElementById('completed5');
const completed6 = document.getElementById('completed6');

// タスク追加用のボタン処理
function addButton(){
    // リスト内要素数カウント
    buttonCount += 1


    // jsのリストに各値を追加＆テキストボックスをクリア
    // name
    nameList.push(document.getElementById("name").value);
    document.getElementById("name").value = '';
    // motivation
    let motivation = Number(document.getElementById("motivation").value);
    motivationList.push(motivation);
    document.getElementById("motivation").value = '';
    // importance
    let importance = Number(document.getElementById("importance").value);
    importanceList.push(importance);
    document.getElementById("importance").value = '';
    // dueDate
    dueDateList.push(document.getElementById("dueDate").valueAsDate);
    document.getElementById("dueDate").value = '';


    // 優先度の計算(やりたい×やるべき)
    priorityList.push(motivation*importance)    
}


// タスク一覧を表示
function taskAppered(){
    for (let i = 1;i <= 6; i++){
        document.getElementById(`task${i}`).innerText = nameList[i-1];
        document.getElementById(`priority${i}`).innerText = priorityList[i-1];
        document.getElementById(`dueDate${i}`).innerText = dueDateList[i-1];
    };
}

// 完遂時のボタン処理
function completedButton1(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(2)

    // jsのリストから完遂した各値を削除
    nameList.splice(0,1);
    priorityList.splice(0,1);
    dueDateList.splice(0,1);
}
function completedButton2(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(3)

    // jsのリストから完遂した各値を削除
    nameList.splice(1,1);
    priorityList.splice(1,1);
    dueDateList.splice(1,1);
}
function completedButton3(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(4)

    // jsのリストから完遂した各値を削除
    nameList.splice(2,1);
    priorityList.splice(2,1);
    dueDateList.splice(2,1);
}
function completedButton4(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(5)

    // jsのリストから完遂した各値を削除
    nameList.splice(3,1);
    priorityList.splice(3,1);
    dueDateList.splice(3,1);
}
function completedButton5(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(6)

    // jsのリストから完遂した各値を削除
    nameList.splice(4,1);
    priorityList.splice(4,1);
    dueDateList.splice(4,1);
}
function completedButton6(){
    // リスト内要素数カウント
    buttonCount -= 1;
    console.log(7)

    // jsのリストから完遂した各値を削除
    nameList.splice(5,1);
    priorityList.splice(5,1);
    dueDateList.splice(5,1);
}

confirmation.addEventListener('click',addButton)
confirmation.addEventListener('click',taskAppered)

completed1.addEventListener('click',completedButton1)
completed1.addEventListener('click',taskAppered)
completed2.addEventListener('click',completedButton2)
completed2.addEventListener('click',taskAppered)
completed3.addEventListener('click',completedButton3)
completed3.addEventListener('click',taskAppered)
completed4.addEventListener('click',completedButton4)
completed4.addEventListener('click',taskAppered)
completed5.addEventListener('click',completedButton5)
completed5.addEventListener('click',taskAppered)
completed6.addEventListener('click',completedButton6)
completed6.addEventListener('click',taskAppered)