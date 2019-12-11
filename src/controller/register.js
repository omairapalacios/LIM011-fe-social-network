const register = (userName, lastName, userEmail, userPassword, country, dateUser) => {
    console.log('funcion registrar');

    db.collection("users").add({
        name: userName,
        lastName: lastName,
        userEmail: userEmail,
        userPassword: userPassword,
        country: country,
        born: dateUser
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}