document.addEventListener('DOMContentLoaded',function(){
 
    const list =document.querySelector('#participants-list ul');
    const forms = document.forms;

    //delete name
    list .addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add name
    const addForm = forms['add-name'];
    addForm.addEventListener('submit',function(e){
        e.parentDefault();
    
    //creat elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const participantsName = document.createElement('span');
    const deleteBtn = document.createElement('span');


    //add text
    participantsName.textContent = value;
    deleteBtn.textContent = 'delete';

    //add classes
    participantsName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(participantsName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    
    });
    
    

})


