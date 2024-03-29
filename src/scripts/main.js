// Challenge: Political Campaign
// Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.


// Ojbect for Elizabeth Sanger
const elizabethSanger = {
    district: "TN 4",
    platform: {
        taxes: "Taxes should be lower!",
        jobs: "We should have more jobs!",
        infrastructure: "Let's fix roads, and other things, but in an economically responsible fashion.",
        healthCare: "We need to reform the current situation to lower health care costs and make healthcare affordable for everyone.",
        crime: "Crime is bad. Like, stop breaking the law and stuff.",
    },
    donationURL: "https://givesomemoneytoelizabethsanger.org",
    biography: "Elizabeth Sanger was born on Github in the NSS class chapters. She grew up in my VS Code editor, where she currently resides.",
    missionStatement: "I endeavor to represent the needs and the will of the people.",
    registerLink: "https://election.rutherfordcountytn.gov/register.html"

}

// Obect for Events
const eventCalendar= [
    {
        month: "October",
        day: 26,
        year: 2019,
        startTime: "6:00 PM",
        endTime: "9:00 PM",
        eventName: "Picker's Creek Winery Rally!",
        location: {
            location: "Picker's Creek Winery",
            address: "1986 New Columbia Hwy",
            city: "Lewisburg",
            state: "TN",
            zip: "37091",
        }
    }

]

// Object for Volunteers
const volunteers = [
    {
        name: "Ryan Crowley",
        address: "4809 Compassion Lane, Murfreesboro, TN 37128",
        email: "ryancrowleycode@gmail.com",
        phone: "615-900-7991",
        availability: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: true,
            sunday: true,
        },
        activities: ["vocals", "guitar", "sound"],
    },
]

// Creating an object for the Image Gallery. Maybe have an array of objects, where an object will be a key (like "Headshot") and the value will be a link to the file path where that photo is?
// Image gallery
const images = {
    headshot: "../images/Elizabeth-Sanger-Headshot.png",
    familyPhoto: "../images/Elizabeth-Sanger-Family.jpg",
    constituentPhoto: "../images/Elizabeth-Sanger-Constituents.jpg"
}


