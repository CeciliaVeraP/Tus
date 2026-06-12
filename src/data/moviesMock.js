const moviesMock = [
  {
    category: "Acción",
    movies: [
      {
        id: 1,
        title: "Mad Max: Fury Road",
        year: "2015",
        overview:
          "En un mundo postapocalíptico, Max se une a Furiosa en una peligrosa huida a través del desierto."
      },
      {
        id: 2,
        title: "John Wick",
        year: "2014",
        overview:
          "Un exasesino regresa al mundo criminal en busca de venganza tras una tragedia personal."
      },
      { id: 3, title: "Gladiator", year: "2000" },
      { id: 4, title: "Die Hard", year: "1988" },
      {
        id: 5,
        title: "The Dark Knight",
        year: "2008",
        overview:
          "Batman enfrenta al Joker, un criminal que busca sumir Gotham en el caos."
      },
      { id: 6, title: "Top Gun: Maverick", year: "2022" },
    ],
  },

  {
    category: "Comedia",
    movies: [
      { id: 7, title: "Superbad", year: "2007" },
      { id: 8, title: "The Mask", year: "1994" },
      { id: 9, title: "Ted", year: "2012" },
      { id: 10, title: "The Hangover", year: "2009" },
      {
        id: 11,
        title: "Shrek",
        year: "2001",
        overview:
          "Un ogro solitario emprende una aventura para rescatar a una princesa y recuperar la tranquilidad de su pantano."
      },
      { id: 12, title: "White Chicks", year: "2004" },
    ],
  },

  {
    category: "Drama",
    movies: [
      {
        id: 13,
        title: "Interstellar",
        year: "2014",
        overview:
          "Un grupo de exploradores viaja a través de un agujero de gusano para encontrar un nuevo hogar para la humanidad."
      },
      { id: 14, title: "The Green Mile", year: "1999" },
      { id: 15, title: "Whiplash", year: "2014" },
      { id: 16, title: "Fight Club", year: "1999" },
      {
        id: 17,
        title: "Joker",
        year: "2019",
        overview:
          "La historia de Arthur Fleck y su transformación en uno de los villanos más conocidos de Gotham."
      },
      { id: 18, title: "Forrest Gump", year: "1994" },
    ],
  },

  {
    category: "Animación",
    movies: [
      {
        id: 19,
        title: "Toy Story",
        year: "1995",
        overview:
          "Los juguetes de Andy cobran vida cuando nadie los observa y viven increíbles aventuras."
      },
      { id: 20, title: "Coco", year: "2017" },
      { id: 21, title: "Up", year: "2009" },
      { id: 22, title: "Frozen", year: "2013" },
      { id: 23, title: "Moana", year: "2016" },
      { id: 24, title: "Inside Out", year: "2015" },
    ],
  },

  {
    category: "Ciencia ficción",
    movies: [
      {
        id: 25,
        title: "Blade Runner 2049",
        year: "2017",
        overview:
          "Un nuevo blade runner descubre un secreto que podría cambiar el futuro de la sociedad."
      },
      { id: 26, title: "Arrival", year: "2016" },
      {
        id: 27,
        title: "The Matrix",
        year: "1999",
        overview:
          "Un programador descubre que la realidad que conoce podría ser una simulación."
      },
      { id: 28, title: "Dune", year: "2021" },
      { id: 29, title: "Alien", year: "1979" },
      {
        id: 30,
        title: "Avatar",
        year: "2009",
        overview:
          "Un exmarine llega al planeta Pandora y queda dividido entre dos mundos enfrentados."
      },
    ],
  },

  {
    category: "Terror",
    movies: [
      {
        id: 31,
        title: "The Conjuring",
        year: "2013",
        overview:
          "Dos investigadores paranormales ayudan a una familia aterrorizada por una presencia oscura."
      },
      { id: 32, title: "It", year: "2017" },
      { id: 33, title: "Insidious", year: "2010" },
      { id: 34, title: "Hereditary", year: "2018" },
      { id: 35, title: "Smile", year: "2022" },
      { id: 36, title: "The Ring", year: "2002" },
    ],
  },
];

export default moviesMock;