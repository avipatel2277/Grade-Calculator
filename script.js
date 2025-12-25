// Add Course Button Logic
document.getElementById("addCourseBtn").addEventListener("click", () => {
    let container = document.getElementById("gradeContainer");

    let newRow = document.createElement("div");
    newRow.classList.add("course-row");

    newRow.innerHTML = `
        <input type="text" class="course-name" placeholder="Course Name">
        <input type="number" class="course-grade" placeholder="Grade">
        <input type="number" class="course-weight" placeholder="Weight" value="1">
    `;

    container.appendChild(newRow);
});


// Main Calculation Function
const calculate = () => {
    let rows = document.querySelectorAll(".course-row");

    let totalWeightedScore = 0;
    let totalWeight = 0;

    rows.forEach(row => {
        let grade = parseFloat(row.querySelector(".course-grade").value);
        let weight = parseFloat(row.querySelector(".course-weight").value);

        if (!isNaN(grade) && !isNaN(weight) && weight > 0) {
            totalWeightedScore += grade * weight;
            totalWeight += weight * 100;
        }
    });

    if (totalWeight === 0) {
        document.querySelector("#showdata").innerHTML =
            "Please enter at least one valid grade and weight.";
        return;
    }

    let percentage = (totalWeightedScore / totalWeight) * 100;
    percentage = percentage.toFixed(2);

    let gradeLetter = "";
    if (percentage >= 80) gradeLetter = "A";
    else if (percentage >= 70) gradeLetter = "B";
    else if (percentage >= 60) gradeLetter = "C";
    else if (percentage >= 50) gradeLetter = "D";
    else gradeLetter = "F";

    let result = `Your weighted percentage is ${percentage}%<br>
    Your grade is ${gradeLetter}.`;

    if (percentage >= 50) result += " You have passed.";
    else result += " You have failed.";

    document.querySelector("#showdata").innerHTML = result;
};