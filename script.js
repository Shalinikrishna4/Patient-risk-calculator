// Define disease risk score ranges and preventive measures
const diseaseData = {
  Diabetes: {
    riskMin: 4,
    riskMax: 5,
    prevention: "Exercise, Diet, Monitor sugar levels",
  },
  COPD: {
    riskMin: 4,
    riskMax: 5,
    prevention: "Avoid smoking, regular checkups",
  },
  "Heart Disease": {
    riskMin: 4,
    riskMax: 5,
    prevention: "Healthy diet, regular exercise",
  },
  Hypertension: {
    riskMin: 3,
    riskMax: 4,
    prevention: "Low salt, stress management, exercise",
  },
  "Chronic Kidney Disease": {
    riskMin: 4,
    riskMax: 5,
    prevention: "Hydration, balanced diet, avoid NSAIDs",
  },
};

// Calculate Risk and Show Results
function calculateRisk() {
  const patientID = document.getElementById("patientID").value;
  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const bmi = parseFloat(document.getElementById("bmi").value);
  const diseaseName = document.getElementById("diseaseName").value;
  const multipleAdmits = document.getElementById("multipleAdmits").value;

  // Determine risk score based on disease and multiple admissions
  let riskScore =
    Math.floor(
      Math.random() *
        (diseaseData[diseaseName].riskMax - diseaseData[diseaseName].riskMin + 1)
    ) + diseaseData[diseaseName].riskMin;

  if (multipleAdmits === "Yes") {
    riskScore += 1;
  }

  if (riskScore > 5) {
    riskScore = 5;
  }

  // Get preventive measures
  const preventiveMeasures = diseaseData[diseaseName].prevention;

  // Display results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h2>📊 Risk Prediction Results:</h2>
    <p><strong>🆔 Patient ID:</strong> ${patientID}</p>
    <p><strong>⚠️ Risk Score:</strong> ${riskScore}</p>
    <p><strong>✅ Suggested Preventive Measures:</strong> ${preventiveMeasures}</p>
  `;
  resultDiv.classList.add("show");
  resultDiv.style.display = "block";
}
