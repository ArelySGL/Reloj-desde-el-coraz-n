document.getElementById('doctorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const doctorId = document.getElementById('doctorId').value;
    const patientId = document.getElementById('patientId').value;

    // Verificar ID del médico (esto es un ejemplo, en una app real deberías validar)
    if (doctorId === 'medico123') { // Cambia esto por tu lógica de validación real
        logAccess(doctorId);
        loadHealthRecord(patientId);
    } else {
        alert('ID de médico no válido.');
    }
});

function logAccess(doctorId) {
    const timestamp = new Date().toLocaleString();
    console.log(`El médico con ID ${doctorId} accedió a la información el ${timestamp}`);
    // Aquí puedes almacenar el acceso en un backend o una base de datos
}

function loadHealthRecord(patientId) {
    // Simulación de datos de registros de salud
    const records = [
        { id: 'ID-123', name: 'Juan Pérez', bloodType: 'O+', allergies: 'Ninguna' },
        { id: 'ID-456', name: 'María López', bloodType: 'A-', allergies: 'Polen' },
    ];

    const patientRecord = document.getElementById('patientRecord');
    patientRecord.innerHTML = ''; // Limpiar el registro anterior

    const record = records.find(r => r.id === patientId);
    if (record) {
        patientRecord.innerHTML = `
            <strong>ID:</strong> ${record.id}<br>
            <strong>Nombre:</strong> ${record.name}<br>
            <strong>Tipo de Sangre:</strong> ${record.bloodType}<br>
            <strong>Alergias:</strong> ${record.allergies}
        `;
    } else {
        patientRecord.innerHTML = 'Registro no encontrado.';
    }
}
