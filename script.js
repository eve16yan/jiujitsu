document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener el valor del campo nombre y comentario
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Crear el nuevo comentario
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

    // Agregar el comentario a la sección de comentarios
    document.getElementById('comments-section').appendChild(newComment);

    // Lim
