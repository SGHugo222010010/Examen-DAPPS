// 1. Ingrese a la página “https://rickandmortyapi.com/”, utilizaremos la api de “Get all
// characters” para este laboratorio.
// 2. Instale Axios ejecutando el siguiente comando “npm i axios”.
// 3. Cree una carpeta llamada “api”.
// 4. Cree un archivo llamado “ReqRestApi.tsx”.
// 5. Configure la conexión hacía su api.

import axios from 'axios';
export const ReqRestApi = axios.create({
    baseURL: ` https://reqres.in/api`
});

export default ReqRestApi
