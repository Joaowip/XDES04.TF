document.addEventListener("DOMContentLoaded", function() {
    // CRUD para usuários
    const userForm = document.getElementById("userForm");
    const userTableBody = document.getElementById("userTable").querySelector("tbody");
  
    userForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nome = userForm.nome.value;
      const cpf = userForm.cpf.value;
      const dataNascimento = userForm.dataNascimento.value;
      const endereco = userForm.endereco.value;
      const telefone = userForm.telefone.value;
      const tipo = userForm.tipo.value;
  
      const newUser = { nome, cpf, dataNascimento, endereco, telefone, tipo };
  
      // Adiciona o novo usuário à tabela
      const row = userTableBody.insertRow();
      row.insertCell(0).textContent = newUser.nome;
      row.insertCell(1).textContent = newUser.cpf;
      row.insertCell(2).textContent = newUser.dataNascimento;
      row.insertCell(3).textContent = newUser.endereco;
      row.insertCell(4).textContent = newUser.telefone;
      row.insertCell(5).textContent = newUser.tipo;
      const deleteCell = row.insertCell(6);
      deleteCell.innerHTML = `<button class="btn btn-danger">Remover</button>`;
  
      // Limpar o formulário
      userForm.reset();
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // Função para lidar com o login
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const matricula = loginForm.matricula.value;
      const senha = loginForm.senha.value;
  
      // Exemplo básico de validação de login
      // Aqui, substitua com a lógica de autenticação real
      if (matricula === "admin" && senha === "1234") {
        window.location.href = "index.html";
      } else {
        loginMessage.textContent = "Matrícula ou senha incorreta.";
      }
    });
  });
  