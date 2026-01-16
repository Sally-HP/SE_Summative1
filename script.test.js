// imports function from js script
let addattendee;
    
// creates test of add attendee function
describe("addattendee", () => {
    beforeEach(() => {
        document.body.innerHTML = `<div id="sec-row"></div>`;
        addattendee = require('./script').addattendee;
    });

    test("should add new attendee row when button clicked", () => {
        addattendee();

        const row = document.querySelector(".second-row");
        const attendee = row.querySelector(".attendeecount");
        const grade = row.querySelector(".gradeselect");
        const btn = row.querySelector(".addbtn");

        expect(row).not.toBeNull();
        expect(attendee).not.toBeNull();
        expect(grade).not.toBeNull();
        expect(btn).not.toBeNull();

    });
});

const gradesalary = {
    EA: 27244,
    EO: 31479,
    HEO: 36000,
    SEO: 42806,
    G7: 58185,
    G6: 70854};

// export calculation logic and test for single attendee row
const { calculatelogic } = require("./cost-calc-logic.js");

describe("calculate", () => {

    test("should calculate cost for each grade group independently", () => {
        const result = calculatelogic(
            2, // meeting duration
            [3], // attendees
            ["HEO"], //employee grade
            gradesalary
        ); 

        const hourly = 36000 / (52 * 37.5);
        expect(result).toBeCloseTo(3 * hourly * 2);
    });
});

// test for multiple attendee rows
describe("calculate", () => {

    test("should calculate cost for each grade group independently first then calculate total across all attendees", () => {
        const result = calculatelogic(
            2, // meeting duration
            [3, 5, 6], // attendees
            ["HEO", "G7", "EO"], //employee grade
            gradesalary
        ); 

        const hourlyHEO = 36000 / (52 * 37.5);
        const hourlyG7 = 58185 / (52 * 37.5);
        const hourlyEO = 31479 / (52 * 37.5);

        expect(result).toBeCloseTo(2 * (hourlyHEO * 3 + hourlyG7 * 5 + hourlyEO * 6));
    });
});

