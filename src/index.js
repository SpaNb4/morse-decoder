const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let n = 0;
    let q = 0;
    for (let i = 0; i < expr.length / 10; i++) {
        n += 10;
        arr[i] = expr.substring(q, n);
        q += 10;
    }
    n = 0;
    q = 0;
    let str = '';
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(/^0+/, '');
        for (let j = 0; j < arr[i].length / 2; j++) {
            n += 2;
            if (arr[i].substring(q, n) == '11') {
                str += '-';
            }
            else if (arr[i].substring(q, n) == '10') {
                str += '.';
            }
            else {
                str += ' ';
            }
            q += 2;
        }
        if (str[0] == ' ') {
            result += ' ';
        }
        else {
            result += MORSE_TABLE[str];
        }
        str = '';
        q = 0;
        n = 0;
    }
    return result;
}

module.exports = {
    decode
}