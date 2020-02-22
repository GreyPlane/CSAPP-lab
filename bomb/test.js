function func4(input, arg2, arg3) {
    //count++
    //if (count >= 3) {return}
    let n = arg3 - arg2
    let a = n >>> 31
    //console.log(n)
    //console.log(arg2)
    //console.log(`SHR ${a}`)
    n = (n + a) >> 1
    a = n + arg2 * 1
    //console.log(`SAR ${n}`)
    //console.log(`$a ${a}`)
    if (a <= input) {
        n = 0
        if (a >= input) { 
            //console.log("i >= a")
            return n
        } else {
            arg2 = a + 1
            let ret = func4(input, arg2, arg3)
            return (ret + ret * 1) + 1
            //return (func4(input, arg2, arg3) * 2) + 1
        }
    } else {
        arg3 = a - 1
        let ret = func4(input, arg2, arg3)
        ret = ret * 2
        return ret
        //return (func4(input, arg2, arg3) * 2)
    }
}
function phase4() {
    if (func4(1, 0, 14) != 0) {
        console.log("boom!")
    } else {
        console.log("defused!")
    }
}

function func5(input) {
    let r13 = 0
    if (input[0] - 1 <= 5) {
        let r12d = 0
        while(r12d+1 <= 6) {
            r12d = r12d+1
            if (!(input[r13] - 1 <= 5)) {console.log("boom r13 " + r13)}
            //compare each number with 1stInput
            if (input[0] != input[r12d]) {
                let ebx = r12d
                while(ebx+1 <= 5) {
                    ebx = ebx + 1
                    if (input[0] == input[ebx]) {
                        console.log("boom r12d")
                    }
                }
                r13++
            }
        }
    } else {
        console.log("boom end")
    }
    
}
func5([2,1,3,6,5,4])
function func5_part2(input) {
    for (i of input) {
        i = 7 - i
        console.log(i)
    }
}
func5_part2([2,1,3,5,4,6])