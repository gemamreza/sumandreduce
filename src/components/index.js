

// function add(input, penambah){
    // var a = 0;
    // var result = input + penambah
    // if(result > 12){
    //     a = result % 12
    //     return month.urut[a]
    // } else {
    //     return month.urut[result]
    // }
    // switch(result){
    //     case result:
    //         a = result % 12
    //         return month.urut[a];
    //     default :
    //         return month.urut[result]
    // }
//     var a = 12
//     var result = (input + penambah)%12;
//     switch(result){
//         case 0 :
//             return month.urut[a];
//         default :
//             return month.urut[result]
//     }
// }

// console.log(add(3,15))

var month = {
    urut : {
        1 : "January",
        2 : "February",
        3 : "March",
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December"
    }
} 

function reduce(input, pengurang){
    var result = Math.abs(input - pengurang)
    var a= 0
    var one = (pengurang < input)
    var two = (pengurang > input && result < 12)
    var three = (pengurang > input && result > 12)
    // if(pengurang < input && pengurang < 12){
    //     return month.urut[result]
    // } else if(pengurang == 12){
    //     return month.urut[input]
    //}else if(pengurang > input && result < 12){
    //     return month.urut[12 - result]
    // } else if(pengurang > input && result > 12){
    //     a = (result % 12 )
    //     return month.urut[12 - a]
    // }
    switch(true){
        case one :
            return month.urut[result]
        case two:
            return month.urut[12 - result];
        case three:
            a = result % 12
            return month.urut[12 - a];
        default:
            return month.urut[input]
    }

}

console.log(reduce(11,54))


