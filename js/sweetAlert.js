/*Alerta de "Bienvenida"*/
Swal.fire({
    button: 'Bienvenidos a Perfumes Oh lalaaa',
    title: 'Bienvenidos a Perfumes Oh lala',
    imageUrl: "img/logo2.png",
    imageWidth: "350px",
    width: 9000,
    color: '#ffae00',
    background: '#eff2f4 url(/img/Navbar.gif)',
  })

/*Alerta de boton "comprar"*/
function comprar() {

    Swal.fire({
        title: "Muchas gracias por su compra!",
        text: "Tus perfumes están en camino!",
        button: "Quiero comprar más perfumes!",        
        imageUrl: "img/logo2.png",
        imageWidth: "300px",
    });
};

/*Alerta de boton "suscribirme"*/
function suscribirme() {

    Swal.fire(
        'Perfecto!',
        'Te suscribiste a Perfumes Oh la la!',
        'success'
      )
};

/*Alerta de boton "Añadir al carrito"*/
function añadir() {

    Toastify({
        text: "Perfume agregado al carrito",
        className: "info",
        position: "right",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #ffae00, #F21365)",
        }
      }).showToast();
};


/*Alerta de boton "Remover al carrito"*/
function remover() {

    Toastify({
        text: "Perfume Removido",
        className: "error",
        position: "right",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #fd1d1d, #ff470f)",
        }
      }).showToast();
};