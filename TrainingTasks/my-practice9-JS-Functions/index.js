
//Question 1:

let str_result='';
for (let i=1;i<=8;i++){
    str_result=str_result+i+" "
    console.log(str_result)


};


//Question 2:

let arrayList=[6,13,18,22,28,58,72,93,121];
let updatedList=arrayList.filter(function(EachItem){
    if ((EachItem%2)==0){
        return EachItem

    }
     
})
console.log(updatedList)



//Question 3:

let employees = [ {"id": 1121,"name":"yx","salary":75000},{"id": 1235,"name":"zy","salary":62000 },{"id": 3026,"name":"zx", "salary":32000}];
employees.forEach(function(EachItem){
    
    console.log(EachItem.id)

});

