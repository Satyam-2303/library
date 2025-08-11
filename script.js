const myLibrary=[];
let bookTitle=document.getElementById('title');
let bookAuthor=document.getElementById('author');
let bookPages=document.getElementById('pages');
let bookStatus=document.querySelector('#read');
let submit=document.getElementById('button');
let form=document.querySelector('form');


function Books(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=crypto.randomUUID();
}   
const hitch= new Books("The Hitchhiker's Guide to the Galaxy",'Douglas Adams','200','Yes');
myLibrary.push(hitch);

const games= new Books('Fire And Blood','George R.R. Martin','600','No');
myLibrary.push(games);

const nile= new Books("Death on the Nile",'Agatha Christie','288','No');
myLibrary.push(nile);

const op= new Books("One Piece","Eichiro Oda",">18000","Yes");
myLibrary.push(op);


function addBook(){
    title=bookTitle.value;  
    author=bookAuthor.value;
    pages=bookPages.value;
    read=bookStatus.value;
    const book= new Books(title,author,pages,read);
    if (title==="" || author===""){
      throw Error('Title or Author empty');
    }
    else{
      myLibrary.push(book);
      form.reset();
      grid.replaceChildren()
      for (const book of myLibrary) {
      createCell(book);
      }
    }
}


const grid=document.querySelector('.grid');

function createCell(book){
  const cell=document.createElement('div');
  cell.className='cell'
  cells=document.querySelector('.cell');
  grid.appendChild(cell);

  const title=document.createElement('h1');
  title.textContent=book.title;
  cell.appendChild(title);

  const author=document.createElement('h3');
  author.textContent=book.author;
  cell.appendChild(author);

  const pages=document.createElement('h5');
  pages.textContent=`Pages: ${book.pages}`;
  cell.appendChild(pages);

  const status=document.createElement('p');
  status.textContent=`Have You Read it:${book.read}`;
  cell.appendChild(status);

  const buttonDiv=document.createElement('div');
  buttonDiv.className='btnDiv';
  cell.appendChild(buttonDiv);

  const removeButton=document.createElement('button');
  removeButton.className='remove';
  removeButton.textContent='Remove Title'
  buttonDiv.appendChild(removeButton);
removeButton.addEventListener('click', () =>{
  const ident = book.id;
  const index = myLibrary.findIndex(item => item.id === ident);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    grid.replaceChildren();
    for (const book of myLibrary) {
      createCell(book); 
    }
  }
});


  const chngButton=document.createElement('button');
  chngButton.className='change';
  chngButton.textContent='Change Status';
  buttonDiv.appendChild(chngButton);
  chngButton.addEventListener('click',() => {
    if(status.textContent==='Have You Read it:Yes'){
      status.textContent='Have You Read it:No';
    }
    else{
      status.textContent='Have You Read it:Yes';
    }
  })
}

submit.addEventListener('click',(event)=>{
  event.preventDefault();
  addBook();
  console.log(myLibrary);
});

createCell(myLibrary[0]);
createCell(myLibrary[1]);
createCell(myLibrary[2]);
createCell(myLibrary[3]);

