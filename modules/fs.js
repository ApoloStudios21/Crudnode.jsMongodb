const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     console.log("Erro: ", error);
//   }

//   console.log("Pasta criada com sucesso!");
// });

//  criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.txt"),
  "Hello node! ",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    //  Adicionar um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo adicionado com sucesso!");
      }
    );
    // Ler arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log(data);
      }
    );
  }
);
