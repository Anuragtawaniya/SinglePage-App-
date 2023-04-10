const form = document.getElementById('form');
const firstName = document.getElementById('FirstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pin = document.getElementById('pin');
const date= document.getElementById('date');




function Form(){
    let doc = document.getElementById("main-container").innerHTML = `
    <form id="form" class="form">
    <div class="form-control">
      <input type="text" placeholder="FirstName" id="FirstName" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <input type="text" placeholder="lastName" id="lastName" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <input type="date" placeholder="Dob" id="date" required />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <input type="email" placeholder="Email" id="email" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <input type="tel" placeholder="PhoneNumber" id="phone" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <div class="form-control">
      <input type="text" placeholder="Pin Code" id="pin" />
      <i class="fas fa-check-circle"></i>
      <i class="fas fa-exclamation-circle"></i>
      <small>Error message</small>
    </div>
    <button>Submit</button>
  </form>
    `;
}




function Data(){
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
    const date = document.getElementById('date').value;
    let doc = document.getElementById("main-container").innerHTML = `
    <div class="table-data">
    <input type="search" placeholder="search" id="myInput" onkeyup="searchFun()" />
  <table class="show" id="myTable">
  <tr>
  <th>FirstName</th>
  <th>LastName</th>
  <th>DateOfBirth</th>
  <th>Email</th>
  <th>PhoneNumber</th>
  <th>Pincode</th>
</tr>
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${date}</td>
<td>${email}</td>
<td>${phone}</td>
<td>${pin}</td>

</tr>
  </table>
        </div>
    `;
}

const searchFun = () =>{
    let filter = document.getElementById("myInput").value.toUpperCase();

    let myTable = document.getElementById("myTable");

    let tr = myTable.getElementsByTagName("tr");

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let textvalue = td.textContent || td.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
tr[1].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}


form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
  return false;
 
});

function checkInputs() {
  const firstValue = firstName.value.trim();
  const lastValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const pinValue = pin.value.trim();
  const dateValue = date.value.trim();
  


  if (firstValue === '') {
    setErrorFor(firstName, 'FirstName cannot be blank');
  } else {
    setSuccessFor(firstName);
  }
  if (lastValue === '') {
    setErrorFor(lastName, 'LastName cannot be blank');
  } else {
    setSuccessFor(lastName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === '') {
    setErrorFor(phone, 'Phone cannot be blank');
  } else {
    setSuccessFor(phone);
  }
  
  if (dateValue === '') {
    setErrorFor(date, 'Phone cannot be blank');
  } else {
    setSuccessFor(date);
  }

  if (pinValue === '') {
    setErrorFor(pin, 'Pin cannot be blank');
  }else {
    setSuccessFor(pin);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}