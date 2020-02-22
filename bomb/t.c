func4(arg1, arg2 = 0, arg3 = 14) {
    n = arg3 - arg2
    a = n >> 1 //L
    n = (n + a) >> 1 //A
    a = n + arg2 * 1
    if (arg1 <= a) {
        n = 0
        if (arg1 >= a) {
            return n
        } else {
            arg2 = a + 1
            ret = func4(arg1, arg2, arg3)
            return (ret + ret * 1) + 1
        }
    } else {
        arg3 = a - 1
        ret = func4(arg1, arg2, arg3)
        ret = ret * 2
        return ret
    }
}