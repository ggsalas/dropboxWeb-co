import Browser from './dropbox/browser'
require('imports?$=jquery!jquery')
import 'bootstrap'
import 'bootstrap/less/bootstrap.less'
import './variables.less'

// Dropbox Browser
const ACCESS_TOKEN = 'prnzgrtU38AAAAAAAAAAE-SiM917HjJloZISMGiouOPIkzaHhzShfUz92YhwGx8N'
const ROOT_NODE = document.getElementById('root')

const browser = new Browser({access_token: ACCESS_TOKEN, root: ROOT_NODE})

browser.render({path: '/icb'})

// Calendar Slider
const CALENDAR_URL =  'https://calendar.google.com/calendar/ical/d8miajfcbt84e4on66bpcnj1r8%40group.calendar.google.com/public/basic.ics'
const CALENDAR_NODE = document.getElementById('section-calendar')

const calendar = new Calendar({calendar_url: CALENDAR_URL, root: CALENDAR_NODE})

var ical = require('ical')
, months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

ical.fromURL('http://lanyrd.com/topics/nodejs/nodejs.ics', {}, function(err, data) {
  for (var k in data){
    if (data.hasOwnProperty(k)) {
      var ev = data[k]
      console.log("Conference",
        ev.summary,
        'is in',
        ev.location,
        'on the', ev.start.getDate(), 'of', months[ev.start.getMonth()]);
    }
  }
});
