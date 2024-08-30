        // Datos de ejemplo
        const experiencias = [
            { puesto: 'Analista de soporte y redes', empresa: 'ASSIT S.A.S.', periodo: '2022 - 2023' },
            { puesto: 'Contratista Oficina de Tecnologias de la información', empresa: 'ICA', periodo: '08/2023 - 12/2023' }
            { puesto: 'Support Analyst - Associate', empresa: 'SoftwareOne', periodo: '03/2024 - actualmente' }
        ];

        const educacion = [
            { titulo: 'Grado en Ingenieria Electrónica', institucion: 'Universidad Pedagógica y Tecnológica de Colombia', año: '2016 - 2023' },
            { titulo: 'Especialista en Telecomunicaciones', institucion: 'Universidad Pedagógica y Tecnológica de Colombia', año: '2023' }
        ];

        // Función para añadir elementos a una lista
        function añadirALista(items, listaId) {
            const lista = document.getElementById(listaId);
            items.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${item.puesto || item.titulo}</strong><br>
                                ${item.empresa || item.institucion} | ${item.periodo || item.año}`;
                lista.appendChild(li);
            });
        }

        // Añadir experiencias y educación
        añadirALista(experiencias, 'lista-experiencia');
        añadirALista(educacion, 'lista-educacion');

        // Función para cambiar la foto
        function cambiarFoto() {
            const foto = document.getElementById('foto');
            foto.src = '/api/placeholder/150/150';  // Cambia esto por la URL de la nueva foto
        }

        // Puedes llamar a cambiarFoto() cuando quieras actualizar la imagen