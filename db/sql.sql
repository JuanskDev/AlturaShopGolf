CREATE TABLE `campos` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `direccion` VARCHAR(255),
   `telefono` VARCHAR(255),
   `imagen` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `usuarios` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   `apellido` VARCHAR(255),
   `correo` VARCHAR(255),
   `contraseña` VARCHAR(255),
   `telefono` VARCHAR(255),
   `rol` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `productos` (
   `id` INT AUTO_INCREMENT,
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

CREATE TABLE `categorias` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);


ALTER TABLE `productos` ADD CONSTRAINT `FK_6844f3b3-a985-48ba-a5a7-2c164d9a2d23` FOREIGN KEY (`id`) REFERENCES `categorias`(`id`)  ;
