const nameList = [], motivationList = [], importanceList = [], dueDateList = [];
const priorities = [];
const confirmation = document.getElementById('confirmation');

function buttonClick() {
    // jsのリストに各値を追加＆テキストボックスをクリア
    // name
    nameList.push(document.getElementById("name").value);
    console.log(nameList);
    document.getElementById("name").value = '';

    // motivation
    const motivation = Number(document.getElementById("motivation").value);
    motivationList.push(motivation);
    console.log(motivationList);
    document.getElementById("motivation").value = '';

    // importance
    const importance = Number(document.getElementById("importance").value);
    importanceList.push(importance);
    console.log(importanceList);
    document.getElementById("importance").value = '';

    // dueDate dateList.push(); dateList
    dueDateList.push(document.getElementById("dueDate").valueAsDate);
    console.log(dueDateList);
    document.getElementById("dueDate").value = '';


    // 優先度の計算(やりたい×やるべき)
    priorities.push(motivation*importance)


    // タスク一覧にtasks,priorities追加
    document.getElementById("tasks").innerText = nameList;
    console.log(document.getElementById("tasks").innerText);

    document.getElementById("priorities").innerText = priorities;
    console.log(document.getElementById("priorities").innerText);

    document.getElementById("dueDates").innerText = dueDateList;
    console.log(document.getElementById("dueDates").innerText);
}

confirmation.addEventListener('click',buttonClick)

