-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 28-10-2020 a las 18:04:51

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto-frontend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `email` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `asunto` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `mensaje` text COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`id`, `nombre`, `email`, `asunto`, `mensaje`) VALUES
(1, 'andres', 'andres@email.com', 'prueba api', 'hola mundo'),
(2, 'Andres', 'andres@mail.com', 'Smart Tech', 'Probando desde el frontend'),
(3, 'Joe', 'joe@mail.com', 'Marketing', 'Quiero que me lleven mis redes sociales'),
(4, 'Karen', 'karen@mail.com', 'Dessarrollo Web', 'Hola. Me llamo Karen, estoy interesada en uno de sus paquetes, en especifico el Innovador Smart.'),
(5, 'Jhenny', 'ejemplo@mail.con', 'Aprender', 'Quiero aprender marketing'),
(6, 'Juan', 'juan@mail.com', 'Desarrollo móvil', 'Hola, me gustaría que me ayudaran con mi app móvil. ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `newsletters`
--

CREATE TABLE `newsletters` (
  `id` int(30) NOT NULL,
  `email` varchar(30) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `newsletters`
--

INSERT INTO `newsletters` (`id`, `email`) VALUES
(1, 'andres@email.com'),
(2, 'andres@mail.com'),
(3, 'briceno@mail.com'),
(4, 'example@mail.con'),
(5, 'andresbriceno@uvm.edu.ve'),
(6, 'jose@mail.com'),
(7, 'example@mail.com'),
(8, 'lola@mail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id` int(30) NOT NULL,
  `titulo` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `clase` varchar(30) COLLATE utf16_spanish_ci NOT NULL,
  `descripcion` text COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `titulo`, `clase`, `descripcion`) VALUES
(1, 'Marketing Digitial', 'lni-cog', 'Deja que nuestros expertos aumenten tus ventas y gestionen tus redes.'),
(2, 'Escritores De Contenido', 'lni-pencil', '         La forma en la que te comunicas dice mucho, es por ello que tenemos\r\n          expertos que te ayudarán a crear contenido de valor.'),
(3, 'Código Fresco', 'lni-cog', '    Para nuestros desarrolladores es importante que tu Website este bien\r\n          estructurada y posicionada, te ayudaremos en este proceso.'),
(4, 'Diseño Gráfico', 'lni-stats-up', '          Ofrecemos una gran variedad de diseños y personalización de marca para\r\n          que tus clientes se sientan más conectados con tu marca'),
(5, 'Análisis De Datos', 'lni-layers', ' De nada sirve que tu cuenta tenga miles de seguidores si n aumentan\r\n          tus ventas, recuerda que todo lo que se mide se puede mejorar.'),
(6, 'Desarrollo de App Móviles', 'lni-tab', 'Si sueñas con crear la app móvil de tu emprendimiento nuestros\r\n                programadores pueden hacerlo realidad.'),
(7, 'Email Marketing', 'lni lni-mailchimp', 'Creamos campañas de marketing automatizadas para que obtengas más clientes y tu negocio crezca inteligentemente.'),
(8, 'Tecnología Moderna', 'lni lni-javascript', 'Nuestro equipo de developers utilizan las mejores tecnologías web para crear trabajos profesionales.'),
(9, 'Desarrollo de Video Juegos', 'lni lni-game', 'Nos complace anunciar nuestro reciente servicio. Desarrollo de vídeo juegos para que puedes distribuirlo con tu marca cuantas veces quieras.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('TRF38MRFdbq_d-83SgOfEIYp07sKyvV4', 1604005417, '{\"cookie\":{\"originalMaxAge\":86399999,\"expires\":\"2020-10-29T21:03:37.130Z\",\"httpOnly\":true,\"path\":\"/\"},\"admin\":true,\"user\":\"andres\"}'),
('VIkwzQ7_oZD6lrmqwrUl5otoF58Bf9bp', 1603948749, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-10-29T05:19:09.162Z\",\"httpOnly\":true,\"path\":\"/\"},\"admin\":true,\"user\":\"Jose\"}'),
('lAFBAyRZoHnuk_qxR6qLf6NzZPxsrAcy', 1604003089, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2020-10-29T20:24:48.988Z\",\"httpOnly\":true,\"path\":\"/\"},\"admin\":true,\"user\":\"andres\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(20) NOT NULL,
  `usuario` varchar(20) COLLATE utf16_spanish_ci NOT NULL,
  `contraseña` varchar(90) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contraseña`) VALUES
(2, 'andres', '$2b$10$AWnG9Ybzpe7KPQTDPLsqneZzxV5B4ahKZBM3aKXKmVmAryuXdu0rC'),
(3, 'Jose', '$2b$10$OuLUGeZhfFLf/5KjQjUpMu4GOePvu4vzke7g5fIqhWLSDlA6WNRy2'),
(18, 'alex', '$2b$10$kNde0I00NqEAm5KYmI9MwuUz9/NGhQ5oaPFFkyDAvESruTPoWDhdi'),
(27, 'Ricardo', '$2b$10$VDu6MOTt8/0x0edcTwCBGOXfL3jMdzPf6OzJxNy552f5DOo3IVejm'),
(28, 'clark', '$2b$10$sWom1o9hhSl5RFPxUFOtj.bquZhLuDK3rk1SpVajq.KEqWHZVp1BK');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
