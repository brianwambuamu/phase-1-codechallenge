
function gradeConverter(){
    let studentMarks = prompt("Input Your Marks");
    // 100 - 79 > Grade A
    //78 - 60 > Grade B
    //55 - 49 > Grade C
    //48 - 40 > Grade D
    //39 - 0 > Grade E
if(studentMarks > 79){
    return `A`
}else if (studentMarks >= 60){
    return `B`
}else if (studentMarks >= 49){
    return `C`
}else if (studentMarks >= 40){
    return `D`
}else if (studentMarks <= 39){
    return `E`
}else {
    console.log("Invalid student's mark");
}
}
console.log("Student  Marks is:"+ studentMarks);
gradeConverter();