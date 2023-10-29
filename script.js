function validateForm(event) {
  event.preventDefault();

  let errors = '';

  const userId = document.getElementById('id').value;
  const client_name = document.getElementById('client_name').value;
  const birth_date = document.getElementById('birth_date').value;
  const age = document.getElementById('age');
  const email = document.getElementById('email').value;
  const tel = document.getElementById('tel').value;
  const room = document.getElementById('room').value;
  const photo_room = document.getElementById('photo_room');
  const room_value = document.getElementById('room_value');
  let roomValue = 0;
  const initial_date = document.getElementById('initial_date').value;
  const end_date = document.getElementById('end_date').value;
  const nights = document.getElementById('nights');
  const price_service_1 = document.getElementById('price_service_1');
  const price_service_2 = document.getElementById('price_service_2');
  const service1 = document.getElementById('service1').value;
  let priceService1 = 0;
  const service2 = document.getElementById('service2').value;
  let priceService2 = 0;
  const subtotalHtml = document.getElementById('subtotal');
  let subtotal = 0;
  const ivaHtml = document.getElementById('iva');
  let iva = 0;
  const totalHtml = document.getElementById('total');
  let total = 0;

  const formError = document.getElementById('formErrors');

  const idLength = userId.length;
  const idIsNotANumber = isNaN(userId);

  if (idLength > 12) {
    errors = 'La cedula no puede ser mayor de 12 digitos';
  } else if (idIsNotANumber) {
    errors = 'La cedula debe ser de tipo numerico';
  }

  const justLetters = isNaN(client_name);
  if (!justLetters) {
    errors = 'El nombre solo debe ser letras';
  }

  const currentDate = new Date().getTime();
  const bornDate = new Date(birth_date).getTime();
  if (bornDate > currentDate) {
    errors = 'La fecha de nacimiento no puede ser mayor a la fecha actual';
  }

  const currentYear = new Date().getFullYear();
  const birthYear = new Date(birth_date).getFullYear();

  const userAge = currentYear - birthYear;

  age.innerHTML = `La edad es ${userAge}`;

  const emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  if (!emailIsValid) {
    errors = 'Ingrese un correo valido';
  }

  const telLength = tel.length;
  const telIsNotANumber = isNaN(tel);

  if (telLength > 10) {
    errors = 'El Número celular no puede ser mayor de 10 digitos';
  } else if (telIsNotANumber) {
    errors = 'El Número celular debe ser de tipo numerico';
  }

  if (room === 'STANDAR KING Y VISTA AL MAR') {
    photo_room.src = './img/standar_king.jpg';
    room_value.innerHTML = '300.000 por noche';
    roomValue = 300000;
  } else if (room === 'SUPERIOR TWIN Y VISTA AL MAR') {
    room_value.innerHTML = '500.000 por noche';
    photo_room.src = './img/Supreme_king.jpg';
    roomValue = 500000;
  } else if (room === 'SUITE CON BALCÓN Y VISTA AL MAR') {
    room_value.innerHTML = "1'000.000 por noche";
    photo_room.src = './img/SUITE.PNG';
    roomValue = 1000000;
  }

  const initialDate = new Date(initial_date).getTime();
  const endDate = new Date(end_date).getTime();
  if (initialDate < currentDate && initialDate > endDate) {
    errors =
      'La fecha ingreso  no puede ser menor a la fecha actual ni mayor a la fehca de salida';
  }

  if (endDate < currentDate && endDate < initialDate) {
    errors =
      'La fecha salida no puede ser menor a la fecha actual ni menor a la fehca de ingreso';
  }

  const initialDay = new Date(initial_date);
  const finalDay = new Date(end_date);

  var Difference_In_Time = initialDay.getTime() - finalDay.getTime();  
  var Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24)) * (-1);
  
  const totalDays = Difference_In_Days;
  nights.innerHTML = Difference_In_Days + " noches";

  if (service1) {
    if (service1 === 'Desayuno tipo buffet') {
      price_service_1.innerHTML = '20.000 COP';
      priceService1 = 20000;
    } else if (service1 === 'Lavanderia') {
      price_service_1.innerHTML = '80.000 por lavada';
      priceService1 = 80000;
    } else {
      price_service_1.innerHTML = '200.000 COP';
      priceService1 = 200000;
    }
  }

  if (service2) {
    if (service2 === 'Desayuno tipo buffet') {
      price_service_2.innerHTML = '20.000 COP';
      priceService2 = 20000;
    } else if (service2 === 'Lavanderia') {
      price_service_2.innerHTML = '80.000 por lavada';
      priceService2 = 80000;
    } else {
      price_service_2.innerHTML = '200.000 COP';
      priceService2 = 200000;
    }
  }

  subtotal = (roomValue * totalDays) + priceService1 + priceService2 ;
  subtotalHtml.innerHTML = subtotal;

  iva = subtotal * 0.19;
  ivaHtml.innerHTML = iva;

  total = iva + subtotal;
  totalHtml.innerHTML = total;

  console.log({
    userId,
    client_name,
    birth_date,
    age,
    email,
    room,
    photo_room,
    room_value,
    initial_date,
    end_date,
    service1,
    service2,
    subtotal,
    iva,
    total,
  });

  formError.innerHTML = errors;
}

var form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);
