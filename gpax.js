//2.1
function GPAX(user) {
    console.log(`${user[0]} ${user[1]}`)
    console.log(`ภาคการศึกษา : ${user[2]}/${user[3]}`);
    if (user[2] == 1) {
        return year1(user)
    } else {
        return year2(user)
    }
}

function year1(year) {
    collectCredit(year)
}

function year2(year) {

}

function collectCredit(point) {
    let collectPoint
    for (let i = 4; point.length; i++) {
        collectPoint += point[i]
        console.log(collectPoint);
    }
    return year1
}


let user1 = ['63130500020', 'ชานนท์ รักดี', 1, 2563, [],[]]
let user2 = ['63130500020', 'ชานนท์ รักดี', 2, 2563, [3, 'B+']]


console.log(GPAX(user1));