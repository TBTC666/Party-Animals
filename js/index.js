//整个页面阻止右键行为
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})

var dom = {
    resultText: document.querySelector('.result-area .text'),
    resultContainer: document.querySelector('.result-area .result-container'),
    // checkboxes: document.querySelectorAll('input[type="checkbox"]'),
    chooseContainer: document.querySelector('.choose-area'),
    fixText: document.querySelector('.result-area .text'),
}


function upDateChooseArea() {
    dom.chooseContainer.innerHTML = ''
    for (let arr in animals) {
        let html = `<div class="choose-item">
                <label>
                    <input type="checkbox" name="animals" value="${animals[arr].value}">
                    <span class="desc">${animals[arr].typeName}</span>
                </label>
            </div>`;
        dom.chooseContainer.insertAdjacentHTML('beforeend', html);
    }
    dom.checkboxes = document.querySelectorAll('input[type="checkbox"]');
}

upDateChooseArea();

function showAllAnimals() {
    let temp = [];
    for (let arr in animals) {
        temp.push(animals[arr].animalsList);
    }
    let allAnimalsObj = temp.reduce((acc, cur) => {
        cur.forEach((item) => {
            if (!acc.includes(item)) {
                acc.push(item);
            }
        });
        return acc;
    }, []);
    
    dom.resultText.innerText = `所有动物 共有${allAnimalsObj.length}个`;
    dom.resultContainer.innerHTML = '';
    for (let i = 0; i < allAnimalsObj.length; i++) {
        let div = document.createElement('div');
        div.classList.add('result-item');
        div.classList.add(allAnimalsObj[i].value);
        dom.resultContainer.appendChild(div);
    }
}

showAllAnimals();

function showSelectAnimals(types, animals) {
    dom.resultText.innerText = `${types.join('、')} 共有${animals.length}个`;
    if (animals.length === 0) {
        dom.resultContainer.innerHTML = '<div style="width:100%;color:#d53333">没有动物符合条件</div>';
        return;
    }
    dom.resultContainer.innerHTML = '';
    for (let i = 0; i < animals.length; i++) {
        let div = document.createElement('div');
        div.classList.add('result-item');
        div.classList.add(animals[i].value);
        dom.resultContainer.appendChild(div);
    }
}

function findCommonElements(...arrays) {
    if (arrays.length === 0) {
        return [];
    }
    let common = arrays[0];
    for (let i = 1; i < arrays.length; i++) {
        common = common.filter((item) => {
            return arrays[i].includes(item);
        });
    }
    return common;
}

let selected = { type: [], animals: [] };
let selectedAnimalsArray = [];

dom.checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selected.type.push(animals[checkbox.value].typeName);
            selectedAnimalsArray.push(animals[checkbox.value].animalsList);
        } else {
            selected.type = selected.type.filter((item) => {
                return item !== animals[checkbox.value].typeName;
            })
            selectedAnimalsArray = selectedAnimalsArray.filter((item) => {
                return item !== animals[checkbox.value].animalsList;
            })
        }
        if (selected.type.length === 0) {
            showAllAnimals();
        } else {
            selected.animals = findCommonElements(...selectedAnimalsArray);
            showSelectAnimals(selected.type, selected.animals);
        }
    });
})