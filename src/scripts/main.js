// Challenge: Political Campaign
// Challenges are optional exercises that you should attempt only if you've completed the practice exercises and understand the concepts.

// You have volunteered your time to a local political candidate, Elizabeth Sanger, who wants to become a US representative in Congress for your district. Unfortunately, the team discovered that you're a software developer, so they have begged you to build an application that lets them track volunteers, and store information about Elizabeth and her campaign.

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

const elizabethSangerCampaign = {
    district: "TN 4",
    platform: {
        taxes: "Taxes should be lower!",
        jobs: "We should have more jobs!",
        infrastructure: "Let's fix roads, and other things, but in an economically responsible fashion.",
        healthCare: "We need to reform the current situation to lower health care costs and make healthcare affordable for everyone.",
        crime: "Crime is bad. Like, stop breaking the law and stuff.",
    },
    donationURL: "https://givesomemoneytoelizabethsanger.org",
    eventCalendar: [
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
}

// Calendar of events

// Volunteer information
//// 1. Name
//// 2. Address
//// 3. Email
//// 4. Phone number
//// 5. Availability
//// 6. What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)

// Biography

// Image gallery
//// 1. Head shot
//// 2. Picture of family
//// 3. Picture of constituents

// Mission statement

// URL for registering to vote