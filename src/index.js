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
    '**********': ' ',
};

function decode(expr) {
    let morsecode1 = expr.match(/.{1,10}/g);
    let stringmorsecode1 = morsecode1.toString();
    let morsecode2 =stringmorsecode1.replace(/00/g, '');
    let morsecode3 = morsecode2.replace(/11/g, '-');
    let morsecode4 = morsecode3.replace(/10/g, '.');
    let morsearray = morsecode4.split(',');
    let result = morsearray.map(character => MORSE_TABLE[character]).join('')
    return result;
}

module.exports = {
    decode
}