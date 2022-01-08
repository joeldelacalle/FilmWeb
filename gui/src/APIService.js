var apiUrl = "http://localhost:5000/comentarios";

export async function postComments(
  titulo,
  idPelicula,
  nomUsuario,
  emailUsuario,
  comentario
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ titulo: titulo, idPelicula: idPelicula.toString(), nomUsuario: nomUsuario, emailUsuario: emailUsuario, comentario: comentario }),
  };  
  await fetch(apiUrl, requestOptions).then((response) => {
    response.json();
  });
}
export async function getFilmComments(
  idPelicula,
  comentarios,
  setComentarios,
  loaded,
  setLoaded
) {
  await fetch(apiUrl + `/${idPelicula}`)
    .then((response) => response.json())
    .then((data) => {
      setLoaded(true);
      setComentarios(data);
      console.log(setLoaded);
      console.log(comentarios);
      console.log(data);
    });
    
}