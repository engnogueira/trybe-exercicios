CREATE DATABASE IF NOT EXISTS `normalization` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `normalization`;

CREATE TABLE `funcionario` (
  `funcionario_id` int(2) NOT NULL ,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(30),
  `telefone` varchar(14),
  `data_cadastro` datetime
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `setor` (
  `setor_id` int(2) NOT NULL ,
  `setor` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `funcionario_setor` (
  `funcionario_id` int(2) NOT NULL ,
  `setor_id` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `funcionario` (`funcionario_id`, `nome`, `sobrenome`, `email`, `telefone`, `data_cadastro`) VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)98552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-05-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO `setor` (`setor_id`, `setor`) VALUES
(1, 'Administração'),
(2, 'Vendas'),
(3, 'Operacional'),
(4, 'Estratégico'),
(5, 'Marketing');

INSERT INTO `funcionario_setor` (`funcionario_id`, `setor_id`) VALUES
(12,1),
(12,2),
(13,3),
(14,2),
(14,4),
(15,5);

ALTER TABLE `funcionario`
  ADD PRIMARY KEY (`funcionario_id`),
  MODIFY `funcionario_id` int(2) NOT NULL AUTO_INCREMENT;
  
ALTER TABLE `setor`
  ADD PRIMARY KEY (`setor_id`),
  MODIFY `setor_id` int(2) NOT NULL AUTO_INCREMENT;
  
ALTER TABLE `funcionario_setor`
  ADD KEY `funcionario_id` (`funcionario_id`),
  ADD KEY `setor_id` (`setor_id`);

