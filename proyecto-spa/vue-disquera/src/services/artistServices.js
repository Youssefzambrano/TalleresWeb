import httpClient from "./httpClient";

const END_POINT = "/api/artista"
const END_POINT1 = "/api/merch"
const END_POINT2 = "/api/registro"
const getAllartist = () => httpClient.get(END_POINT);
const getAllmerch = () => httpClient.get(END_POINT1);
const registrar = () => httpClient.post(END_POINT2);

export{
    getAllartist,
    getAllmerch,
    registrar
}