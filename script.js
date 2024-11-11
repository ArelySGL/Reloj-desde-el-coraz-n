document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bloodType = document.getElementById('bloodType').value;
    const allergies = document.getElementById('allergies').value;
    const contact = document.getElementById('contact').value;
    const medicalConditions = document.getElementById('medicalConditions').value;
    const currentMedications = document.getElementById('currentMedications').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const surgeries = document.getElementById('surgeries').value;
    const transfusions = document.getElementById('transfusions').value;

    const uniqueId = generateUniqueId();
    const recordItem = `ID: ${uniqueId}, Nombre: ${name}, Edad: ${age}, Tipo de Sangre: ${bloodType}, Alergias: ${allergies}, Contacto: ${contact}, Condiciones: ${medicalConditions}, Medicamentos: ${currentMedications}, Peso: ${weight}, Altura: ${height}, Cirugías: ${surgeries}, Transfusiones: ${transfusions}`;

    const recordList = document.getElementById('recordList');
    const listItem = document.createElement('li');
    listItem.textContent = recordItem;
    recordList.appendChild(listItem);

    document.getElementById('healthForm').reset();
});

function generateUniqueId() {
    return 'ID-' + Math.floor(Math.random() * 1000000);
}
