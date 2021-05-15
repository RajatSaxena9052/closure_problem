function cacheFunction(callBack) {
    if (callBack == undefined) {
        return {}
    } else {
        const object = {}
        function invokingCallBack() {
            let exist = [...arguments];
            if (object[exist] != undefined) {
                return object[exist]
            } else {
                object[exist] = exist
                return callBack()
            }
        }
        return invokingCallBack
    }
}
module.exports = cacheFunction;