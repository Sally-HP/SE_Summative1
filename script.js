// this function adds a new grade group
function addGrade() {
    const container = document.getElementById("inputs");

    const row = document.createElement("div");
    row.className = "graderow";

    row.innerHTML = `
        <input 
            type="number"
            class="attendeecount"
            min="1"
            placeholder="Number of attendees"
        >

        <select class="gradeselect">
            <option value="G6">G6</option>
            <option value="G7">G7</option>
            <option value="SEO">SEO</option>
            <option value="HEO">HEO</option>
            <option value="EO">EO</option>
            <option value="EA">EA</option>
        </select>
    `;

    container.appendChild(row);
}

// define salary for each grade
const gradesalary = {
    EA: 27244,
    EO: 31479,
    HEO:36000,
    SEO: 42806,
    G7: 58185,
    G6: 70854
};

// this function calculates cost with info provided
function calculate() {
    const attendeeinputs = document.querySelectorAll(".attendeecount");
    const gradeselect = document.querySelectorAll(".gradeselect");

    let total = 0;

    for (let i = 0; i <attendeeinputs.length; i++) {
        const attendees = parseInt(attendeeinputs[i].value) || 0;
        const grade = gradeselect[i].value;

        const hourlypay = gradesalary[grade]/(52*37.5)

        total += attendees * hourlypay;
    }

    document.getElementById("result").textContent = `Estimated meeting cost = £${total.toFixed(2)}`;

}

// inital page to load with one grade input field
addGrade();