// 作者:HandsomeTB
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})

//传入一个动物对象，返回这个动物的描述HTML
function getAnimalDescHtml(animalObj, selectedTypes) {
    let type = animalObj.type;
    let name = animalObj.name;
    var html = `<p class="animal-name">${name}</p>`;
    if (!selectedTypes) {
        for (var i = 0; i < type.length; i++) {
            for (var key in animalsTypeObj) {
                if (animalsTypeObj[key].value === type[i]) {
                    html += `<p class="animal-type">${animalsTypeObj[key].typeName}</p>`;
                }
            }
        }
    } else {
        for (var i = 0; i < type.length; i++) {
            for (var key in animalsTypeObj) {
                if (animalsTypeObj[key].value === type[i]) {
                    if (selectedTypes.map((item) => { return item.value }).includes(type[i])) {
                        html += `<p class="animal-type selected">${animalsTypeObj[key].typeName}<i     class="iconfont icon-dui"></i></p>
                        `;
                    } else {
                        html += `<p class="animal-type">${animalsTypeObj[key].typeName}</p>`;
                    }
                }
            }
        }
    }
    return html;
}


var dom = {
    resultText: document.querySelector('.result-area .text'),
    resultContainer: document.querySelector('.result-area .result-container'),
    checkboxes: null,//document.querySelectorAll('input[type="checkbox"]')
    chooseContainer: document.querySelector('.choose-area'),
    fixText: document.querySelector('.result-area .text'),
    resultTtem: null,//document.querySelectorAll('.result-item')
}


function upDateChooseArea() {
    dom.chooseContainer.innerHTML = ''
    for (let arr in animalsTypeObj) {
        let html = `<div class="choose-item">
                <label>
                    <input type="checkbox" name="animals" value="${animalsTypeObj[arr].value}">
                    <span class="desc">${animalsTypeObj[arr].typeName}</span>
                </label>
            </div>`;
        dom.chooseContainer.insertAdjacentHTML('beforeend', html);
    }
    dom.checkboxes = document.querySelectorAll('input[type="checkbox"]');
}

upDateChooseArea();

function showAllAnimals() {
    let temp = [];
    for (let arr in animalsTypeObj) {
        temp.push(animalsTypeObj[arr].animalsList);
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
    let html = '';
    for (let i = 0; i < allAnimalsObj.length; i++) {
        html += `<div class="result-item ${allAnimalsObj[i].value}">
                    <div class="animal-desc">${getAnimalDescHtml(allAnimalsObj[i])}</div>
                </div>`;
    }
    dom.resultContainer.innerHTML = html;
    addResultCardEvent();
}

showAllAnimals();

function showSelectAnimals(types, animals) {
    let selectedTypeName = types.map((item) => {
        return item.typeName;
    });
    dom.resultText.innerText = `${selectedTypeName.join('、')} 共有${animals.length}个`;
    if (animals.length === 0) {
        if (types.length === dom.checkboxes.length) {
            dom.resultContainer.innerHTML = '<div class="no-result">再玩就玩坏了w(ﾟДﾟ)w</div>';
        } else {
            dom.resultContainer.innerHTML = '<div class="no-result"">没有动物符合条件！！！</div>';
        }
        return;
    }
    dom.resultContainer.innerHTML = '';
    let html = '';
    for (let i = 0; i < animals.length; i++) {
        html += `<div class="result-item ${animals[i].value}">
                    <div class="animal-desc">${getAnimalDescHtml(animals[i], types)}</div>
                </div>`;
    }
    dom.resultContainer.innerHTML = html;
    addResultCardEvent();
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
            selected.type.push(animalsTypeObj[checkbox.value]);
            selectedAnimalsArray.push(animalsTypeObj[checkbox.value].animalsList);
        } else {
            selected.type = selected.type.filter((item) => {
                return item !== animalsTypeObj[checkbox.value];
            })
            selectedAnimalsArray = selectedAnimalsArray.filter((item) => {
                return item !== animalsTypeObj[checkbox.value].animalsList;
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

function addResultCardEvent() {
    dom.resultTtem = document.querySelectorAll('.result-item');
    dom.resultTtem.forEach((item) => {
        let timer = null;
        item.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            item.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                item.classList.remove('hover');
            }, 500);
        });
    })
}