function limitFunctionCount(callBack, n) {
    if (callBack == undefined || n == undefined) {
        return null;
    } else {
        let counter = 0

        function invokingCallBack() {
            if (n > counter) {
                counter++
                return callBack(counter)
            }
            else { return null }
        }

        return invokingCallBack
    }

}
module.exports = limitFunctionCount;