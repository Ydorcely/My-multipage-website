
    function validateForm() {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please try again.');
            return false; // Prevent form submission
        }

        return true; // Allow form submission
    }

