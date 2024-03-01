// Задание 1
const countUppercaseLetters = "JavaScript123.";
    let count = 0;
 
    for (let i = 0; i < countUppercaseLetters.length; i++) {
           let chr = countUppercaseLetters[i];
        if (chr >= "A" && chr <= "Z")
            ++count;
        }
 
        console.log(count);
// Задание 2
function combineStrings(N1, N2, S1, S2) {
    First = S1.slice(0, N1);
    Second = S2.slice(-N2)
    return (First + Second);
}

console.log(combineStrings(3, 2, 'Hello', 'World'));
// Задание 3
function containsSubstring(S, S0) {
    return S.includes(S0)
}

console.log(containsSubstring('Hello, World!', 'World'));
// Задание 4
function replaceSubstring(S, S1, S2) {
    S0 = S.replace(/S1/, 'S2')
    return (S0);
}

console.log(replaceSubstring('Hello, World!', 'World', 'Universe'))
