var docForm = document.createElement('form');
	docForm.setAttribute('name', 'login');
	docForm.setAttribute('action', 'google.com');

	var body = document.getElementsByTagName('body')[0];
	body.appendChild(docForm); 

	var inputAge = document.createElement('input');
	inputAge.setAttribute('type', 'text');
	inputAge.setAttribute('name','age');
	docForm.insertAdjacentElement('beforeEnd', inputAge);

	var inputName = document.createElement('input');
	inputName.setAttribute('type', 'text');

	inputName.setAttribute('value','user_');
	inputName.setAttribute('name','username');
	docForm.insertAdjacentElement('beforeEnd', inputName);

	var inputDate = document.createElement('input');
	inputDate.setAttribute('type', 'text');
	inputDate.setAttribute('name','date');
	docForm.insertAdjacentElement('beforeEnd', inputDate);

	var inputSubmit = document.createElement('input');
	inputSubmit.setAttribute('type', 'submit');
	inputSubmit.setAttribute('value','Validate Me');
	docForm.insertAdjacentElement('beforeEnd', inputSubmit);

	inputName.style = "margin: 10px";
	inputSubmit.style = "margin: 10px";


function input(input){ return document.getElementsByTagName(input)};

function validate(e){
	e.preventDefault();
	var age = inputAge.value;
	var name = inputName.value;
	var date = inputDate.value;

	var regexAge = /(?!-)\S\d/g;
	if (regexAge.test(inputAge.value)){
		console.log(true);
	}	else {
			console.log('inputAge ' + false);
			alert('Field Age must contain only numbers without whitespaces');
		};

	var regexName = /\buser_+[a-z0-9.@-]/gi;
		if(regexName.test(inputName.value)){
			console.log(true)
		} else {
			console.log('inputName ' + false);
			alert("Field Name should begins with 'user_'");
	}
	

	var currentDate = new Date().toISOString().slice(0, 10);

		if(date == currentDate) {
			console.log(true);
		} else{
		console.log('input Date ' + false);
		alert('Enter current date');
			};
		console.log(age, name, date);
		}

docForm.addEventListener('submit', validate);