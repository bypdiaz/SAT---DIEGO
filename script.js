document.addEventListener("DOMContentLoaded", () => {
    const destinations = [
        { name: "GBA", travelTime: 2777 },
        { name: "Ciudad Autonoma de Bs. As.", travelTime: 2777 },
        { name: "Mendoza", travelTime: 2282 },
        { name: "30 de Agosto (Bs. As.)", travelTime: (48 * 60 + 41) + 180 },
        { name: "9 de Julio", travelTime: (48 * 60) + 180 },
        { name: "Adelia María", travelTime: (38 * 60 + 14) + 180 },
        { name: "Alem (Misiones)", travelTime: (48 * 60) + 180 },
        { name: "Alta Gracia", travelTime: (28 * 60 + 5) + 180 },
        { name: "Aluminé", travelTime: (74 * 60) + 180 },
        { name: "América", travelTime: (42 * 60 + 43) + 180 },
        { name: "Antofagasta", travelTime: (72 * 60) + 180 },
        { name: "Apolinario Saravia", travelTime: (4 * 60) + 180 },
        { name: "Apostoles", travelTime: (36 * 60) + 180 },
        { name: "Arenaza", travelTime: (48 * 60) + 180 },
        { name: "Arias (Córdoba)", travelTime: (36 * 60 + 57) + 180 },
        { name: "Arica", travelTime: (36 * 60 + 38) + 180 },
        { name: "Arroyito", travelTime: (29 * 60 + 34) + 180 },
        { name: "Asunción", travelTime: (48 * 60) + 180 },
        { name: "Avellaneda (Santa Fe)", travelTime: (26 * 60 + 17) + 180 },
        { name: "Azul", travelTime: (53 * 60) + 180 },
        { name: "Bahía Blanca", travelTime: (52 * 60 + 55) + 180 },
        { name: "Baradero", travelTime: (39 * 60 + 43) + 180 },
        { name: "Bariloche", travelTime: (71 * 60 + 46) + 180 },
        { name: "Batan - Pcia. Bs.As.", travelTime: (56 * 60 + 2) + 180 },
        { name: "Bell Ville", travelTime: (36 * 60) + 180 },
        { name: "Bella Italia (Santa Fe)", travelTime: (29 * 60) + 180 },
        { name: "Bella Vista", travelTime: (29 * 60 + 31) + 180 },
        { name: "Bella Vista - Posadas", travelTime: (48 * 60) + 180 },
        { name: "Bella Vista (Corrientes)", travelTime: (30 * 60) + 180 },
        { name: "Bolivar", travelTime: (48 * 60 + 29) + 180 },
        { name: "Bragado", travelTime: (42 * 60 + 33) + 180 },
        { name: "Caimancito", travelTime: (1 * 60 + 30) + 180 },
        { name: "Calafate", travelTime: (108 * 60 + 7) + 180 },
        { name: "Caleta Olivia", travelTime: (80 * 60 + 50) + 180 },
        { name: "Calilegua", travelTime: (1 * 60) + 180 },
        { name: "Camino a Jesús María Km 6", travelTime: 0 + 180 },
        { name: "Campana", travelTime: (41 * 60 + 55) + 180 },
        { name: "Campo Viera", travelTime: (37 * 60 + 14) + 180 },
        { name: "Candelaria", travelTime: (34 * 60 + 31) + 180 },
        { name: "Cap.Fed. y Pcia.Bs.As.", travelTime: (44 * 60 + 17) + 180 },
        { name: "Capilla del Señor", travelTime: (43 * 60 + 26) + 180 },
        { name: "Capital (Alcohol s/acero inox)", travelTime: (44 * 60 + 30) + 180 },
        { name: "Carcaraña", travelTime: (18 * 60) + 180 },
        { name: "Carhue", travelTime: (40 * 60) + 180 },
        { name: "Carmen de Patagones", travelTime: (62 * 60) + 180 },
        { name: "Catamarca", travelTime: (15 * 60 + 2) + 180 },
        { name: "Cevil Pozo", travelTime: (8 * 60) + 180 },
        { name: "Chacabuco", travelTime: (42 * 60 + 39) + 180 },
        { name: "Chajarí", travelTime: (30 * 60) + 180 },
        { name: "Charata", travelTime: (24 * 60) + 180 },
        { name: "Chascomus", travelTime: (47 * 60 + 57) + 180 },
        { name: "Chepes", travelTime: (21 * 60) + 180 },
        { name: "Chilecito", travelTime: (26 * 60) + 180 },
        { name: "Chivilcoy", travelTime: (45 * 60 + 26) + 180 },
        { name: "Choele Choel", travelTime: (61 * 60 + 14) + 180 },
        { name: "Chos Malal", travelTime: (58 * 60 + 57) + 180 },
        { name: "Cipoletti", travelTime: (59 * 60 + 5) + 180 },
        { name: "Ciudad Autonoma de Bs. As.", travelTime: (44 * 60 + 17) + 180 },
        { name: "Clason", travelTime: (15 * 60 + 30) + 180 },
        { name: "Clorinda", travelTime: (25 * 60 + 39) + 180 },
        { name: "Cne.Dorrego/T.Arroyos/B.Blanca", travelTime: (56 * 60) + 180 },
        { name: "Cnel Juan Solá - Est. Morillo", travelTime: (6 * 60 + 20) + 180 },
        { name: "Cnel. Mollinedo", travelTime: (4 * 60 + 30) + 180 },
        { name: "Colón (E.R.)", travelTime: (38 * 60 + 43) + 180 },
        { name: "Colonia Aurora", travelTime: (48 * 60) + 180 },
        { name: "Colonia Caroya", travelTime: (26 * 60) + 180 },
        { name: "Colonia Santa Rosa", travelTime: (2 * 60) + 180 },
        { name: "Com.Rivadavia", travelTime: (78 * 60 + 38) + 180 },
        { name: "Concepción", travelTime: (10 * 60) + 180 },
        { name: "Concepción del Uruguay", travelTime: (41 * 60 + 5) + 180 },
        { name: "Concordia", travelTime: (39 * 60 + 48) + 180 },
        { name: "Coquimbo", travelTime: (96 * 60) + 180 },
        { name: "Córdoba", travelTime: (27 * 60 + 9) + 180 },
        { name: "Coronda", travelTime: (33 * 60) + 180 },
        { name: "Coronel (Chile)", travelTime: (63 * 60 + 21) + 180 },
        { name: "Coronel Dorrego", travelTime: (55 * 60) + 180 },
        { name: "Coronel Mollinedo", travelTime: (5 * 60) + 180 },
        { name: "Coronel Pringles", travelTime: (58 * 60 + 30) + 180 },
        { name: "Coronel Suarez", travelTime: (55 * 60) + 180 },
        { name: "Corrientes", travelTime: (25 * 60 + 29) + 180 },
        { name: "Curitiba", travelTime: (74 * 60) + 180 },
        { name: "Cutral Co", travelTime: (62 * 60 + 10) + 180 },
        { name: "Daract/Mdza x desinf fruta", travelTime: (60 * 60) + 180 },
        { name: "Devoto", travelTime: (34 * 60) + 180 },
        { name: "DINA HUAPI", travelTime: (70 * 60 + 2) + 180 },
        { name: "Dolores", travelTime: (52 * 60) + 180 },
        { name: "Eduardo Castex (LP)", travelTime: (44 * 60) + 180 },
        { name: "El Bolsón", travelTime: (80 * 60) + 180 },
        { name: "El Dorado", travelTime: (40 * 60) + 24 + 180 },
        { name: "El Piquete", travelTime: (2 * 60) + 180 },
        { name: "El Pongo", travelTime: (2 * 60) + 180 },
        { name: "El Talar", travelTime: (2 * 60) + 180 },
        { name: "Embarcación", travelTime: (2 * 60) + 180 },
        { name: "Empaque Citrusalta", travelTime: (2 * 60) + 180 },
        { name: "Esquel", travelTime: (81 * 60) + 34 + 180 },
        { name: "Finca Yuchan", travelTime: (1 * 60) + 30 + 180 },
        { name: "Firmat", travelTime: (39 * 60) + 43 + 180 },
        { name: "Formosa", travelTime: (23 * 60) + 41 + 180 },
        { name: "Fraile Pintado", travelTime: (1 * 60) + 180 },
        { name: "Franck", travelTime: (33 * 60) + 21 + 180 },
        { name: "Franck", travelTime: (33 * 60) + 180 },
        { name: "Freyre (Córdoba)", travelTime: (31 * 60) + 22 + 180 },
        { name: "Gándara", travelTime: (48 * 60) + 51 + 180 },
        { name: "GBA", travelTime: (44 * 60) + 17 + 180 },
        { name: "Gdor. Galvez (Sta.Fe)", travelTime: (36 * 60) + 26 + 180 },
        { name: "General Cabrera (Cba)", travelTime: (32 * 60) + 33 + 180 },
        { name: "General Campos (LP)", travelTime: (48 * 60) + 57 + 180 },
        { name: "General Manuel Belgrano (Form)", travelTime: (21 * 60) + 36 + 180 },
        { name: "General Roca", travelTime: (57 * 60) + 43 + 180 },
        { name: "Gobernador Virasoro", travelTime: (38 * 60) + 34 + 180 },
        { name: "Gral. Alvear", travelTime: (56 * 60) + 180 },
        { name: "Gral. Lavalle", travelTime: (53 * 60) + 14 + 180 },
        { name: "Gral. Pico", travelTime: (41 * 60) + 45 + 180 },
        { name: "Gral. Ramirez (ER)", travelTime: (34 * 60) + 3 + 180 },
        { name: "Gral. Roca (Rio Negro)", travelTime: (58 * 60) + 38 + 180 },
        { name: "Granadero Baigorria", travelTime: (40 * 60) + 180 },
        { name: "Gualeguaychú", travelTime: (40 * 60) + 48 + 180 },
        { name: "Guemes (Salta)", travelTime: (2 * 60) + 30 + 180 },
        { name: "Hoyo de Epuyén", travelTime: (80 * 60) + 180 },
        { name: "Huarenchenque", travelTime: (68 * 60) + 2 + 180 },
        { name: "Humahuaca", travelTime: (4 * 60) + 180 },
        { name: "Ing. Huergo (Rio Negro)", travelTime: (57 * 60) + 53 + 180 },
        { name: "Iquique", travelTime: (96 * 60) + 180 },
        { name: "Jachal", travelTime: (13 * 60) + 30 + 180 },
        { name: "Junín", travelTime: (38 * 60) + 34 + 180 },
        { name: "Justo Daract", travelTime: (36 * 60) + 180 },
        { name: "La Banda", travelTime: (13 * 60) + 15 + 180 },
        { name: "La Carlota", travelTime: (30 * 60) + 180 },
        { name: "La Cocha", travelTime: (10 * 60) + 38 + 180 },
        { name: "La Mendieta (Ing.Río Grande)", travelTime: (1 * 60) + 180 },
        { name: "La Merced (Salta)", travelTime: (4 * 60) + 33 + 180 },
        { name: "La Moraleja", travelTime: (6 * 60) + 180 },
        { name: "La Moraleja (Salta)", travelTime: (4 * 60) + 180 },
        { name: "La Plata", travelTime: (47 * 60) + 3 + 180 },
        { name: "La Quiaca", travelTime: (6 * 60) + 180 },
        { name: "La Rioja", travelTime: (21 * 60) + 34 + 180 },
        { name: "Laboulaye", travelTime: (38 * 60) + 180 },
        { name: "Las Cejas", travelTime: (8 * 60) + 180 },
        { name: "Las Grutas", travelTime: (60 * 60) + 180 },
        { name: "Las Lajas", travelTime: (65 * 60) + 9 + 180 },
        { name: "Las Lajitas", travelTime: (5 * 60) + 180 },
        { name: "Lencois Paulista", travelTime: (36 * 60) + 180 },
        { name: "Lib.Gral. San Martín", travelTime: (1 * 60) + 180 },
        { name: "Lib.Gral. San Martin (E.R.)", travelTime: (34 * 60) + 5 + 180 },
        { name: "Lincoln", travelTime: (51 * 60) + 19 + 180 },
        { name: "Loreto (Sgo del Estero)", travelTime: (14 * 60) + 20 + 180 },
        { name: "Los Lapachos", travelTime: (2 * 60) + 180 },
        { name: "Lujan", travelTime: (42 * 60) + 34 + 180 },
        { name: "Macachin", travelTime: (48 * 60) + 5 + 180 },
        { name: "Magdalena", travelTime: (48 * 60) + 51 + 180 },
        { name: "Mar de Ajó", travelTime: (52 * 60) + 27 + 180 },
        { name: "Mar del Plata y Part.Costa", travelTime: (55 * 60) + 45 + 180 },
        { name: "Mendoza", travelTime: (38 * 60) + 2 + 180 },
        { name: "Mendoza p/Messina Papel", travelTime: (38 * 60) + 180 },
        { name: "Mercedes", travelTime: (43 * 60) + 22 + 180 },
        { name: "Mercedes (Corrientes)", travelTime: (31 * 60) + 58 + 180 },
        { name: "Merlo", travelTime: (34 * 60) + 9 + 180 },
        { name: "Metan (Salta)", travelTime: (5 * 60) + 38 + 180 },
        { name: "Monte Cristo (Córdoba)", travelTime: (28 * 60) + 34 + 180 },
        { name: "Monte Libano (Oran)", travelTime: (3 * 60) + 23 + 180 },
        { name: "Montecarlo", travelTime: (40 * 60) + 2 + 180 },
        { name: "Monterrico", travelTime: 0 },
        { name: "Montevideo", travelTime: (50 * 60) + 34 + 180 },
        { name: "Moquehuá", travelTime: (17 * 60) + 48 + 180 },
        { name: "Morteros", travelTime: (25 * 60) + 50 + 180 },
        { name: "Necochea", travelTime: (58 * 60) + 50 + 180 },
        { name: "Neuquén", travelTime: (57 * 60) + 43 + 180 },
        { name: "Nuevo Alberdi", travelTime: (36 * 60) + 57 + 180 },
        { name: "Oberá", travelTime: (30 * 60) + 180 },
        { name: "Olavarria", travelTime: (50 * 60) + 43 + 180 },
        { name: "Orán", travelTime: (3 * 60) + 180 },
        { name: "Padre Stefenelli", travelTime: (57 * 60) + 38 + 180 },
        { name: "Palma Sola", travelTime: (2 * 60) + 180 },
        { name: "Palpala", travelTime: (2 * 60) + 180 },
        { name: "Paraná", travelTime: (33 * 60) + 26 + 180 },
        { name: "Paso de los Libres", travelTime: (36 * 60) + 17 + 180 },
        { name: "Paulina", travelTime: (1 * 60) + 180 },
        { name: "Pehuajó", travelTime: (45 * 60) + 36 + 180 },
        { name: "Pergamino", travelTime: (48 * 60) + 17 + 180 },
        { name: "Perico", travelTime: (2 * 60) + 0 + 180 },
        { name: "Pichanal", travelTime: (2 * 60) + 30 + 180 },
        { name: "Pilar (Bs.As.)", travelTime: (42 * 60) + 30 + 180 },
        { name: "Pinamar", travelTime: (50 * 60) + 0 + 180 },
        { name: "Posadas", travelTime: (34 * 60) + 26 + 180 },
        { name: "Presidente Saenz Peña", travelTime: (17 * 60) + 24 + 180 },
        { name: "Pto. Rosario (p/fruta)", travelTime: (37 * 60) + 30 + 180 },
        { name: "Pto. San Pedro (p/fruta)", travelTime: (40 * 60) + 0 + 180 },
        { name: "Puerto de San Pedro", travelTime: (39 * 60) + 22 + 180 },
        { name: "Puerto Iguazú", travelTime: (48 * 60) + 0 + 180 },
        { name: "Puerto Madryn", travelTime: (65 * 60) + 38 + 180 },
        { name: "Puerto Rico", travelTime: (39 * 60) + 33 + 180 },
        { name: "Puerto Rosario", travelTime: (37 * 60) + 21 + 180 },
        { name: "Puerto Rosario (para azúcar)", travelTime: (40 * 60) + 0 + 180 },
        { name: "Puerto Rosario (para fruta)", travelTime: (37 * 60) + 30 + 180 },
        { name: "Puerto Tirol", travelTime: (24 * 60) + 19 + 180 },
        { name: "Puerto Vilelas", travelTime: (27 * 60) + 29 + 180 },
        { name: "Puesto Viejo", travelTime: (2 * 60) + 0 + 180 },
        { name: "Punta Alta", travelTime: (40 * 60) + 20 + 180 },
        { name: "Rafaela", travelTime: (30 * 60) + 10 + 180 },
        { name: "Rawson", travelTime: (96 * 60) + 0 + 180 },
        { name: "Real del Padre", travelTime: (47 * 60) + 43 + 180 },
        { name: "Realicó (La Pampa)", travelTime: (39 * 60) + 31 + 180 },
        { name: "Reconquista", travelTime: (26 * 60) + 19 + 180 },
        { name: "Resistencia", travelTime: (24 * 60) + 36 + 180 },
        { name: "Retira Cliente", travelTime: 0 },
        { name: "Río Cuarto", travelTime: (33 * 60) + 22 + 180 },
        { name: "Río Gallegos", travelTime: (101 * 60) + 17 + 180 },
        { name: "Rio Grande", travelTime: (120 * 60) + 0 + 180 },
        { name: "Río Segundo", travelTime: (28 * 60) + 3 + 180 },
        { name: "Rio Turbio", travelTime: (72 * 60) + 51 + 180 },
        { name: "Rivera (Bs.As.)", travelTime: (46 * 60) + 0 + 180 },
        { name: "Rosario", travelTime: (35 * 60) + 48 + 180 },
        { name: "Rosario de la Frontera", travelTime: (6 * 60) + 54 + 180 },
        { name: "Saladillo", travelTime: (50 * 60) + 55 + 180 },
        { name: "SALAR CAUCHARI OLAROZ", travelTime: (9 * 60) + 20 + 180 },
        { name: "Salsipuedes", travelTime: (26 * 60) + 46 + 180 },
        { name: "Salta", travelTime: (4 * 60) + 0 + 180 },
        { name: "San Andres de Giles", travelTime: (42 * 60) + 36 + 180 },
        { name: "San Carlos", travelTime: (24 * 60) + 0 + 180 },
        { name: "San Francisco (Cba)", travelTime: (29 * 60) + 27 + 180 },
        { name: "San Juan", travelTime: (34 * 60) + 19 + 180 },
        { name: "San Juan (+9 hasta 18 tn)", travelTime: 0 },
        { name: "San Lorenzo", travelTime: (34 * 60) + 51 + 180 },
        { name: "San Luis", travelTime: (35 * 60) + 5 + 180 },
        { name: "San Martín de los Andes", travelTime: (71 * 60) + 26 + 180 },
        { name: "San Nicolás", travelTime: (38 * 60) + 31 + 180 },
        { name: "San Pedro (Bs.As.)", travelTime: (44 * 60) + 0 + 180 },
        { name: "San Pedro (Jujuy)", travelTime: (1 * 60) + 30 + 180 },
        { name: "San Rafael", travelTime: (45 * 60) + 45 + 180 },
        { name: "San Salvador de Jujuy", travelTime: (2 * 60) + 53 + 180 },
        { name: "San Vicente (Misiones)", travelTime: (40 * 60) + 0 + 180 },
        { name: "Santa Ana (Misiones)", travelTime: (40 * 60) + 0 + 180 },
        { name: "Santa Clara", travelTime: (2 * 60) + 0 + 180 },
        { name: "Santa Fe", travelTime: (31 * 60) + 26 + 180 },
        { name: "Santa Lucia", travelTime: (12 * 60) + 0 + 180 },
        { name: "Santa Rosa", travelTime: (43 * 60) + 34 + 180 },
        { name: "Santiago del Estero", travelTime: (13 * 60) + 15 + 180 },
        { name: "Santo Tomé", travelTime: (32 * 60) + 20 + 180 },
        { name: "Sao Leopoldo", travelTime: (48 * 60) + 0 + 180 },
        { name: "Sauce Viejo", travelTime: (31 * 60) + 55 + 180 },
        { name: "Sgo. de Chile", travelTime: (54 * 60) + 0 + 180 },
        { name: "Sico (Salta)", travelTime: (24 * 60) + 0 + 180 },
        { name: "Sunchales", travelTime: (29 * 60) + 2 + 180 },
        { name: "Sunchales", travelTime: (32 * 60) + 17 + 180 },
        { name: "Tandil", travelTime: (52 * 60) + 10 + 180 },
        { name: "Tartagal", travelTime: (5 * 60) + 21 + 180 },
        { name: "Tilcara", travelTime: (3 * 60) + 0 + 180 },
        { name: "Tío Pujio", travelTime: (31 * 60) + 17 + 180 },
        { name: "Toay", travelTime: (39 * 60) + 0 + 180 },
        { name: "Tornquist", travelTime: (53 * 60) + 9 + 180 },
        { name: "Trelew", travelTime: (66 * 60) + 26 + 180 },
        { name: "Trenque Lauquen", travelTime: (44 * 60) + 38 + 180 },
        { name: "Tres Arroyos", travelTime: (49 * 60) + 34 + 180 },
        { name: "Tucumán", travelTime: (9 * 60) + 45 + 180 },
        { name: "Tucuman p/ NCA", travelTime: (8 * 60) + 0 + 180 },
        { name: "Tunuyan", travelTime: (44 * 60) + 0 + 180 },
        { name: "Tupungato", travelTime: (41 * 60) + 58 + 180 },
        { name: "Urundel", travelTime: (2 * 60) + 0 + 180 },
        { name: "Valparaiso", travelTime: (49 * 60) + 53 + 180 },
        { name: "Venado Tuerto", travelTime: (38 * 60) + 0 + 180 },
        { name: "Viedma", travelTime: (61 * 60) + 15 + 180 },
        { name: "Villa Angela", travelTime: (22 * 60) + 33 + 180 },
        { name: "Villa Dolores", travelTime: (33 * 60) + 5 + 180 },
        { name: "Villa María (Cba.)", travelTime: (31 * 60) + 38 + 180 },
        { name: "Villa Mercedes", travelTime: (36 * 60) + 0 + 180 },
        { name: "Villa Nueva (Córdoba)", travelTime: (31 * 60) + 43 + 180 },
        { name: "Villa Paranacito", travelTime: (41 * 60) + 29 + 180 },
        { name: "Villa Regina", travelTime: (58 * 60) + 0 + 180 },
        { name: "Vinalito", travelTime: (2 * 60) + 0 + 180 },
        { name: "Volcán", travelTime: (2 * 60) + 0 + 180 },
        { name: "Yuto", travelTime: (1 * 60) + 30 + 180 },
        { name: "Zapala", travelTime: (64 * 60) + 3 + 180 },
        { name: "Zarate", travelTime: (41 * 60) + 55 + 180 }

    ];

    const destinationSelect = document.getElementById("destination");
    const departureDateInput = document.getElementById("departureDate");
    const departureTimeInput = document.getElementById("departureTime");
    const calculateButton = document.getElementById("calculateButton");
    const resultContainer = document.getElementById("result");
    const arrivalTimeDisplay = document.getElementById("arrivalTime");

    // Llenar la lista desplegable sin duplicados
    destinations.forEach((destination) => {
        if (![...destinationSelect.options].some(opt => opt.value === destination.name)) {
            const option = document.createElement("option");
            option.value = destination.name;
            option.textContent = destination.name;
            destinationSelect.appendChild(option);
        }
    });

    // Calcular fecha y hora de llegada
    const calculateArrival = () => {
        const selectedDestination = destinationSelect.value;
        const departureDate = departureDateInput.value;
        const departureTime = departureTimeInput.value;

        if (!selectedDestination || !departureDate || !departureTime) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const destination = destinations.find(
            (dest) => dest.name === selectedDestination
        );

        const [year, month, day] = departureDate.split("-").map(Number);
        const [hours, minutes] = departureTime.split(":").map(Number);

        const departureDateTime = new Date(year, month - 1, day, hours, minutes);

        // Añadir tiempo de viaje en minutos
        const arrivalDateTime = new Date(
            departureDateTime.getTime() + destination.travelTime * 60000
        );

        // Formatear fecha y hora de llegada
        const formattedDate = arrivalDateTime.toLocaleDateString([], {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        const formattedTime = arrivalDateTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false, // Esto asegura que se use el formato de 24 horas
        });

        arrivalTimeDisplay.textContent = `${formattedDate}, ${formattedTime}`;
        resultContainer.style.display = "block";
    };

    calculateButton.addEventListener("click", calculateArrival);
});
