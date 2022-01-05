var apiUrl = "http://localhost:5000/comentarios";

export async function postComments(
  titulo,
  nomUsuario,
  emailUsuario,
  comentario
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo: titulo, nomUsuario: nomUsuario, emailUsuario: emailUsuario, comentario: comentario }),
  };  
  await fetch(apiUrl, requestOptions).then((response) => {
    response.json();
  });
}