DROP DATABASE IF EXISTS alpha_investimentos_api_db;

CREATE DATABASE alpha_investimentos_api_db;

USE alpha_investimentos_api_db;

CREATE TABLE alpha_investimentos_api_db.ativo(
    cod_ativo INT PRIMARY key AUTO_INCREMENT,
    nom_ativo VARCHAR(30) NOT NULL,
    val_ativo DECIMAL(8, 2) NOT NULL
) engine = InnoDB;

INSERT INTO
    alpha_investimentos_api_db.ativo (nom_ativo, val_ativo)
VALUES
    ('AZUL4', 14.41);

INSERT INTO
    alpha_investimentos_api_db.ativo (nom_ativo, val_ativo)
VALUES
    ('PETR4', 29.17);

INSERT INTO
    alpha_investimentos_api_db.ativo (nom_ativo, val_ativo)
VALUES
    ('VALE3', 67.39);

CREATE TABLE alpha_investimentos_api_db.cliente(
    cod_cliente INT PRIMARY key AUTO_INCREMENT,
    nom_cliente VARCHAR(30) NOT NULL,
    end_email VARCHAR(100) NOT NULL,
    dsc_senha VARCHAR(15) NOT NULL
) engine = InnoDB;

INSERT INTO
    alpha_investimentos_api_db.cliente (nom_cliente, end_email, dsc_senha)
VALUES
    ('admin', 'admin@email.com', 'admin@123');

CREATE TABLE alpha_investimentos_api_db.carteira_corretora(
    cod_ativo INT PRIMARY key,
    qtd_ativo_disponivel INT NOT NULL,
    FOREIGN KEY(cod_ativo) REFERENCES ativo(cod_ativo)
) engine = InnoDB;

INSERT INTO
    alpha_investimentos_api_db.carteira_corretora (cod_ativo, qtd_ativo_disponivel)
VALUES
    (1, 1500);

INSERT INTO
    alpha_investimentos_api_db.carteira_corretora (cod_ativo, qtd_ativo_disponivel)
VALUES
    (2, 1000);

INSERT INTO
    alpha_investimentos_api_db.carteira_corretora (cod_ativo, qtd_ativo_disponivel)
VALUES
    (3, 2000);

CREATE TABLE alpha_investimentos_api_db.conta(
    cod_conta INT PRIMARY key AUTO_INCREMENT,
    cod_cliente INT NOT NULL,
    val_saldo DECIMAL(8, 2),
    FOREIGN KEY(cod_cliente) REFERENCES cliente(cod_cliente)
) engine = InnoDB;

INSERT INTO
    alpha_investimentos_api_db.conta (cod_cliente, val_saldo)
VALUES
    (1, 1000);

CREATE TABLE alpha_investimentos_api_db.carteira_cliente(
    cod_ativo INT,
    cod_cliente INT,
    qtd_ativo INT NOT NULL,
    FOREIGN KEY(cod_ativo) REFERENCES ativo(cod_ativo),
    FOREIGN KEY(cod_cliente) REFERENCES cliente(cod_cliente),
    CONSTRAINT PRIMARY KEY (cod_ativo, cod_cliente)
) engine = InnoDB;

CREATE TABLE alpha_investimentos_api_db.tipo_operacao(
    cod_tipo_operacao INT PRIMARY key AUTO_INCREMENT,
    nom_operacao VARCHAR(30) NOT NULL
) engine = InnoDB;

INSERT
    alpha_investimentos_api_db.tipo_operacao (nom_operacao)
VALUES
    ('COMPRA');

INSERT
    alpha_investimentos_api_db.tipo_operacao (nom_operacao)
VALUES
    ('VENDA');

CREATE TABLE alpha_investimentos_api_db.cliente_historico_operacao(
    cod_cliente INT NOT NULL,
    cod_ativo INT NOT NULL,
    cod_tipo_operacao INT NOT NULL,
    qtd_ativo INT NOT NULL,
    val_ativo DECIMAL(8, 2),
    dat_operacao DATETIME DEFAULT current_timestamp NOT NULL,
    FOREIGN KEY(cod_ativo) REFERENCES ativo(cod_ativo),
    FOREIGN KEY(cod_cliente) REFERENCES cliente(cod_cliente),
    FOREIGN KEY(cod_tipo_operacao) REFERENCES tipo_operacao(cod_tipo_operacao)
) engine = InnoDB;