let valores = [5, 8, 9, 3, 5, 1]

/*
num.push(4)
num.sort()
console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(num[0])
*/
/*
valores.sort()
for (let pos=0; pos < valores.length; pos++) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores ) {
    console.log(valores)
    let pos = valores.indexOf(1)
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

