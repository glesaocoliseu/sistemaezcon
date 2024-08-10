document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    window.generatePDF = () => {
        const doc = new jsPDF();

        // Coleta os dados do formulário
        const nome = document.getElementById('nome').value;
        const cpf = document.getElementById('cpf').value;
        const sexo = document.getElementById('sexo').value;
        const dataNascimento = document.getElementById('dataNascimento').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const endereco = document.getElementById('endereco').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cep = document.getElementById('cep').value;

        // Adiciona os dados ao PDF
        doc.setFontSize(16);
        doc.text('Dados do Cliente', 20, 20);
        doc.setFontSize(12);
        doc.text(`Nome: ${nome}`, 20, 30);
        doc.text(`CPF: ${cpf}`, 20, 40);
        doc.text(`Sexo: ${sexo}`, 20, 50);
        doc.text(`Data de Nascimento: ${dataNascimento}`, 20, 60);
        doc.text(`Telefone: ${telefone}`, 20, 70);
        doc.text(`E-mail: ${email}`, 20, 80);
        doc.text(`Endereço: ${endereco}`, 20, 90);
        doc.text(`Cidade: ${cidade}`, 20, 100);
        doc.text(`Estado: ${estado}`, 20, 110);
        doc.text(`CEP: ${cep}`, 20, 120);

        // Lê o arquivo e adiciona ao PDF
        const arquivoInput = document.getElementById('arquivo');
        const arquivo = arquivoInput.files[0];
        
        if (arquivo) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgData = event.target.result;

                // Adiciona o arquivo ao PDF
                doc.addImage(imgData, 'JPEG', 20, 130, 160, 120); // Ajuste as coordenadas e tamanho conforme necessário

                // Gera o PDF
                doc.save('dados_cliente.pdf');
            };
            reader.readAsDataURL(arquivo);
        } else {
            // Se não houver arquivo, apenas gera o PDF com os dados do formulário
            doc.save('dados_cliente.pdf');
        }
    };
});
