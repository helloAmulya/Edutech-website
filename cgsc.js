document.getElementById("role").addEventListener("change", function () {
    const role = this.value;
    document.getElementById("teacherFields").classList.add("hidden");
    document.getElementById("parentFields").classList.add("hidden");

    if (role === "Teacher") {
        document.getElementById("teacherFields").classList.remove("hidden");
    } else if (role === "Parent") {
        document.getElementById("parentFields").classList.remove("hidden");
    }
});

document.getElementById("registrationForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const data = {
        role: document.getElementById("role").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        subject: document.getElementById("subject")?.value,
        experience: document.getElementById("experience")?.value,
        childName: document.getElementById("childName")?.value,
        childAge: document.getElementById("childAge")?.value
    };

    const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);
});
