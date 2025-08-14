const { createClient } = supabase;
const supabaseUrl = 'https://swqqtlvpzdrnjpdpzvor.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3cXF0bHZwemRybmpwZHB6dm9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NzIzNTAsImV4cCI6MjA3MDU0ODM1MH0.NIS_6fqvi9DV2SaCueEKWn-hTo9G2zOBJ-bL2JRtt60'; Fr3dy1234
const supabaseClient = createClient(supabaseUrl, supabaseKey);

async function cargarUsuarios() {
    const { data, error } = await supabaseClient
        .from('usuarios')
        .select('*');

    if (error) {
        console.error('Error al cargar usuarios:', error);
        return;
    }

    const tbody = document.querySelector('#tabla-usuarios tbody');
    tbody.innerHTML = '';

    data.forEach(usuario => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.Apellido}</td>
            <td>${usuario.rol}</td>
            <td>${usuario.correo}</td>
        `;
        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', cargarUsuarios);
