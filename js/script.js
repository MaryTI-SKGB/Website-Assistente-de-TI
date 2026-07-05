// MODO ESCURO COM LOCALSTORAGE
const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    if (darkModeBtn) {
        darkModeBtn.textContent = "☀️";
    }
}

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeBtn.textContent = "🌙";
        }
    });
}

// BOTÃO VOLTAR AO TOPO
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById("formContato");
const msgForm = document.getElementById("msgForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome.length < 3) {
    msgForm.textContent = "O nome deve ter pelo menos 3 caracteres.";
    msgForm.style.color = "red";
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    msgForm.textContent = "Digite um e-mail válido.";
    msgForm.style.color = "red";
    return;
}

if (assunto.length < 5) {
    msgForm.textContent = "O assunto deve ter pelo menos 5 caracteres.";
    msgForm.style.color = "red";
    return;
}

if (mensagem.length < 10) {
    msgForm.textContent = "A mensagem deve ter pelo menos 10 caracteres.";
    msgForm.style.color = "red";
    return;
}

msgForm.textContent = "Mensagem enviada com sucesso!";
msgForm.style.color = "green";
form.reset();
    });
}