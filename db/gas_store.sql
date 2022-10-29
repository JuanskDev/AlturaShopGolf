DROP DATABASE IF EXISTS `gas_store`;
CREATE DATABASE IF NOT EXISTS `gas_store`;
USE `gas_store`;
​
CREATE TABLE `productos` (
   `id` INT,
   `nombre` VARCHAR(255),
   `marca` VARCHAR(255),
   `modelo` VARCHAR(255),
   `agarre` VARCHAR(255),
   `tipoDeVara` VARCHAR(255),
   `tipoDeBolsa` VARCHAR(255),
   `hierroTipoDeConjunto` VARCHAR(255),
   `precio` DECIMAL,
   `descuento` INT,
   `stock` INT,
   `color` VARCHAR(255),
   `imagen` VARCHAR(255),
   `categoria_id` INT,
   PRIMARY KEY (`id`)
);
CREATE TABLE `campos` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `direccion` VARCHAR(255),
   `telefono` INT,
   `imagen` VARCHAR(255),
   PRIMARY KEY (`id`)
);
CREATE TABLE `usuarios` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `apellido` VARCHAR(255),
   `correo` VARCHAR(255),
   `telefono` INT,
   `contraseña` INT,
   `categoria` VARCHAR(255),
   PRIMARY KEY (`id`)
);
CREATE TABLE `categorias` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);
ALTER TABLE `productos` ADD CONSTRAINT `FK_98ecda8f-731e-4d83-afcf-841a91868331` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`)  ;