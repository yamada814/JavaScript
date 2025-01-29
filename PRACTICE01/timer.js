const timer = {
    _time: 60_000, // 単位：ミリ秒
    setTime: function(time){
        this._time = time;
    },
    getTime: function(){
        return this._time;
    },
    start: function(){
        const myThis = this;
        const intervalId = setInterval(
            function(){
                console.log("残り時間：" + myThis._time/1_000 + "秒");
                if(myThis._time <= 0){
                    clearInterval(intervalId);
                }
                myThis._time -= 1_000;
            }
        , 1_000)
    }
}
timer.setTime(10_000)
// console.log(timer.getTime())
timer.start();