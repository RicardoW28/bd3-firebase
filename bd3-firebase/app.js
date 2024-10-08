//RENDERIZANDO LISTA DE DADOS
const listBook =document.querySelector('#book-list')

function renderList(doc) {

    let li = document.createElement('li');
    let autor = document.createElement('span');
    let titulo = document.createElement('span');

    autor.textContent = doc.autor;
    titulo.textContent = doc.titulo;

    li.appendChild(titulo);
    titulo.appendChild(autor);

    listBoook.appendChild(li);
}
//lista dos dados de coleção do firestone
db.collection('libri-collection')

db.collection('libri-collection')
    .get()
    .then((snapshot)=>{
        //consolle.log(snapshot.docs)
        snapshot.docs.forEach(
            doc=>{
                console.log(doc.data())
            }
        )
    });

    //inserção de dados
    const from = querySelctor('add-book-form');