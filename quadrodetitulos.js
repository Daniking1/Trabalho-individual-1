//declaração de vetores;
let brasileiro = [] //esse vetor mostra todos os campeões do campeonato brasileiro;
let copaDoBrasil = [] //esse vetor mostra todos os campeões da copa do Brasil;
let libertadores = [] //esse vetor mostra todos os campeões da copa Libertadores;
let lista = [] //esse vetor mostra a data de criação dos times;
//declaração de variável;
let times
//laço de repetição para times;
while (times != "sair") {
  times = prompt("Digite o nome de um time para saber os seus títulos: ou digite sair")//entrada para digitar um nome de um time e saber todos os seus títulos;

  if (times == "Palmeiras") {
    tituloBrasileiro = "O Palmeiras venceu o Campeonato Brasileiro 11 vezes sendo elas em: 1960, 1967, 1967, 1969, 1972, 1973, 1993, 1994, 2016, 2018 e 2022."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Santos") {
    tituloBrasileiro = "O Santos venceu o Campeonato Brasileiro 8 vezes sendo elas em: 1961, 1962, 1963, 1964, 1965, 1968, 2002 e 2004."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Flamengo") {
    tituloBrasileiro = "O Flamengo venceu o Campeonato Brasileiro 8 vezes sendo elas em: 1980, 1982, 1983, 1987, 1992, 2009, 2019 e 2020."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Corinthians") {
    tituloBrasileiro = "O Corinthians venceu o Campeonato Brasileiro 7 vezes sendo elas em: 1990, 1998, 1999, 2005, 2011, 2015 e 2017."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "São Paulo") {
    tituloBrasileiro = "O São Paulo venceu o Campeonato Brasileiro 6 vezes sendo elas em: 1977, 1986, 1991, 2006, 2007 e 2008."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Cruzeiro") {
    tituloBrasileiro = "O Cruzeiro venceu o Campeonato Brasileiro 4 vezes sendo elas em: 1966, 2003, 2013 e 2014."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Fluminense") {
    tituloBrasileiro = "O Fluminense venceu o Campeonato Brasileiro 4 vezes sendo elas em: 1970, 1984, 2010 e 2012."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Vasco") {
    tituloBrasileiro = "O Vasco venceu o Campeonato Brasileiro 4 vezes sendo elas em: 1974, 1989, 1997 e 2000."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Internacional") {
    tituloBrasileiro = "O Internacional venceu o Campeonato Brasileiro 3 vezes sendo elas em: 1975, 1976 e 1979."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Bahia") {
    tituloBrasileiro = "O Bahia venceu o Campeonato Brasileiro 2 vezes sendo elas em: 1959 e 1988."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Botafogo") {
    tituloBrasileiro = "O Botafogo venceu o Campeonato Brasileiro 2 vezes sendo elas em: 1968 e 1995."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Grêmio") {
    tituloBrasileiro = "O Grêmio venceu o Campeonato Brasileiro 2 vezes sendo elas em: 1981 e 1996."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Atlético-MG") {
    tituloBrasileiro = "O Atlético-MG venceu o Campeonato Brasileiro 2 vezes sendo elas em: 1971, 2021."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Athletico-PR") {
    tituloBrasileiro = "O Athletico-PR venceu o Campeonato Brasileiro 1 vez sendo ela em: 2001."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Coritiba") {
    tituloBrasileiro = "O Coritiba venceu o Campeonato Brasileiro 1 vez sendo ela em: 1985."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Guarani") {
    tituloBrasileiro = "O Guarani venceu o Campeonato Brasileiro 1 vez sendo ela em: 1978."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Sport") {
    tituloBrasileiro = "O Sport venceu o Campeonato Brasileiro 1 vez sendo ela em: 1987."
    brasileiro.push(tituloBrasileiro)
  }
  if (times == "Palmeiras") {
    tituloCopaDoBrasil = "O Palmeiras venceu a Copa do Brasil 4 vezes sendo elas em: 1998, 2012, 2015, 2020."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Santos") {
    tituloCopaDoBrasil = "O Santos venceu a Copa do Brasil 1 vez sendo ela em: 2010."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Flamengo") {
    tituloCopaDoBrasil = "O Flamengo venceu a Copa do Brasil 4 vezes sendo elas em: 1990, 2006, 2013 e 2022."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Corinthians") {
    tituloCopaDoBrasil = "O Corinthians venceu a Copa do Brasil 3 vezes sendo elas em: 1995, 2002, 2009."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Cruzeiro") {
    tituloCopaDoBrasil = "O Cruzeiro venceu a Copa do Brasil 6 vezes sendo elas em: 1993, 1996, 2000, 2003, 2017, 2018."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Fluminense") {
    tituloCopaDoBrasil = "O Fluminense venceu a Copa do Brasil 1 vez sendo ela em: 2007."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Vasco") {
    tituloCopaDoBrasil = "O Vasco venceu a Copa do Brasil 1 vez sendo ela em: 2011."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Internacional") {
    tituloCopaDoBrasil = "O Internacional venceu a Copa do Brasil 1 vez sendo ela em: 1992."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Grêmio") {
    tituloCopaDoBrasil = "O Grêmio venceu a Copa do Brasil 5 vezes sendo elas em: 1989, 1994, 1997, 2001, 2016."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Atlético-MG") {
    tituloCopaDoBrasil = "O Atlético-MG venceu a Copa do Brasil 2 vezes sendo elas em: 2014, 2021."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Athletico-PR") {
    tituloCopaDoBrasil = "O Athletico-PR venceu a Copa do Brasil 1 vez sendo ela em: 2019."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Sport") {
    tituloCopaDoBrasil = "O Sport venceu a Copa do Brasil 1 vez sendo ela em: 2008."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Criciúma") {
    tituloCopaDoBrasil = "O Criciúma venceu a Copa do Brasil 1 vez sendo ela em: 1991."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Juventude") {
    tituloCopaDoBrasil = "O Juventude venceu a Copa do Brasil 1 vez sendo ela em: 1999."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Paulista") {
    tituloCopaDoBrasil = "O Paulista venceu a Copa do Brasil 1 vez sendo ela em: 2005."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Santo André") {
    tituloCopaDoBrasil = "O Santo André venceu a Copa do Brasil 1 vez sendo ela em: 2004."
    copaDoBrasil.push(tituloCopaDoBrasil)
  }
  if (times == "Palmeiras") {
    tituloLibertadores = "O Palmeiras venceu a Copa Libertadores 3 vezes sendo elas em: 1999, 2020 e 2021."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Santos") {
    tituloLibertadores = "O Santos venceu a Copa Libertadores 3 vezes sendo elas em: 1962, 1963 e 2011."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Flamengo") {
    tituloLibertadores = "O Flamengo venceu a Copa Libertadores 3 vezes sendo elas em: 1981, 2019 e 2022."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Corinthians") {
    tituloLibertadores = "O Corinthians venceu a Copa Libertadores 1 vez sendo ela em: 2012."
    libertadores.push(tituloLibertadores)
  }
  if (times == "São Paulo") {
    tituloLibertadores = "O São Paulo venceu a Copa Libertadores 3 vezes sendo elas em: 1992, 1993 e 2005."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Cruzeiro") {
    tituloLibertadores = "O Cruzeiro venceu a Copa Libertadores 2 vezes sendo elas em: 1976 e 1997."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Vasco") {
    tituloLibertadores = "O Vasco venceu a Copa Libertadores 1 vez sendo ela em: 1998."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Internacional") {
    tituloLibertadores = "O Internacional venceu a Copa Libertadores 2 vezes sendo elas em: 2006 e 2010."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Grêmio") {
    tituloLibertadores = "O Grêmio venceu a Copa Libertadores vezes 3 sendo elas em: 1983, 1995 e 2017."
    libertadores.push(tituloLibertadores)
  }
  if (times == "Atlético-MG") {
    tituloLibertadores = "O Atlético-MG venceu a Copa Libertadores 1 vez sendo ela em: 2013."
    libertadores.push(tituloLibertadores)
  }
  let data
  //laço de repetição para data;
  while (data != "sair") {
    data = prompt("Digite o nome de um time para saber a data da sua criação: ou digite sair")//entrada para saber a data de criação de um time;

    if (data == "Palmeiras") {
      criacao = "A Sociedade Esportiva Palmeiras foi fundada em 26 de agosto de 1914."
      lista.push(criacao)
    }
    if (data == "Santos") {
      criacao = "O Santos Futebol Clube foi fundado em 14 de abril de 1912."
      lista.push(criacao)
    }
    if (data == "Flamengo") {
      criacao = "O Clube de Regatas do Flamengo foi fundado em 17 de novembro de 1895."
      lista.push(criacao)
    }
    if (data == "Corinthians") {
      criacao = "O Sport Club Corinthians Paulista foi fundado em 1 de setembro de 1910."
      lista.push(criacao)
    }
    if (data == "São Paulo") {
      criacao = "O São Paulo Futebol Clube foi fundado em 25 de janeiro de 1930."
      lista.push(criacao)
    }
    if (data == "Cruzeiro") {
      criacao = "O Cruzeiro Esporte Clube foi fundado em 2 de janeiro de 1921."
      lista.push(criacao)
    }
    if (data == "Fluminense") {
      criacao = "O Fluminense Football Club foi fundado em 21 de julho de 1902."
      lista.push(criacao)
    }
    if (data == "Vasco") {
      criacao = "O Club de Regatas Vasco da Gama foi fundado em 21 de agosto de 1898."
      lista.push(criacao)
    }
    if (data == "Internacional") {
      criacao = "O Sport Club Internacional foi fundado em 4 de abril de 1909."
      lista.push(criacao)
    }
    if (data == "Bahia") {
      criacao = "O Esporte Clube Bahia foi fundado em 1 de janeiro de 1931."
      lista.push(criacao)
    }
    if (data == "Botafogo") {
      criacao = "O Botafogo de Futebol e Regatas foi fundado em 12 de agosto de 1904."
      lista.push(criacao)
    }
    if (data == "Grêmio") {
      criacao = "O Grêmio Foot-Ball Porto Alegrense foi fundado em 15 de setembro de 1903."
      lista.push(criacao)
    }
    if (data == "Atlético-MG") {
      criacao = "O Clube Atlético Mineiro foi fundado em 25 de março de 1908."
      lista.push(criacao)
    }
    if (data == "Athletico-PR") {
      criacao = "O Club Athletico Paranaense foi fundado em 26 de março de 1924."
      lista.push(criacao)
    }
    if (data == "Coritiba") {
      criacao = "O Coritiba Foot Ball Club foi fundado em 12 de outubro de 1909."
      lista.push(criacao)
    }
    if (data == "Guarani") {
      criacao = "O Guarani Futebol Clube foi fundado em 2 de abril de 1911."
      lista.push(criacao)
    }
    if (data == "Sport") {
      criacao = "O Sport Club do Recife foi fundado em 13 de maio de 1905."
      lista.push(criacao)
    }
    if (data == "Criciúma") {
      criacao = "O Criciúma Esporte Clube foi fundado em 13 de maio de 1947."
      lista.push(criacao)
    }
    if (data == "Juventude") {
      criacao = "O Esporte Clube Juventude foi fundado em 29 de junho de 1913."
      lista.push(criacao)
    }
    if (data == "Paulista") {
      criacao = "O Paulista Futebol Clube foi fundado em 17 de maio de 1909."
      lista.push(criacao)
    }
    if (data == "Santo André") {
      criacao = "O Esporte Clube Santo André foi fundado em 18 de setembro de 1967."
      lista.push(criacao)
    }
  }
}
//saídas;
console.log(brasileiro)//saída do vetor dos campeões do campeonato brasileiro;
console.log(copaDoBrasil)//saída do vetor dos campeões da copa do Brasil;
console.log(libertadores)//saída do vetor dos campeões da libertadores;
console.log(lista)//saída da data de criação dos times;
