class GPAX {
    constructor(id, name, year, subject = [], grade = []) {
            this._id = id;
            this._name = name;
            this._year = year;
            this._subject = subject;
            this._grade = grade;
        }
        //2.2
    collectCredit() {
            let credit = 0
            for (let i = 0; i < this._subject.length; i++) {
                credit += this._subject[i]
            }
            return credit
        }
        //2.4
    creditCal() {
            let collectCreditCal = 0
            for (let i = 0; i < this._subject.length; i++) {
                switch (this._grade != null) {
                    case this._grade[i] == 'A':
                        collectCreditCal += this._subject[i] * 4
                        break;
                    case this._grade[i] == 'B+':
                        collectCreditCal += this._subject[i] * 3.5
                        break;
                    case this._grade[i] == 'B':
                        collectCreditCal += this._subject[i] * 3
                        break;
                    case tthis._grade[i] == 'C+':
                        collectCreditCal += this._subject[i] * 2.5
                        break;
                    case this._grade[i] == 'C':
                        collectCreditCal += this._subject[i] * 2
                        break;
                    case this._grade[i] == 'D+':
                        collectCreditCal += this._subject[i] * 1.5
                        break;
                    case this._grade[i] == 'D':
                        collectCreditCal += this._subject[i] * 1
                        break;
                    case this._grade[i] == 'F':
                        collectCreditCal += this._subject[i] * 0
                        break;
                }
                return collectCreditCal
            }

        }
        //2.5
    GPA() {
        let g = 0
        return g = this.creditCal / this.collectCredit
    }

    //2.6
    GPAX() {
        return
    }

    //2.7
    status() {
        if (GPAX() >= 2.00) {
            return 'ปกติ'
        } else if (GPAX() < 2.00) {
            return 'วิทยากัณฑ์' //เพิ่มเพราะ บางคน
        }

    }








}
let user1 = new GPAX('63130500020', 'ชานนท์ รักดี', 1, [1, 3, 3, 3, 3, 3, 1], ['B', 'B', 'B+', 'C+', 'C+', 'C+', 'A'])
let user2 = new GPAX('63130500020', 'ชานนท์ รักดี', 2, [3, 3, 3, 3, 3, 1, 1], ['B+', 'B', 'B', 'B', 'C+', 'B+', 'B'])

console.log(user1.GPA());
console.log(user2.GPA());