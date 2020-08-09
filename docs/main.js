let parla =
	'La vida se encuentra con muchas abservidades, dudas, preguntas sin responder y cosas que no podemos evitar, lo cual que para nosotros es algo que tenemos que soportar, pero siempre encontramos un camino que nos da felicidad, para poder olvidar todo los obstáculos, ya sea en el amor, cosas en que nos apasiona o un simple entretenimiento, cada quien tiene su forma de desahogarse, forma de dar consejos y formar de hacer fuerte una relación, en mi caso lo más importante es hacer fuerte la relación en los momentos triste, alegre, adolorido y todo lo que pueda hacer con ella o él, pero el mayor consejo que le puedo dar a mi amorcito en este momento duro para ella es este. No pienses que se ha ido, si algun dia visitar su tumba no llores, solo imagina que estoy durmiendo, te visitara con el alba, te abrazara con el viento, te besará con la lluvia y cantara para ti en silencio. Nunca pienses que se ha ido porque entonces… sí habrá muerto, solo recuerda todo los momentos juntos que pasamos porque lo importante de la vida es como la disfrute, nada es para siempre, pero se puede aprovechar el tiempo en lo que más quiere y con las personas que marcaron en tu vida, ahora te toca seguir adelante, puedes llorar porque se ha ido o puedes reír porque la ha vivido, puedes cerrar los ojos y rezar para que vuelva o puedes abrirlos y ver todo lo que te ha dejado, tu corazón puede estar vacío porque no lo puedes ver o puede estar lleno de amor con lo que compartiste con el, puedes llorar cerrar tu mente, sentir el vacío o puedes hacer lo que le gustaría a esa persona… sonreír, abrir los ojos, amar y seguir adelante....';

let texto = document.getElementById('texto');

let numero = 0;
let escribir = function () {
	setInterval(() => {
		texto.setAttribute('class', 'animated fadeIn');
		texto.textContent = parla.substring(0, numero);
		numero++;
	}, 100);
};

escribir();
