// Animate progress bars
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.progress-bar').forEach(function(bar) {
        const width = bar.classList.contains('html-css-skill') ? '80%' :
                      bar.classList.contains('js-skill') ? '80%' :
                      bar.classList.contains('python-skill') ? '65%' :
                      bar.classList.contains('react-skill') ? '80%' : '0%';
        bar.style.width = width;
    });
});

// Modal functionality
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById('modal').style.display = "block";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

