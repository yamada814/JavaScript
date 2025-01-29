timer = {
    _time: 60_000,
    setTime(time) {
        this._time = time;
    },
    start() {
        const intervalID = setInterval(() => {
            console.log()
        },1000)
    }
}