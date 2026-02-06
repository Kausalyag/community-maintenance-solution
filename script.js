document.getElementById("complaintForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let location = document.getElementById("location").value;
  let complaint = document.getElementById("complaint").value;

  let data = {
    name: name,
    location: location,
    complaint: complaint,
    status: "Pending"
  };

  localStorage.setItem("complaintData", JSON.stringify(data));

  alert("Complaint submitted successfully!");

  document.getElementById("complaintForm").reset();
});
