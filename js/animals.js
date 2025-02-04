var animalsObj = {
    niMo: { name: '尼莫', value: 'niMo' },
    siPaQi: { name: '斯帕奇', value: 'siPaQi' },
    baGong: { name: '八公', value: 'baGong' },
    luoLuo: { name: '珞珞', value: 'luoLuo' },
    maoMao: { name: '毛毛', value: 'maoMao' },
    maiKeSi: { name: '麦克斯', value: 'maiKeSi' },
    baiCaiGou: { name: '白菜狗', value: 'baiCaiGou' },
    kaTuo: { name: '卡托', value: 'kaTuo' },
    xueNuo: { name: '雪诺', value: 'xueNuo' },
    sangNi: { name: '桑尼', value: 'sangNi' },
    shanMu: { name: '山姆', value: 'shanMu' },
    haShiQi: { name: '哈士企', value: 'haShiQi' },
    luoEn: { name: '罗恩', value: 'luoEn' },
    siDaiLa: { name: '斯黛拉', value: 'siDaiLa' },
    maQiDuo: { name: '玛奇朵', value: 'maQiDuo' },
    taiGe: { name: '泰哥', value: 'taiGe' },
    jiaFei: { name: '加肥', value: 'jiaFei' },
    liWeiEr: { name: '利威尔', value: 'liWeiEr' },
    xiZi: { name: '希子', value: 'xiZi' },
    duDu: { name: '嘟嘟', value: 'duDu' },
    maNaiQi: { name: '玛奈奇', value: 'maNaiQi' },
    miaoMiao: { name: '苗苗', value: 'miaoMiao' },
    xingQiTian: { name: '星期天', value: 'xingQiTian' },
    eBa: { name: '鳄霸', value: 'eBa' },
    diBaoTian: { name: '地包天', value: 'diBaoTian' },
    waTe: { name: '瓦特', value: 'waTe' },
    tuSiKaEr: { name: '图斯卡尔', value: 'tuSiKaEr' },
    muMu: { name: '木木', value: 'muMu' },
    chuiZi: { name: '锤子', value: 'chuiZi' },
    buLuSi: { name: '布鲁斯', value: 'buLuSi' },
    ciTou: { name: '刺头', value: 'ciTou' },
    aGua: { name: '阿瓜', value: 'aGua' },
    aDai: { name: '阿呆', value: 'aDai' },
    aBao: { name: '阿宝', value: 'aBao' },
    guGu: { name: '咕咕', value: 'guGu' },
    youLuoSha: { name: '优罗莎', value: 'youLuoSha' },
    baoLi: { name: '暴莉', value: 'baoLi' },
    kaLuoTe: { name: '卡洛特', value: 'kaLuoTe' },
    peiGen: { name: '培根', value: 'peiGen' },
    baBi: { name: '芭比', value: 'baBi' },
    waLi: { name: '瓦力', value: 'waLi' },
    moSi: { name: '莫斯', value: 'moSi' },
    keDiSi: { name: '柯蒂斯', value: 'keDiSi' },
    baoBo: { name: '宝伯', value: 'baoBo' },
    xiaoXin: { name: '小新', value: 'xiaoXin' },
    keLe: { name: '可乐', value: 'keLe' },
    gaoFei: { name: '高非', value: 'gaoFei' },
    aoMuNuoMu: { name: '奥姆诺姆', value: 'aoMuNuoMu' },
    douDou: { name: '豆豆', value: 'douDou' },
    fuJi: { name: '福吉', value: 'fuJi' },
    fuBao: { name: '福宝', value: 'fuBao' },
    mieMie: { name: '咩咩', value: 'mieMie' },
    aoLi: { name: '奥里', value: 'aoLi' },
    taiLeiSi: { name: '泰雷斯', value: 'taiLeiSi' },
};

var dog = ['niMo', 'siPaQi', 'baGong', 'luoLuo', 'maoMao', 'maiKeSi', 'baiCaiGou', 'kaTuo', 'xueNuo', 'sangNi', 'shanMu', 'haShiQi', 'luoEn', 'siDaiLa'].map(value => animalsObj[value]);

var cat = ['maQiDuo', 'taiGe', 'jiaFei', 'liWeiEr', 'xiZi', 'duDu', 'maNaiQi', 'miaoMiao', 'xingQiTian'].map(value => animalsObj[value]);

var eatMeat = ['niMo', 'eBa', 'diBaoTian', 'maQiDuo', 'waTe', 'taiGe', 'siPaQi', 'tuSiKaEr', 'baGong', 'jiaFei', 'luoLuo', 'muMu', 'maoMao', 'maiKeSi', 'chuiZi', 'liWeiEr', 'buLuSi', 'xiZi', 'kaTuo', 'xueNuo', 'duDu', 'ciTou', 'sangNi', 'maNaiQi', 'shanMu', 'haShiQi', 'miaoMiao', 'xingQiTian', 'luoEn', 'siDaiLa'].map(value => animalsObj[value]);

var canDive = ['eBa', 'waTe', 'aGua', 'aDai', 'tuSiKaEr', 'chuiZi', 'buLuSi', 'aBao', 'haShiQi'].map(value => animalsObj[value]);

var eartPlants = ['kaLuoTe', 'peiGen', 'baBi', 'waLi', 'moSi', 'aGua', 'aDai', 'keDiSi', 'baiCaiGou', 'guGu', 'youLuoSha', 'baoBo', 'xiaoXin', 'keLe', 'gaoFei', 'aoMuNuoMu', 'douDou', 'fuJi', 'fuBao'].map(value => animalsObj[value]);

var canFly = ['aGua', 'aDai', 'muMu', 'guGu', 'youLuoSha', 'baoLi', 'aBao'].map(value => animalsObj[value]);

//有角
var hasHorn = ['diBaoTian', 'waLi', 'moSi', 'keDiSi', 'baoLi', 'mieMie', 'aBao'].map(value => animalsObj[value]);

var hasBigEyes = ['eBa', 'diBaoTian', 'aGua', 'muMu', 'keDiSi', 'guGu', 'aoLi', 'mieMie', 'duDu', 'aBao', 'aoMuNuoMu', 'douDou', 'haShiQi'].map(value => animalsObj[value]);

var canLayEggs = ['eBa', 'diBaoTian', 'aGua', 'aDai', 'muMu', 'keDiSi', 'chuiZi', 'guGu', 'buLuSi', 'aBao', 'douDou', 'taiLeiSi'].map(value => animalsObj[value]);

//毛茸茸
var downy = ['niMo', 'maQiDuo', 'kaLuoTe', 'waTe', 'taiGe', 'baBi', 'waLi', 'moSi', 'baGong', 'jiaFei', 'luoLuo', 'maoMao', 'maiKeSi', 'liWeiEr', 'xiZi', 'kaTuo', 'baoBo', 'mieMie', 'duDu', 'ciTou', 'keLe', 'aBao', 'gaoFei', 'maNaiQi', 'shanMu', 'fuJi', 'fuBao', 'haShiQi', 'miaoMiao', 'xingQiTian', 'luoEn', 'siDaiLa'].map(value => animalsObj[value]);

//尾巴长
var hasLongTail = ['eBa', 'diBaoTian', 'maQiDuo', 'taiGe', 'siPaQi', 'baGong', 'jiaFei', 'luoLuo', 'maoMao', 'maiKeSi', 'keDiSi', 'chuiZi', 'liWeiEr', 'guGu', 'buLuSi', 'aoLi', 'xiZi', 'kaTuo', 'xueNuo', 'duDu', 'aBao', 'maNaiQi', 'shanMu', 'fuJi', 'miaoMiao', 'xingQiTian'].map(value => animalsObj[value]);

var animalsTypeObj = {
    dog: { typeName: '犬科动物', value: 'dog', animalsList: dog },
    cat: { typeName: '猫科动物', value: 'cat', animalsList: cat },  
    eatMeat: { typeName: '吃肉的动物', value: 'eatMeat', animalsList: eatMeat },
    canDive: { typeName: '会潜水的动物', value: 'canDive', animalsList: canDive },
    canFly: { typeName: '会飞的动物', value: 'canFly', animalsList: canFly },
    eartPlants: { typeName: '吃植物的动物', value: 'eartPlants', animalsList: eartPlants },
    hasHorn: { typeName: '头上长角的动物', value: 'hasHorn', animalsList: hasHorn },
    hasBigEyes: { typeName: '眼睛大的动物', value: 'hasBigEyes', animalsList: hasBigEyes },
    canLayEggs: { typeName: '会下蛋的动物', value: 'canLayEggs', animalsList: canLayEggs },
    downy: { typeName: '毛茸茸的动物', value: 'downy', animalsList: downy },
    hasLongTail: { typeName: '尾巴长的动物', value: 'hasLongTail', animalsList: hasLongTail },
};


function addAnimalType(animalsObj) {
    function _getAnimalType(animalsObj) {
        var result = [];
        for (var key in animalsTypeObj) {
            if (animalsTypeObj[key].animalsList.indexOf(animalsObj) >= 0) {
                result.push(animalsTypeObj[key].value);
            }
        }
        return result;
    }
    for (var a in animalsObj) {
        animalsObj[a].type = _getAnimalType(animalsObj[a]);
    }
}
addAnimalType(animalsObj);

