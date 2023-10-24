import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedFuncionarios() {
  try {
    await prisma.funcionario.createMany({
      data: [
        {
          nome: "CARLOS",
          cpf: "65332844018",
          email: "carlos@example.com",
        },
        {
          nome: "VIVIAN",
          cpf: "46993132052",
          email: "vivian@example.com",
        },
      ],
    });
    console.log("Funcionários inseridos com sucesso");
  } catch (error) {
    console.error("Erro ao inserir Funcionarios:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedClientes() {
  try {
    await prisma.cliente.createMany({
      data: [
        {
          nome: "João",
          cpf: "12345678901",
          email: "joao@example.com",
        },
        {
          nome: "Maria",
          cpf: "98765432123",
          email: "maria@example.com",
        },
      ],
    });

    console.log("Clientes inseridos com sucesso");
  } catch (error) {
    console.error("Erro ao inserir clientes:", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await seedFuncionarios();
  await seedClientes();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });