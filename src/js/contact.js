        // Confirm logout action
        function confirmLogout() {
            if (confirm("Are you sure you want to logout?")) {
                window.location.href = "login.html";
            }
        }

        // Active page highlight
        var navLinks = document.querySelectorAll('nav a');
        var currentPage = window.location.pathname.split('/').pop();
        navLinks.forEach(function(link) {
            if (link.href.includes(currentPage)) {
                link.classList.add('active');
            }
        });

        // Handle form submission
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from submitting the default way

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                alert("Please fill in all the fields.");
                return;
            }

            // Here you would typically send the data to your backend server or email API
            alert(`Thank you for your message, ${name}! I’ll get back to you as soon as possible.`);

            // Optionally reset the form after submission
            document.getElementById("contact-form").reset();
        });