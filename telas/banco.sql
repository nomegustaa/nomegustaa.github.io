create database banco_pop;

use banco_pop;

create table usuario(

id int primary key auto_increment,
nome varchar(100) not null,
sobrenome varchar(100) not null,
cpf varchar(15) not null,
email varchar(200) not null,
senha varchar(200) not null
);