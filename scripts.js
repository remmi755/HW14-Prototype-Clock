let Watch = function (elem) {
    this.elem = 'elem'
    this.newWatch = document.createElement(elem);
}
Watch.prototype.addElement = function () {
    this.newWatch.innerHTML = this.createHhMmSsMsFormat()
    document.body.prepend(this.newWatch);
    this.newWatch.className = 'full'
    this.newWatch.classList.add('styles')
    this.newWatch.addEventListener('click', this.toggles.bind(this))
}

Watch.prototype.creatAllFormats = function () {
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

Watch.prototype.createHhMmSsMsFormat = function () {
    this.creatAllFormats()
    return `${this.hh}:${this.mm}:${this.ss}:${this.ms}`
}

Watch.prototype.createHhMmSsFormat = function () {
    this.creatAllFormats()
    return `${this.hh}:${this.mm}:${this.ss}`
}

Watch.prototype.creatHhMmFormat = function () {
    this.creatAllFormats()
    return `${this.hh}:${this.mm}`
}

Watch.prototype.render = function () {
    if (this.newWatch.classList.contains('full')) {
        this.newWatch.innerHTML = this.createHhMmSsMsFormat()
    } else {
        this.newWatch.innerHTML = this.creatHhMmFormat()
    }
}

Watch.prototype.startWatch = function () {
    setInterval(() => this.render(), 250);
}

Watch.prototype.toggles = function () {
    this.newWatch.classList.toggle('full')
}

let watch = new Watch('div')
console.log(watch)
watch.startWatch()
watch.addElement()

let WatchChild1 = function (elem) {
    Watch.call(this, elem)
}

WatchChild1.prototype = Object.create(Watch.prototype);

WatchChild1.prototype.render = function () {
    if (this.newWatch.classList.contains('full')) {
        this.newWatch.innerHTML = this.createHhMmSsFormat()
    } else {
        this.newWatch.innerHTML = this.creatHhMmFormat()
    }
}

let watchChild1 = new WatchChild1('div')
watchChild1.startWatch()
watchChild1.addElement()

let WatchChild2 = function (elem) {
    Watch.call(this, elem)
}

WatchChild2.prototype = Object.create(Watch.prototype);

WatchChild2.prototype.render = function () {
    if (this.newWatch.classList.contains('full')) {
        this.newWatch.innerHTML = this.creatHhMmFormat()
    } else {
        this.newWatch.innerHTML = this.createHhMmSsMsFormat()
    }
}

let watchChild2 = new WatchChild2('span')
watchChild2.startWatch()
watchChild2.addElement()


