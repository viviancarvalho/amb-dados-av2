create database sistema_delivery;
use sistema_delivery;

#CRIAR ROLES!!!

create table Usuario (
	UsuarioID int auto_increment primary key,
    login varchar(10),
    senha varchar(10),
    tipo enum("Cliente", "Restaurante", "Entregador")
);

create table Cliente (
	ClienteID int auto_increment primary key,
    nome varchar(50) not null,
    cpf char(11) not null,
    endereco varchar(50) not null,
    telefone varchar(20)
);

create table Restaurante (
	RestauranteID int auto_increment primary key,
    nome varchar(50) not null,
    tipo_cozinha varchar(50) not null,
    telefone varchar(20) not null,
    endereco varchar(100) not null,
    cnpj varchar(18) not null
);

create table Entregador (
	EntregadorID int auto_increment primary key,
    nome varchar(50) not null,
    cpf char(11) not null,
    telefone varchar(20),
    veiculo varchar(50),
    disponivel boolean default true
);

create table Pedido (
	PedidoID int auto_increment primary key,
    ClienteID int,
    RestauranteID int,
    EntregadorID int,
    data_hora datetime default current_timestamp,
    valor_total decimal (10, 2) default 0,
    status enum("Em preparo", "A caminho", "Entregue") default ("Em preparo"),
    foreign key (ClienteID) references Cliente(ClienteID),
    foreign key (RestauranteID) references Restaurante(RestauranteID),
    foreign key (EntregadorID) references Entregador(EntregadorID)
);

create table Item (
	ItemID int auto_increment primary key,
    RestauranteID int,
    nome varchar(30) not null,
    descricao varchar(100),
    preco decimal (8, 2),
    foreign key (RestauranteID) references Restaurante(RestauranteID)
);

create table ItemPedido (
	ItemPedidoID int auto_increment primary key,
    ItemID int,
    PedidoID int,
    quantidade int default 1,
    preco_unitario decimal(8, 2),
    foreign key (ItemID) references Item(ItemID),
    foreign key (PedidoID) references Pedido(PedidoID)
);

delimiter //
create trigger calcular_valor_total
after insert on ItemPedido
for each row
begin
	update Pedido
    set valor_total = (
		select sum(quantidade * preco_unitario)
        from ItemPedido
        where PedidoID = new.PedidoID
    )
    where PedidoID = new.PedidoID;
end//
delimiter ;

delimiter //
create trigger atualizar_disponibilidade_entregador
after insert on Pedido
for each row
begin

if new.status = "A caminho" then
	update Entregador
    set disponivel = false
    where EntregadorID = new.EntregadorID;
elseif new.status = "Entregue" then
	update Entregador
    set disponivel = true
    where EntregadorID = new.EntregadorID;
end if;
end//
delimiter ;

delimiter //
create trigger criar_usuario_cliente_automatico
after insert on Cliente
for each row
begin
	insert into Usuario (login, senha, tipo) values (
		
    );
end;
delimiter ;

delimiter //
create trigger criar_usuario_rest_automatico
after insert on Restaurante
for each row
begin
	insert into Usuario (login, senha, tipo) values (
		
    );
end;
delimiter ;

delimiter //
create trigger criar_usuario_entreg_automatico
after insert on Entregador
for each row
begin
	insert into Usuario (login, senha, tipo) values (
		
    );
end;
delimiter ;