class Place {
    constructor(street, city) {
        this.street = street
        this.city = city
    }
}

class date {
    constructor(month, year) {
        this.month = month
        this.year = year
    }
}

class Meeting {
    constructor(time, sefer, ketema, wer, amet) {
        this.time = time
        this.Place = new Place(sefer, ketema)
        this.date = new date(wer, amet)
    }
}

var weeklyMeeting = new Meeting("7 - 9", "4-kilo", "Addis Ababa", "February", "2023")

console.log(weeklyMeeting.time) //
console.log(weeklyMeeting.Place) //
console.log(weeklyMeeting.date) //
