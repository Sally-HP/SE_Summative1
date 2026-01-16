function calculatelogic (duration, attendees, gradeselect, gradesalary) {

    let total = 0;

    for (let i = 0; i <attendees.length; i++) {
        const attendeecount = parseInt(attendees[i]) || 0;
        const grades = gradeselect[i];
        const hourlypay = gradesalary[grades]/(52*37.5);

        total += duration * attendeecount * hourlypay;
    }
    
    return total;
}

module.exports = {calculatelogic};