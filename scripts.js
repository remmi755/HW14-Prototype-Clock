const Watch1 = function () {
    this.newWatch = document.createElement("div");
    this.addElement = function () {
        this.newWatch.innerHTML = this.createHhMmSsMsFormat()
        document.body.prepend(this.newWatch);
        this.newWatch.className = 'full'
        this.newWatch.addEventListener('click', this.toggles.bind(this))
    }

    this.creatAllFormats = function () {
        let date = new Date()
        this.hh = date.getHours();
        if (this.hh < 10) this.hh = '0' + this.hh;
        this.mm = date.getMinutes();
        if (this.mm < 10) this.mm = '0' + this.mm;
        this.ss = date.getSeconds();
        if (this.ss < 10) this.ss = '0' + this.ss;
        this.ms = date.getMilliseconds();
        if (this.ms < 10) this.ms = '00' + this.ms
        if (this.ms >= 10 && this.ms < 100) this.ms = '0' + this.ms
    }

    this.createHhMmSsMsFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}:${this.ss}:${this.ms}`
    }

    this.creatHhMmFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}`
    }

    this.render = function () {
        if (this.newWatch.classList.contains('full')) {
            this.newWatch.innerHTML = this.createHhMmSsMsFormat()
        } else {
            this.newWatch.innerHTML = this.creatHhMmFormat()
        }
    }

    this.startWatch = function () {
        setInterval(() => this.render(), 250);
    }

    this.toggles = function () {
        this.newWatch.classList.toggle('full')
    }
}

const WatchChild1 = function () {
    this.createHhMmSsFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}:${this.ss}`
    }

    this.creatHhMmFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}`
    }
}

const WatchChild2 = function () {
    this.createHhMmFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}`
    }

    this.creatHhMmSsMsFormat = function () {
        this.creatAllFormats()
        return `${this.hh}:${this.mm}:${this.ss}:${this.ms}`
    }
}

WatchChild1.prototype = new Watch1()

let watch1 = new Watch1()
watch1.startWatch()
watch1.addElement()

let watchChild1 = new WatchChild1()
watchChild1.startWatch()
watchChild1.addElement()

WatchChild1.prototype.render = function () {
    if (this.newWatch.classList.contains('full')) {
        this.newWatch.innerHTML = this.createHhMmSsFormat()
    } else {
        this.newWatch.innerHTML = this.creatHhMmFormat()
    }
}

WatchChild2.prototype = new Watch1()
let watchChild2 = new WatchChild2()
watchChild2.startWatch()
watchChild2.addElement()

WatchChild2.prototype.render = function () {
    if (this.newWatch.classList.contains('full')) {
        this.newWatch.innerHTML = this.createHhMmFormat()
    } else {
        this.newWatch.innerHTML = this.creatHhMmSsMsFormat()
    }
}

