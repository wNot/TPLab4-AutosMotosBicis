const datos_autos = 
[
{id:1, marca:'Ford',modelo:'T', anio: 1890},
{id:2, marca:'Toyota',modelo:'Corolla', anio: 2001},
{id:3, marca:'Chevy',modelo:'T', anio: 2015},
];


export function getAutos()
{return datos_autos;}

export function getAutosid(id)
{return datos_autos.find(a=> a.id === id) || null;}