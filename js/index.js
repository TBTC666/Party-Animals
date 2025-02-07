// 作者:HandsomeTB
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

let z = 1;
let resetZTimer = setTimeout(() => {
    z = 1;
}, 2000);

function getItemEventListenerFn() {
    if (isMobile()) {
        return (item) => {
            let xRange = [-5, 5];
            let yRange = [-5, 5];
            let timer = null;
            let startX, startY;
            let descDiv = item.querySelector('.animal-desc');
            let descDivHight = descDiv.offsetHeight;
            item.addEventListener('touchstart', (e) => {
                e.preventDefault();
                let topDis = item.getBoundingClientRect().top;
                if (topDis - descDivHight <= 20) {
                    descDiv.classList.add('down');
                    descDiv.classList.remove('up');
                } else {
                    descDiv.classList.add('up');
                    descDiv.classList.remove('down');
                }
                item.style.setProperty('--t', `0s`);
                clearTimeout(timer);
                item.classList.add('hover');
                item.style.setProperty('--z', `${z++}`);
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                clearTimeout(resetZTimer);
                resetZTimer = setTimeout(() => {
                    z = 1;
                    dom.resultItem.forEach((d) => {
                        d.style.setProperty('--z', `0`);
                    });
                }, 2000);
            });
            item.addEventListener('touchmove', (e) => {
                e.preventDefault();
                let ry = -getRotate(yRange, e.touches[0].clientX - startX, item.offsetWidth);
                let rx = getRotate(xRange, e.touches[0].clientY - startY, item.offsetHeight);
                item.style.setProperty('--ry', `${ry}deg`);
                item.style.setProperty('--rx', `${rx}deg`);
            });
            item.addEventListener('touchend', (e) => {
                e.preventDefault()
                item.style.setProperty('--t', `1s`);
                item.style.setProperty('--ry', `0deg`);
                item.style.setProperty('--rx', `0deg`);
                timer = setTimeout(() => {
                    item.classList.remove('hover');
                }, 500);

            });
        }
    } else {
        return (item) => {
            let xRange = [-10, 10];
            let yRange = [-10, 10];
            let timer = null;
            let descDiv = item.querySelector('.animal-desc');
            let descDivHight = descDiv.offsetHeight;
            item.addEventListener('mouseenter', () => {
                let topDis = item.getBoundingClientRect().top;
                if (topDis - descDivHight <= 20) {
                    descDiv.classList.add('down');
                    descDiv.classList.remove('up');
                } else {
                    descDiv.classList.add('up');
                    descDiv.classList.remove('down');
                }
                item.style.setProperty('--t', `0s`);
                clearTimeout(timer);
                item.style.setProperty('--z', `${z++}`);
                item.classList.add('hover');
                clearTimeout(resetZTimer);
                resetZTimer = setTimeout(() => {
                    z = 1;
                    dom.resultItem.forEach((d) => {
                        d.style.setProperty('--z', `0`);
                    });
                }, 2000);
            });
            item.addEventListener('mouseleave', () => {
                item.style.setProperty('--t', `1s`);
                item.style.setProperty('--ry', `0deg`);
                item.style.setProperty('--rx', `0deg`);
                timer = setTimeout(() => {
                    item.classList.remove('hover');
                }, 500);

            });
            item.addEventListener('mousemove', (e) => {
                let { offsetX, offsetY } = e;
                let { offsetWidth, offsetHeight } = item;
                let ry = -getRotate(yRange, offsetX, offsetWidth);
                let rx = getRotate(xRange, offsetY, offsetHeight);
                item.style.setProperty('--ry', `${ry}deg`);
                item.style.setProperty('--rx', `${rx}deg`);
            });
        }
    }
}

var addResultItemEvent = getItemEventListenerFn();

window.addEventListener('resize', () => {
    addResultItemEvent = getItemEventListenerFn();
    addResultCardEvent();
});

//传入一个动物对象，返回这个动物的描述HTML
function getAnimalDescHtml(animalObj, selectedTypes) {
    let type = animalObj.type;
    let name = animalObj.name;
    let html = `<p class="animal-name">${name}</p>`;
    if (!selectedTypes) {
        for (let i = 0; i < type.length; i++) {
            for (let key in animalsTypeObj) {
                if (animalsTypeObj[key].value === type[i]) {
                    html += `<p class="animal-type">${animalsTypeObj[key].typeName}</p>`;
                }
            }
        }
    } else {
        for (let i = 0; i < type.length; i++) {
            for (let key in animalsTypeObj) {
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
};

var dom = {
    resultText: document.querySelector('.result-area .text'),
    resultContainer: document.querySelector('.result-area .result-container'),
    checkboxes: null,//document.querySelectorAll('.choose-area input[type="checkbox"]'),
    chooseContainer: document.querySelector('.choose-area'),
    fixText: document.querySelector('.result-area .text'),
    headerDiv: document.querySelector('#app>.header'),
    resultItem: null,//document.querySelectorAll('.result-item'),
    settingSwitchBtn: null,//document.querySelectorAll('.setting-btn'),
    settingBtn: document.querySelector('#app .header .more .title'),
    settingContainer: document.querySelector('#app .header .more .setting-container'),
};


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
    dom.checkboxes = document.querySelectorAll('.choose-area input[type="checkbox"]');
};

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
};

showAllAnimals();

function showSelectAnimals(types, animals) {
    let selectedTypeName = types.map((item) => {
        return item.typeName;
    });
    let html = '';
    dom.resultText.innerText = `${selectedTypeName.join('、')} 共有${animals.length}个`;
    if (animals.length === 0) {
        if (types.length === dom.checkboxes.length) {
            html = '<div class="no-result">再玩就玩坏了w(ﾟДﾟ)w</div>';
        } else {
            html = '<div class="no-result"">没有动物符合条件！！！</div>';
        }
        html += '<div class="no-find-container"><img src="img/no-find.webp"></div>';
        dom.resultContainer.innerHTML = html;
        return;
    }
    for (let i = 0; i < animals.length; i++) {
        html += `<div class="result-item ${animals[i].value}";">
                    <div class="animal-desc">${getAnimalDescHtml(animals[i], types)}</div>
                </div>`;
    }
    dom.resultContainer.innerHTML = html;
    addResultCardEvent();
};

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
};

let selected = { type: [], animals: [] };
let selectedAnimalsArray = [];

dom.checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            selected.type.push(animalsTypeObj[checkbox.value]);
            selectedAnimalsArray.push(animalsTypeObj[checkbox.value].animalsList);
        } else {
            selected.type = selected.type.filter(item => item !== animalsTypeObj[checkbox.value]);
            selectedAnimalsArray = selectedAnimalsArray.filter(item => item !== animalsTypeObj[checkbox.value].animalsList);
        }
        if (selected.type.length === 0) {
            showAllAnimals();
        } else {
            selected.animals = findCommonElements(...selectedAnimalsArray);
            showSelectAnimals(selected.type, selected.animals);
        }
    });
});

function getRotate(range, value, max) {
    return value / max * (range[1] - range[0]) + range[0];
}

//检测是否为移动端
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
};

function addResultCardEvent() {
    dom.resultItem = document.querySelectorAll('.result-item');
    dom.resultItem.forEach((item) => {
        addResultItemEvent(item);
    });
};

function addSettingBtn() {
    let html = `<div class="more">
                <span class="title">设置</span>
                <div class="setting-container">
                    <div class="setting-item">具体实现明天再说，先睡觉了w(ﾟДﾟ)w
                        <div class="desc">
                            <p class="title">背景音乐</p>
                            <p class="choose-value">已静音</p>
                        </div>
                        <div class="switch-container">
                            <input id="check" class="check" type="checkbox" />
                            <label class="switch" for="check">
                                <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
                                    <path pathLength="360" fill="none" stroke="currentColor"
                                        d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0">
                                    </path>
                                </svg>
                            </label>
                        </div>
                    </div>
                `;
    if (isMobile()) {
        html += ` <div class="setting-item">
                        <div class="desc">
                            <p class="title">触摸并滑动小动物卡片时的逻辑</p>
                            <p class="choose-value">将会优先滑动小动物卡片</p>
                            <p>仅移动端生效</p>
                        </div>
                        <div class="switch-container"><input id="check2" class="check" type="checkbox" />
                            <label class="switch" for="check2">
                                <svg viewBox="0 0 212.4992 84.4688" overflow="visible">
                                    <path pathLength="360" fill="none" stroke="currentColor"
                                        d="M 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 A 42.24 42.24 90 0 0 84.4992 42.2496 A 42.24 42.24 90 0 0 42.2496 0 A 42.24 42.24 90 0 0 0 42.2496 A 42.24 42.24 90 0 0 42.2496 84.4688 L 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 A 42.24 42.24 90 0 0 128 42.2496 A 42.24 42.24 90 0 0 170.2496 84.4688 A 42.24 42.24 90 0 0 212.4992 42.2496 A 42.24 42.24 90 0 0 170.2496 0 L 42.2496 0">
                                    </path>
                                </svg>
                            </label>
                        </div>
                    </div>`;
    }
    html += `</div>
            </div>`;
    dom.headerDiv.insertAdjacentHTML('beforeend', html);
    dom.settingSwitchBtn = document.querySelectorAll('.switch-container input[type="checkbox"]');
    let music = dom.settingSwitchBtn[0];
    let musicDesc = music.parentElement.parentElement.querySelector('.choose-value');
    music.addEventListener('change', () => {
        if (music.checked) {
            musicDesc.innerText = '正在播放';
        } else {
            musicDesc.innerText = '已静音';
        }
    });
    if (isMobile()) {
        let card = dom.settingSwitchBtn[1];
        let cardDesc = card.parentElement.parentElement.querySelector('.choose-value');
        card.addEventListener('change', () => {
            if (card.checked) {
                cardDesc.innerText = '将会优先滑动面页';
            } else {
                cardDesc.innerText = '将会优先滑动小动物卡片';
            }
        });
    }
    dom.settingBtn = document.querySelector('#app .header .more .title');
    dom.settingContainer = document.querySelector('#app .header .more .setting-container');
}

addSettingBtn();

dom.settingBtn.addEventListener('click', () => {
    if(!dom.settingContainer.classList.contains('show')){
        dom.settingContainer.classList.add('show');
    }else{
        dom.settingContainer.classList.remove('show');
    }
});