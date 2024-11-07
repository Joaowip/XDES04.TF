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
  