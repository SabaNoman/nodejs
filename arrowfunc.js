let students = [
    {stname: "Saba",
        subjects:[[{sn:"urdu"}, {marks:78}], [{sn:"math"}, {marks:90}]]},
    {stname: "Maria",
        subjects:[[{sn:"urdu"}, {marks:85}], [{sn:"math"}, {marks:80}]]}
]
console.log(students.map((stud)=>stud.stname, (stud)=>stud.subjects.forEach(ele=>{let [key,value]=ele}, key[0],value[0])))