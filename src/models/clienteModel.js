import { query } from "../config/dbConnect.js";

const getAll = async () => {
  const clientes = await query("SELECT * from cliente WHERE status = 1");
  return clientes;
};

const createCliente = async (cliente) => {
  const { nome, cpf, email = null, celular = null } = cliente;
  const sql =
    "INSERT INTO cliente (nome, cpf, email, celular) VALUES (?,?,?,?)";
  const createdCliente = await query(sql, [nome, cpf, email, celular]);
  return createdCliente.insertId.toString();
};

const inactiveCliente = async (id) => {
  const sql = "UPDATE cliente SET status = 0 WHERE id = ?";
  const updatedClienteStatus = await query(sql, [id]);
  return updatedClienteStatus;
};

const updateCliente = async (id, cliente) => {
  const { nome, cpf, email = null, celular = null } = cliente;
  const sql =
    "UPDATE cliente SET nome = ?, cpf = ?, email = ?, celular = ? WHERE id = ?";
  const updatedCliente = await query(sql, [nome, cpf, email, celular, id]);
  return updatedCliente;
};

export default {
  getAll,
  createCliente,
  inactiveCliente,
  updateCliente,
};
