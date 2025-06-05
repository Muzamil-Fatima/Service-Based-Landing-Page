// Add event listener to CTA buttons
document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for contacting us!');
    });
});