"Use strict";

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    const form = document.getElementById("form");
    const url = '/sendMail';


    const getData = (e) => {
        e.preventDefault();

        let fullName = document.getElementById("fullName").value,
            email = document.getElementById("email").value,
            subject = document.getElementById("subject").value,
            message = document.getElementById("message").value;

        if (message === "" || message == undefined || null) {
            Swal.fire({
                title: 'Error!',
                text: 'Debe llenar todos los campos',
                icon: 'error',
                confirmButtonText: 'Entiendo!'
            })
        } else {

            const Datos = {
                fullName: fullName,
                email: email,
                subject: subject,
                message: message
            };

            try {
                fetch(url, {
                        method: 'POST',
                        headers: [
                            ["Content-Type", "application/json"]
                        ],
                        credentials: "include",
                        body: JSON.stringify(Datos),
                    }).then(response => response.json())
                    .catch(error => Swal.fire({
                        title: 'Error!',
                        text: 'Uy hemos tenido un error, desea continuar', error,
                        icon: 'error',
                        confirmButtonText: 'Intentar de nuevo'
                    }))
                    .then(response => 
                        Swal.fire({
                            title: 'Enviado!',
                            text: 'Gracias por contactarme', response,
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        }));


                fullName = document.getElementById("fullName").value = "",
                    email = document.getElementById("email").value = "",
                    subject = document.getElementById("subject").value = "",
                    message = document.getElementById("message").value = "";


            } catch (err) {
                Swal.fire({
                    title: 'Error!',
                    text: '¿Desea continuar?',
                    icon: 'error',
                    confirmButtonText: 'Intentar de nuevo'
                })
            }
        }




    };


    form.addEventListener("submit", getData);




})