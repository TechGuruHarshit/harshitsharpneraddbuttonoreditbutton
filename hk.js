// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault();
  
    const expenseAmount = event.target.expenseAmount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;
    
   let user = {
      expenseAmount,
      description,
      category,
    }
  //alert(user)
  console.log(user)
    localStorage.setItem(category, JSON.stringify(user));
  
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = `${user.expenseAmount}- ${user.description}-${user.category}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DeleteExpense';
    deleteButton.addEventListener('click', function() {
      ul.removeChild(li);
      localStorage.removeItem(category);
    });
  
    li.appendChild(deleteButton);
    
  
  const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      
     const obj = JSON.parse(localStorage.getItem(category));
    document.getElementById("expenseAmount").value = obj.expenseAmount;
    document.getElementById("description").value = obj.description;
    document.getElementById("category").value = obj.category;
     });
     li.appendChild(editButton);
     ul.appendChild(li);
  };
  
  
  


// function handleFormSubmit(event) {
//   event.preventDefault(); // Prevent the form from submitting the traditional way

//   // Get the values from the form inputs
//   const expenseAmount = document.getElementById('expenseAmount').value;
//   const description = document.getElementById('description').value;
//   const category = document.getElementById('category').value;

//   // Create a new list item
//   const li = document.createElement('li');
//   li.textContent = `Amount: ${expenseAmount}, Description: ${description}, Category: ${category}`;

//   // Append the new list item to the expense list
//   document.getElementById('expenseList').appendChild(li);

//   // Clear the form inputs
//   document.getElementById('expenseAmount').value = '';
//   document.getElementById('description').value = '';
//   document.getElementById('category').value = '';
// }
