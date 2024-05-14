function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name.trim() == '' || email.trim() == '' || subject.trim() == '' || message.trim() == '') {
        alert("Please fill in all required fields.");
    } else {
        const textToCheck = name + " " + email + " " + subject + " " + message;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'pJ3QYgFaRYuVzG43Li2MibGCyRIx7RjD'
            },
            body: JSON.stringify({
                body: textToCheck
            })
        };


        console.log("Sending all the fucks --------------->");
        fetch("https://api.apilayer.com/bad_words?censor_character=censor_character", requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log("All G BIG G :)");
                return response.json();
            })
            .then(result => {
                console.log("Received response:", result);
                if (result.bad_words_total > 0) {
                    console.log("more then 1 fuck given >:[", result.bad_words_list);
                    alert("more then 1 fuck given >:[" );
                } else {
                    console.log("no fucks given. >:]");
                    document.getElementById("contactForm").submit();
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert("Error has occured. Please try again later :].");
            });
    }
}