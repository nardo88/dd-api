"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
const directory = {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    ['[']: 'х',
    [']']: 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    [';']: 'ж',
    ["'"]: 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    [',']: 'б',
    ['.']: 'ю',
};
const translate = (str) => str
    .toLowerCase()
    .split('')
    .map((i) => directory[i] || i)
    .join('');
exports.translate = translate;
//# sourceMappingURL=translate.js.map