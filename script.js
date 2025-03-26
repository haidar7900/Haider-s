document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`تم إرسال رسالتك بنجاح! \nالاسم: ${name} \nالبريد الإلكتروني: ${email} \nالرسالة: ${message}`);
});
