const items = document.querySelectorAll('.item');
const placeholders = document.querySelectorAll('.placeholder')

for(const item of items){
  item.addEventListener('dragstart', dragstart);
  item.addEventListener('dragend', dragend);  
}

for(const placeholder of placeholders){
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

let dragItem = null

function dragstart(event){
  event.target.classList.add('hold');
  dragItem = this;
  console.log(dragItem)
  setTimeout(() => event.target.classList.add('hide'), 0);
}
function dragend(event){
  event.target.className = 'item';
  dragItem = null
}

function dragover(event){
  event.preventDefault()
}

function dragenter(event){
  event.target.classList.add('hovered')
}

function dragleave(event){
  event.target.classList.remove('hovered')
}

function dragdrop(event){
  event.target.classList.remove('hovered')
  console.log(event.target)
  console.log(this)
  event.target.append(dragItem)
}
