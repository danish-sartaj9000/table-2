
// // alert("Hello to the Page")
// // confirm("Do you want to proceed?")

const a = prompt("Enter the Number and get the table")
for(let i = a; i <= 20; i++){
    for(let k = 1;k <= 10; k++){
        result = i * k
        document.write  (`${i} x  ${k}  = ${result} <br>`)
    }
    document.write("<br>")
}