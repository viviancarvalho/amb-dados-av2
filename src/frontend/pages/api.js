
const BASE_URL = 'http://localhost:3000';

export const CLIENTES = `${BASE_URL}/cliente`;
export const RESTAURANTES = `${BASE_URL}/restaurante`;
export const ENTREGADORES = `${BASE_URL}/entregador`;
export const PEDIDOS = `${BASE_URL}/pedido`;
export const ITENS = `${BASE_URL}/item`;
export const ITENS_PEDIDO = `${BASE_URL}/item_pedido`;
export const USUARIOS = `${BASE_URL}/usuario`;

//===========================================================================
//metodos do cliente
//===========================================================================

export async function criarCliente(cliente) {
    const res = await fetch(CLIENTES, {
        method: 'POST',
        headers: { 'Content-type' : 'application/json' },
        body: JSON.stringify(cliente)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar cliente.");
    }
    return res.json();
}

export async function listarTodosClientes() {
    const res = await fetch(CLIENTES);

    if (!res.ok) {
        throw new Error("Falha ao listar clientes.");
    }
    return res.json();
}

export async function buscarClientePorID(id) {
    const res = await fetch(`${CLIENTES}/${id}`);

    if (!res.ok) {
        throw new Error("Falha ao buscar cliente por id.");
    }
    return res.json();
}

export async function buscarClientePorCpf(cpf) {
    const res = await fetch(`${CLIENTES}/cpf/${cpf}`);

    if (!res.ok) {
        throw new Error("Falha ao buscar cliente por cpf.");
    }
    return res.json();
}

export async function atualizarCliente(cliente) {
    const res = await fetch(CLIENTES, {
        method: 'PUT',
        headers: { 'Content-type' : 'application/json'},
        body: JSON.stringify(cliente)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar cliente.");
    }
    return res.json();
}

export async function deletarCliente(id) {
    const res = await fetch(`${CLIENTES}/${id}`,{
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar cliente.");
    }
    return res.json();
}

//===========================================================================
//metodos do restaurante
//===========================================================================

export async function criarRestaurante(rest) {
    const res = await fetch(`${RESTAURANTES}`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(rest)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar restaurante.");
    }
    return res.json();
}

export async function listarTodosRestaurantes() {
    const res = await fetch(`${RESTAURANTES}`);

    if (!res.ok) {
        throw new Error("Falha ao listar restaurantes.");
    }
    return res.json();
}

export async function atualizarRestaurante(rest) {
    const res = await fetch(`${RESTAURANTES}`, {
        method: 'PUT',
        headers: { 'Content-type' : 'application/json'},
        body: JSON.stringify(rest)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar restaurante.");
    }
    return res.json();
}

export async function deletarRestaurante(id) {
    const res = await fetch(`${RESTAURANTES}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar restaurante.");
    }
    return res.json();
}

//===========================================================================
//metodos do entregador
//===========================================================================

export async function criarEntregador(ent) {
    const res = await fetch(`${ENTREGADORES}`, {
        method: 'POST',
        headers: { 'Content-type' : 'application/json'},
        body: JSON.stringify(ent)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar entregador.");
    }
    return res.json();
}

export async function listarTodosEntregadores() {
    const res = await fetch(`${ENTREGADORES}`);

    if (!res.ok) {
        throw new Error("Falha ao listar entregadores.");
    }
    return res.json();
}

export async function buscarEntregadorPorID(id) {
    const res = await fetch(`${ENTREGADORES}/${id}`);

    if (!res.ok) {
        throw new Error("Falha ao buscar entregador por id.");
    }
    return res.json();
}

export async function buscarEntregadorPorCpf(cpf) {
    const res = await fetch(`${ENTREGADORES}/cpf/${cpf}`);

    if (!res.ok) {
        throw new Error("Falha ao buscar entregador por cpf.");
    }
    return res.json();
}

export async function buscarEntregadorPorDisponibilidade(disp) {
    const res = await fetch(`${ENTREGADORES}/disp/${disp}`)

    if (!res.ok) {
        throw new Error("Falha ao buscar entregador por disponibilidade.");
    }
    return res.json();
}

export async function atualizarEntregador(ent) {
    const res = await fetch(`${ENTREGADORES}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(ent)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar entregador.");
    }
    return res.json();
}

export async function atualizarDisponibilidade(id, disp) {
    const res = await fetch(`${ENTREGADORES}/${id}/${disp}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar disponibilidade de entregador.");
    }
    return res.json();
}

export async function deletarEntregador(id) {
    const res = await fetch(`${ENTREGADORES}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar entregador.");
    }
    return res.json();
}

//===========================================================================
//metodos do pedido
//===========================================================================

export async function criarPedido(pedido) {
    const res = await fetch(`${PEDIDOS}`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(pedido)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar pedido.");
    }
    return res.json();
}

export async function listarTodosPedidos() {
    const res = await fetch(`${PEDIDOS}`);

    if (!res.ok) {
        throw new Error("Falha ao listar pedidos.");
    }
    return res.json();
}

export async function listarPedidosPorClienteCpf(cpf) {
    const res = await fetch(`${PEDIDOS}/cpf/${cpf}`);

    if (!res.ok) {
        throw new Error("Falha ao listar pedidos por cliente.");
    }
    return res.json();
}

export async function atualizarPedidoDataHora(id, data_hora) {
    const res = await fetch(`${PEDIDOS}/${id}/dataHora}`,{
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({dataHora : data_hora})
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar data hora de pedido.");
    }
    return res.json();
}

export async function atualizarStatusPedido(id, status) {
    const res = await fetch(`${PEDIDOS}/${id}/status`, {
        method:'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({status : status})
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar status do pedido.");
    }
    return res.json();
}

export async function deletarPedido(id) {
    const res = await fetch(`${PEDIDOS}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar pedido.");
    }
    return res.json();
}

//===========================================================================
//metodos do item
//===========================================================================

export async function criarItem(item) {
    const res = await fetch(`${ITENS}`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(item)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar item.");
    }
    return res.json();
}

export async function listarTodosItens() {
    const res = await fetch(`${ITENS}`);

    if (!res.ok) {
        throw new Error("Falha ao listar todos os itens.");
    }
    return res.json();
}

export async function listarItensPorRestaurante(id) {
    const res = await fetch(`${ITENS}/${id}/rest`);

    if (!res.ok) {
        throw new Error("Falha ao carregar itens do restaurante.");
    }
    return res.json();
}

export async function atualizarItem(item) {
    const res = await fetch(`${ITENS}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(item)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar item.");
    }
    return res.json();
}

export async function deletarItem(id) {
    const res = await fetch(`${ITENS}/${id}`, {
        method: 'DELETE',
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar item.");
    }
    return res.json();
}

//===========================================================================
//metodos do item pedido
//===========================================================================

export async function criarItemPedido(ip) {
    const res = await fetch(`${ITENS_PEDIDO}`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(ip)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar item pedido.");
    }
    return res.json();
}

export async function listarItensDePedido(pedidoID) {
    const res = await fetch(`${ITENS_PEDIDO}/${pedidoID}/pedido`);

    if (!res.ok) {
        throw new Error("Falha ao listar itens do pedido.");
    }
    return res.json();
}

export async function atualizarItemPedido(ip) {
    const res = await fetch(`${ITENS_PEDIDO}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(ip)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar item pedido.");
    }
    return res.json();
}

export async function atualizarQuantidade(id, qtd) {
    const res = await fetch(`${ITENS_PEDIDO}/${id}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({qtd : qtd})
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar quantidade de item pedido.");
    }
    return res.json();
}

export async function deletarItemPedido(id) {
    const res = await fetch(`${ITENS_PEDIDO}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar item pedido.");
    }
    return res.json();
}

//===========================================================================
//metodos do usuario
//===========================================================================

export async function criarUsuario(usuario) {
    const res = await fetch(`${USUARIOS}`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(usuario)
    });

    if (!res.ok) {
        throw new Error("Falha ao criar usuário.");
    }
    return res.json();
}

export async function listarTodosUsuarios() {
    const res = await fetch(`${USUARIOS}`);

    if (!res.ok) {
        throw new Error("Falha ao listar usuários.");
    }
    return res.json();
}

export async function buscarUsuarioPorLoginSenha(login, senha) {
    const res = await fetch(`${USUARIOS}/login`, {
        method: 'POST',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify({ login, senha})
    });

    if (!res.ok) {
        throw new Error("Falha ao buscar usuário por login e senha.");
    }
    return res.json();
}

export async function atualizarUsuario(usuario) {
    const res = await fetch(`${USUARIOS}`, {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'},
        body: JSON.stringify(usuario)
    });

    if (!res.ok) {
        throw new Error("Falha ao atualizar usuário.");
    }
    return res.json();
}

export async function deletarUsuario(id) {
    const res = await fetch(`${USUARIOS}/${id}`, {
        method: 'DELETE'
    });

    if (!res.ok) {
        throw new Error("Falha ao deletar usuário.");
    }
    return res.json();
}