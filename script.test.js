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






    
