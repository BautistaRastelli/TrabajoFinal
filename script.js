let data = [
    "Aire Libre - Menú Inicial > Aire Libre",
    "Parques - Menú Inicial > Aire Libre > Parques",
    "Parque Saavedra - Menú Inicial > Aire Libre > Parques > Parque Saavedra",
    "Parque Vucetich - Menú Inicial > Aire Libre > Parques > Parque Vucetich",
    "Parque Castelli - Menú Inicial > Aire Libre > Parques > Parque Castelli",
    "Parque Alberti - Menú Inicial > Aire Libre > Parques > Parque Alberti",
    "Parque Ecológico - Menú Inicial > Aire Libre > Parques > Parque Ecológico",
    "Plazas - Menú Inicial > Aire Libre > Plazas",
    "Plaza Belgrano- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Olazábal- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Azcuénaga- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Malvinas- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Moreno- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza San Martín- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Rivadavia- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Italia- Menú Inicial > Aire Libre > Plazas > Plaza",
    "Plaza Paso- Menú Inicial > Aire Libre > Plazas > Plaza",
    "República de los Niños - Menú Inicial > Aire Libre > República de los Niños",
    "Paseo del Bosque - Menú Inicial > Aire Libre > Paseo del Bosque",
    "Compras - Menú Inicial > Compras", 
    "Calle 12 - Menú Inicial > Compras > Calle 12", 
    "Calle 8 - Menú Inicial > Compras > Calle 8", 
    "La Plata SoHo - Menú Inicial > Compras > La Plata SoHo", 
    "Cantilo - Menú Inicial > Compras > Cantilo", 
    "Centro Comercial Los Hornos - Menú Inicial > Compras > Centro Comercial Los Hornos", 
    "Arte - Menú Inicial > Arte",
    "Recitales - Menú Inicial > Arte > Recitales",
    "Ferias - Menú Inicial > Arte > Ferias",
    "Pintura - Menú Inicial > Arte > Pintura",
    "Baile - Menú Inicial > Arte > Baile", 
    "Gastronomía - Menú Inicial > Gastronomía", 
    "Restaurantes - Menú Inicial > Gastronomía > Restaurantes",
    "Meriendas - Menú Inicial > Gastronomía > Meriendas",
    "Tenedor Libre - Menú Inicial > Gastronomía > Tenedor Libre",
    "El Retiro - Menú Inicial > Gastronomía > Tenedor Libre > El Retiro",
    "Parrillas - Menú Inicial > Gastronomía > Parrillas",
    "Lo de Jorge - Menú Inicial > Gastronomía > Parrillas > Lo de Jorge",
    "Lo de Seba - Menú Inicial > Gastronomía > Parrillas > Lo de Seba",
    "El Rodeo - Menú Inicial > Gastronomía > Parrillas > El Rodeo",
    "Hoteles - Menú Inicial > Gastronomía > Hoteles",
    "Grand Brizo (Tierra) - Menú Inicial > Gastronomía > Hoteles > Grand Brizo",
    "Dazzler (Serena) - Menú Inicial > Gastronomía > Hoteles > Dazzler",
    "Howard Johnson - Menú Inicial > Gastronomía > Hoteles > Howard Johnson",
    "Land Plaza - Menú Inicial > Gastronomía > Hoteles > Land Plaza",
    "Mercado Baxar - Menú Inicial > Gastronomía > Mercado Baxar",
    "Pizzerías - Menú Inicial > Gastronomía > Pizzerías",
    "Paesano - Menú Inicial > Gastronomía > Pizzerías > Paesano",
    "La Costa - Menú Inicial > Gastronomía > Pizzerías > La Costa",
    "Bacci - Menú Inicial > Gastronomía > Pizzerías > Bacci",
    "El Pasillo - Menú Inicial > Gastronomía > Pizzerías > El Pasillo",
    "Heladerías - Menú Inicial > Gastronomía > Heladerías",
    "Thionis - Menú Inicial > Gastronomía > Heladerías > Thionis",
    "Giulietta - Menú Inicial > Gastronomía > Heladerías > Giulietta",
    "Il Capo - Menú Inicial > Gastronomía > Heladerías > Il Capo",
    "Lucciano's - Menú Inicial > Gastronomía > Heladerías > Lucciano's",
    "Vippento - Menú Inicial > Gastronomía > Heladerías > Vippento",
    "Cultura - Menú Inicial > Cultura", 
    "Museos - Menú Inicial > Cultura > Museos",
    "Museo de Ciencias Naturales - Menú Inicial > Cultura > Museos > Museo de Ciencias Naturales", 
    "Museo de Física - Menú Inicial > Cultura > Museos > Museo de Física", 
    "Museo Dardo Rocha - Menú Inicial > Cultura > Museos >", 
    "Museo Fundación Catedral - Menú Inicial > Cultura > Museos > Museo Fundación Catedral", 
    "Logia Masónica - Menú Inicial > Cultura > Museos > Logia Masónica",  
    "Monumentos - Menú Inicial > Cultura > Monumentos",
    "Catedral - Menú Inicial > Cultura > Monumentos > Catedral",
    "Monumento a San Martín - Menú Inicial > Cultura > Monumentos > Monumento a San Martín",
    "Estauas de Plaza Moreno - Menú Inicial > Cultura > Monumentos > Estatuas de Plaza Moreno",
    "Monumento a los Caídos en Malvinas - Menú Inicial > Cultura > Monumentos > Monumento a los Caídos en Malvinas",
    "Cementerio de La Plata - Menú Inicial > Cultura > Cementerio de La Plata", 
    "Biblioteca Pública - Menú Inicial > Cultura > Biblioteca Pública", 
    "Deportes - Menú Inicial > Deportes",
    "Estadios - Menú Inicial > Deportes > Estadios",
    "Estadio Ciudad de La Plata (Estadio Único) - Menú Inicial > Deportes > Estadios > Estadio Ciudad de La Plata",
    "Estadio Juan Carmelo Zerillo - Menú Inicial > Deportes > Estadios > Estadio Juan Carmelo Zerillo",
    "Estadio Jorge Luis Hirschi (UNO) - Menú Inicial > Deportes > Estadios > Estadio Jorge Luis Hirschi",
    "Hipódromo de La Plata - Menú Inicial > Deportes > Hipódromo de La Plata",
    "Autódromo Roberto Mouras - Menú Inicial > Deportes > Autódromo Roberto Mouras",
    "Polideportivo Víctor Nethol - Menú Inicial > Deportes > Polideportivo Víctor Nethol",
    "Country Estudiantes de La Plata - Menú Inicial > Deportes > Country Estudiantes de La Plata"
];

function buscar() {
    query = document.getElementById("buscar").value; 

    console.log(query); 

    if(query.trim()===""){
        return;
    }

    results = [];
    
    for(i = 0; i < data.length; i++){
        if(data[i].toLowerCase().includes(query.toLowerCase())){
            results.push(data[i]);
        }
    }

    document.getElementById("resultados").innerHTML = "";

    if(results.length > 0){
        for(i = 0; i < results.length; i++){
            li = document.createElement("li");
            li.textContent = results[i];
            document.getElementById("resultados").appendChild(li);
        }
    }
    else{
        li = document.createElement("li");
        li.textContent = "No se encontraron elementos para: " + query;
        document.getElementById("resultados").appendChild(li);
    }


}