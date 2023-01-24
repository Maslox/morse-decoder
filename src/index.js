const MORSE_TABLE = {
    // Каждая буква алфавита кодируется точками (.) и тире (-)
    // 10 означает точка (.)
    // 11 означает тире (-)

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
    let str = expr.match(/.{1,10}/g);
    let str2 = '';
    let arr = [];
    let arr2 = [];
    let result = '';

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < str[i].length; j++){
            if(str[i][j] === '1'){
                arr.push(str[i].slice(j, 10));
                j = str[i].length;
            } else if(str[i][j] === '*'){
                arr.push(' ');
                j = str[i].length;
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        let a = arr[i].match(/.{1,2}/g)
        for(let j = 0; j < a.length; j++){
            if(a[j] === '10'){
                str2 += '.'
            } else if(a[j] === '11'){
                str2 += '-'
            } else {
                str2 += ' '
            }
        }
        arr2.push(str2);
        str2 = ''
    }

    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] === ' '){
            result += ' ';
        } 
        for(let key in MORSE_TABLE){
            if(arr2[i] === key){
                result += MORSE_TABLE[key];
            }
        }
    }
    return result;
}

module.exports = {
    decode
}