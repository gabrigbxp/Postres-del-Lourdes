export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "Recetas" | "Consejos" | "Novedades";
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "bizcochuelo-esponjoso",
    title: "El secreto de un bizcochuelo perfecto",
    date: "2024-04-15",
    excerpt:
      "Muchas veces me preguntan cómo logro que mis tortas queden tan esponjosas. Hoy te cuento el truco que aprendí con años de práctica.",
    content: `Muchas veces me preguntan cómo logro que mis tortas queden tan esponjosas. El secreto está en dos cosas: la temperatura de los ingredientes y el orden en que los incorporás.

**Ingredientes a temperatura ambiente:** Los huevos, la manteca y la leche tienen que estar a temperatura ambiente. Si los sacás directo de la heladera, la mezcla se corta y el resultado final es más pesado.

**El orden importa:** Siempre cremar la manteca con el azúcar hasta que quede una crema pálida y esponjosa (unos 5-7 minutos). Luego incorporar los huevos de a uno, batiendo bien entre cada uno. Finalmente, alternar la harina tamizada con el líquido (leche o jugo), empezando y terminando con harina.

**Nunca batas de más:** Una vez que incorporaste la harina, mezclá lo justo y necesario. El gluten desarrollado en exceso endurece el bizcochuelo.

Con estas tres reglas, tus tortas van a quedar siempre perfectas.`,
    category: "Recetas",
    image: "./fotos/20170514_110706.jpg",
  },
  {
    id: "alfajores-maicena",
    title: "Alfajores de maicena: receta clásica",
    date: "2024-03-20",
    excerpt:
      "Los alfajores de maicena son un clásico argentino que nunca falla. Te comparto mi receta personal con el balance perfecto entre galleta y relleno.",
    content: `Los alfajores de maicena son uno de mis productos más pedidos. La clave está en lograr una galleta que se derrita en la boca pero que aguante el relleno.

**Para las tapas:** 200g de maicena, 150g de harina, 150g de azúcar impalpable, 150g de manteca, 3 yemas, 1 cdita de esencia de vainilla, ralladura de limón y 1 cdita de polvo de hornear. Mezclar la maicena, harina y polvo de hornear. Aparte, cremar la manteca con el azúcar, agregar las yemas y la vainilla. Unir todo hasta obtener una masa tierna. Estirar y cortar medallones. Hornear a 180°C por 12 minutos, hasta que estén firmes pero sin dorarse.

**Para el armado:** Rellenar con dulce de leche repostero (no use el común, queda muy líquido), unir dos tapas y bañar en chocolate cobertura o terminar con azúcar impalpable.`,
    category: "Recetas",
    image: "./fotos/20170609_003546.jpg",
  },
  {
    id: "porcelana-fria-inicio",
    title: "Mis primeros pasos en la porcelana fría",
    date: "2024-02-10",
    excerpt:
      "La porcelana fría fue el arte que cambió mi manera de ver la repostería. Hoy te cuento cómo empecé y qué herramientas son indispensables para comenzar.",
    content: `Empecé con la porcelana fría casi por casualidad. Una cliente me pidió una torta con un muñeco especial y no encontraba en ningún lado lo que ella quería. Así que decidí hacerlo yo misma.

**¿Qué es la porcelana fría?** Es una masa moldeable a base de PVA (pegamento blanco), maicena y aceite. No necesita hornearse, se seca al aire en 24-48 horas y queda dura y liviana.

**Herramientas básicas:** palillos de modelado, rodillo pequeño, estecas, cortantes de distintas formas y pinturas acrílicas para colorear.

**Mi consejo:** empezá con flores simples. El rosa tiene cinco pétalos iguales y te enseña a trabajar el grosor de la masa. Una vez que dominás las flores, podés pasar a figuras más complejas.

Lo más gratificante es la cara de las personas cuando ven la figura terminada. Es puro amor en cada pieza.`,
    category: "Consejos",
    image: "./fotos/20170905_203949.jpg",
  },
  {
    id: "tips-decoracion-tortas",
    title: "5 tips para decorar tortas en casa",
    date: "2024-01-25",
    excerpt:
      "Decorar una torta no requiere equipamiento profesional. Con estas herramientas básicas y mis consejos, vas a lograr resultados increíbles.",
    content: `Después de años de práctica, aprendí que lo más importante no es tener muchas herramientas sino saber usar bien las pocas que tenés.

**1. La espátula angular** es tu mejor amiga para cubrir una torta de manera pareja. Si no tenés, podés usar el dorso de una cuchara grande.

**2. El frío es tu aliado:** antes de decorar, dejá la torta enfriar completamente. Mejor aún, guardala una hora en la heladera. El frío hace que la crema agarre mejor.

**3. Nivelá siempre:** usá un cuchillo de sierra para emparejar la superficie. Una torta nivelada se decora infinitamente mejor.

**4. La manga descartable:** en vez de comprar manga profesional, podés usar una bolsa de plástico de buena calidad y cortarle un puntito en la esquina.

**5. Menos es más:** una decoración simple y bien ejecutada siempre va a superar a una decoración cargada y desprolija. Dominá primero lo básico.`,
    category: "Consejos",
    image: "./fotos/20170608_234340.jpg",
  },
  {
    id: "desayunos-sorpresa",
    title: "Desayunos sorpresa: un regalo diferente",
    date: "2023-12-05",
    excerpt:
      "Los desayunos sorpresa se convirtieron en uno de mis servicios más populares. Descubrí cómo armar uno que realmente impresione.",
    content: `Los desayunos sorpresa empezaron como algo que hacía solo para amigos y familia. Hoy son uno de los pedidos más frecuentes, especialmente para cumpleaños y aniversarios.

**¿Qué incluir en un desayuno sorpresa?** La clave es la variedad: algo dulce, algo salado, una bebida caliente (infusión o café) y algo especial que sea único (medialunas caseras, mermelada artesanal, un pequeño postre).

**La presentación lo es todo:** usá una bandeja de madera, cestita o caja decorada. Agregá servilletas de tela, una tarjetita escrita a mano y un pequeño arreglo de flores.

**Mis recomendados para incluir:** medialunas de manteca, pastafrola individual, alfajores, pan casero con mermelada, y un cupcake decorado con el motivo de la ocasión.

Cada desayuno es único porque cada persona que lo recibe es única. Ese es el valor de lo artesanal.`,
    category: "Novedades",
    image: "./fotos/20170518_072430.jpg",
  },
];
