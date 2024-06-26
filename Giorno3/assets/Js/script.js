const myList = document.getElementById('myList');
const newTask = document.getElementById('newTask');
const btnInsert = document.getElementById('btnInsert');
const nuovaTask = document.getElementById('nuovaTask');
const ElementiTask = [];

btnInsert.addEventListener('click' , function (e) {
e.preventDefault();
if (!control()) return;
popolateArray();
printTask();
myList.reset();

});

function control() {
    if (newTask.value === '') {
        return false
    }else {
        return true
    }
}

function popolateArray() {
    ElementiTask.push(newTask.value);
console.log(ElementiTask);
}
 
function printTask() {
nuovaTask.innerHTML = '';
for(let i = 0; i < ElementiTask.length; i++) {
    let task1 = document.createElement('p');
    task1.innerText = ElementiTask[i];
    nuovaTask.appendChild(task1);
    let Delete = document.createElement('a');
    Delete.setAttribute('type', 'a');
    Delete.setAttribute('onclick' ,`deleteItem(${i})` );
    Delete.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzklEQVR4nIWSQQrCMBREewLd6Q08iKtSKHSmCLoVdakLF55A7yDqKfQCLuspdKsHqEkXkYBKafOTgTD55D/mhySKHFJ5PtXkQQN767Z29f2lsmyugY1diix++2atgFnUVEUmmjShVZFJC35n2aDWtBbc2L4WbEajbg1eCG5MHHfc9wZKH6yAMpKkgYc3GbiLsCJv3mSy8MGXAHz2jX0KjH2Uk4FdIHkrJ5OrQPJSTs7zSeCpxiJcAcNv09Xl9lyETZr2Ffly/WkFPA3QqwMfR9hC1khyJJsAAAAASUVORK5CYII=">'
task1.appendChild(Delete);

};




   
    
}

function deleteItem(index) {
    ElementiTask.splice(index, 1);
    

    printTask();
}

 
/*let close = document.getElementsByClassName('close');
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'close';
  }
}*/

