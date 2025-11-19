const loadButton = document.getElementById('loadFaculty');
const facultyContainer = document.getElementById('facultyFeedbacks');

const branchSelect = document.getElementById('branch');
const yearSelect = document.getElementById('year');
const sectionSelect = document.getElementById('section');

// ------------------ FULL FACULTY DATA WITH ALL BRANCHES ------------------
const facultyData = {
    "CSE": {   
        "1": {
            "A": [
                {subject:"Matrices & Calculus", name:"Ms. N.Varshini", profession:"Professor"},
                {subject:"Engineering Chemistry", name:"Dr. G.Bhavitej", profession:"Associate Professor"},
                {subject:"Applied Physics", name:"Dr. A.Haindavi", profession:"Professor"},
                {subject:"Programming for Problem Solving", name:"Dr. G.Gagan Sai", profession:"Assistant Professor"},
                {subject:"EC LAB", name:"Ms. G Kapoor", profession:"Lab Incharge"},
                {subject:"AP Lab", name:"Dr. B Sharma", profession:"Lab Incharge"},
                {subject:"PPS Lab", name:"Mr. E Singh", profession:"Lab Assistant"}
            ],
            "B": [
                {subject:"Matrices & Calculus", name:"Mr. Prasanth", profession:"Professor"},
                {subject:"Engineering Chemistry", name:"Dr. R.Sai Sudha", profession:"Associate Professor"},
                {subject:"Applied Physics", name:"Dr. R.Viswa Teja", profession:"Professor"},
                {subject:"Programming for Problem Solving", name:"Dr. G.Gagan Sai", profession:"Assistant Professor"},
                {subject:"EC LAB", name:"Ms. G Sharna", profession:"Lab Incharge"},
                {subject:"AP Lab", name:"Dr. B Singh", profession:"Lab Incharge"},
                {subject:"PPS Lab", name:"Mr. E Chowdary", profession:"Lab Assistant"}
            ],
            "C": [
                {subject:"Matrices & Calculus", name:"Mr. Prasanth", profession:"Professor"},
                {subject:"Engineering Chemistry", name:"Dr. R.Sai Sudha", profession:"Associate Professor"},
                {subject:"Applied Physics", name:"Dr. R.Viswa Teja", profession:"Professor"},
                {subject:"Programming for Problem Solving", name:"Dr. G.Gagan Sai", profession:"Assistant Professor"},
                {subject:"EC LAB", name:"Ms. G Sharna", profession:"Lab Incharge"},
                {subject:"AP Lab", name:"Dr. B Singh", profession:"Lab Incharge"},
                {subject:"PPS Lab", name:"Mr. E Chowdary", profession:"Lab Assistant"}
            ]
        },
        "2": {
            "A": [
                {subject:"Machine Learning", name:"Dr. A Kumar", profession:"Professor"},
                {subject:"AI", name:"Dr. B Sharma", profession:"Associate Professor"},
                {subject:"DS", name:"Dr. C Reddy", profession:"Professor"},
                {subject:"DBMS", name:"Ms. D Thomas", profession:"Assistant Professor"},
                {subject:"Python", name:"Mr. E Singh", profession:"Lecturer"},
                {subject:"AI Lab", name:"Dr. F Gupta", profession:"Lab Incharge"},
                {subject:"Python Lab", name:"Ms. G Kapoor", profession:"Lab Assistant"}
            ],
            "B": [
                {subject:"Machine Learning", name:"Dr. B Sharma", profession:"Professor"},
                {subject:"AI", name:"Dr. A Kumar", profession:"Associate Professor"},
                {subject:"DS", name:"Dr. C Reddy", profession:"Professor"},
                {subject:"DBMS", name:"Dr. F Gupta", profession:"Assistant Professor"},
                {subject:"Python", name:"Mr. E Singh", profession:"Lecturer"},
                {subject:"AI Lab", name:"Ms. D Thomas", profession:"Lab Incharge"},
                {subject:"Python Lab", name:"Ms. G Kapoor", profession:"Lab Assistant"}
            ]
        },
        "3": {
            "C": [
                {subject:"Machine Learning", name:"Ms. D Thomas", profession:"Professor"},
                {subject:"AI", name:"Dr. A Kumar", profession:"Associate Professor"},
                {subject:"DS", name:"Dr. C Reddy", profession:"Professor"},
                {subject:"DBMS", name:"Dr. F Gupta", profession:"Assistant Professor"},
                {subject:"Python", name:"Ms. G Kapoor", profession:"Lecturer"},
                {subject:"AI Lab", name:"Dr. B Sharma", profession:"Lab Incharge"},
                {subject:"Python Lab", name:"Mr. E Singh", profession:"Lab Assistant"}
            ]
        }
    },

    "ECE": {
        "1": { "A": [
            {subject:"Basic Electronics", name:"Dr. P. Venkat", profession:"Professor"},
            {subject:"Circuit Theory", name:"Ms. Harika", profession:"Assistant Professor"},
            {subject:"Physics", name:"Dr. Ramya", profession:"Professor"}
        ]}
    },
    "EEE": {
        "1": { "A": [
            {subject:"Electrical Machines", name:"Dr. K. Lokesh", profession:"Professor"},
            {subject:"Power Systems", name:"Ms. Tejaswini", profession:"Assistant Professor"}
        ]}
    },
    "MECH": {
        "1": { "A": [
            {subject:"Engineering Drawing", name:"Mr. Shiva", profession:"Assistant Professor"},
            {subject:"Thermodynamics", name:"Dr. Sandeep", profession:"Professor"}
        ]}
    },
    "CIVIL": {
        "1": { "A": [
            {subject:"Structural Engineering", name:"Dr. Ravi", profession:"Professor"},
            {subject:"Surveying", name:"Ms. Madhuri", profession:"Assistant Professor"}
        ]}
    },
    "AIML": {
        "1": { "A": [
            {subject:"Python Programming", name:"Ms. Niharika", profession:"Assistant Professor"},
            {subject:"Linear Algebra", name:"Dr. Arjun", profession:"Professor"}
        ]}
    },
    "IT": {
        "1": { "A": [
            {subject:"C Programming", name:"Mr. Kishore", profession:"Assistant Professor"},
            {subject:"Maths", name:"Dr. Sindhu", profession:"Professor"}
        ]}
    },
    "CSD": {
        "1": { "A": [
            {subject:"Web Technologies", name:"Ms. Divya", profession:"Assistant Professor"},
            {subject:"Data Structures", name:"Dr. Ranjith", profession:"Professor"}
        ]}
    }
};


// ------------------ SHOW FEEDBACK FORMS ------------------
loadButton.addEventListener('click', () => {
    const branch = branchSelect.value;
    const year = yearSelect.value;
    const section = sectionSelect.value;

    facultyContainer.innerHTML = '';

    if (facultyData[branch]?.[year]?.[section]) {
        const faculties = facultyData[branch][year][section];

        faculties.forEach((f, index) => {
            const card = document.createElement('div');
            card.classList.add('faculty-card');
            card.innerHTML = `
                <h3>${f.subject} - ${f.name} (${f.profession})</h3>
                <label>Rating</label>
                <select id="rating${index}">
                    <option value="">Select Rating</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Average</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>
                <label>Feedback</label>
                <textarea id="feedback${index}" placeholder="Enter feedback..."></textarea>
            `;
            facultyContainer.appendChild(card);
        });

        const submitBtn = document.createElement('button');
        submitBtn.textContent = "Submit All Feedbacks";
        submitBtn.addEventListener('click', submitAllFeedbacks);
        facultyContainer.appendChild(submitBtn);

    } else {
        alert("No faculty data found!");
    }
});


// ------------------ SUBMIT FEEDBACK ------------------
function submitAllFeedbacks() {
    const branch = branchSelect.value;
    const year = yearSelect.value;
    const section = sectionSelect.value;

    const faculties = facultyData[branch][year][section];
    let allFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    faculties.forEach((f, index) => {
        const rating = document.getElementById(`rating${index}`).value;
        const feedback = document.getElementById(`feedback${index}`).value;

        allFeedbacks.push({
            faculty: f.name,
            profession: f.profession,
            subject: f.subject,
            branch,
            year,
            section,
            rating,
            feedback
        });
    });

    localStorage.setItem('feedbacks', JSON.stringify(allFeedbacks));

    alert("Feedback submitted!");
    facultyContainer.innerHTML = '';
}


// ------------------ ADMIN LOGIN ------------------
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminPasswordInput = document.getElementById('adminPassword');

const adminPassword = "admin123";

adminLoginBtn.addEventListener('click', () => {
    if (adminPasswordInput.value === adminPassword) {
        const win = window.open("", "_blank");
        generateAdminReport(win);
    } else {
        alert("Incorrect Password!");
    }
});


// ------------------ ADMIN REPORT ------------------
function generateAdminReport(win) {

    const allFeedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

    const labels = allFeedbacks.map(f => `${f.faculty} (${f.subject})`);
    const ratingData = allFeedbacks.map(f => f.rating);

    win.document.write(`
        <html>
        <head>
            <title>Admin Feedback Report</title>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
        <body>
            <h1>Overall Feedback Graph</h1>
            <canvas id="feedbackChart"></canvas>

            <script>
                const ctx = document.getElementById('feedbackChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ${JSON.stringify(labels)},
                        datasets: [{
                            label: "Faculty Ratings",
                            data: ${JSON.stringify(ratingData)},
                            backgroundColor: "steelblue"
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: { ticks: { autoSkip: false } },
                            y: { beginAtZero: true, max: 5 }
                        }
                    }
                });
            </script>
        </body>
        </html>
    `);
}
