
# Phi~~shing~~reverse

Phishing Reverse ataca con spam y datos falsos (ligeramente reales) el phishing que le hacen a Bancolombia (2022), enviando miles de datos en minutos para dificultar a los atacantes discernir entre los datos reales de los falsos. 

```bash
  npm install
  npm run attack
```

**Contexto**: El phishing a Bancolombia suele ser muy común y aunque desde su app el time OTP llamado “clave dinámica” muy seguramente está ayudando a mitigar el phishing, este aún persiste y cada cierta época (desafortunadamente) mi email está en una base de datos de los atacantes y recibo enlaces con phishing que incluso llegan a bandeja de entrada.

## 22/01/2020 
![App Screenshot](https://i.ytimg.com/vi/JIe8tUtsyFQ/maxresdefault.jpg)(https://youtu.be/JIe8tUtsyFQ)

Aunque hago el reporte a correosospechoso@bancolombia.com.co hace un tiempo atrás decidi llenarlos con datos basura sus inputs para que en caso de que un usuario caiga en entregar sus datos, estos se pierdan entre cientos de datos falsos.

**El objetivo** es fastidiarlos, llenarlos de spam y generar miles de datos para dificultar que se hagan con datos reales o hacer uso de estos (ya que roban la clave dinámica), además después de esto usualmente a las horas desactivan la página falsa.

## Funcionamiento del phishing (2022)
![App Screenshot](https://i.ytimg.com/vi/nQxcHB6ZStA/maxresdefault.jpg)(https://youtu.be/nQxcHB6ZStA)

**Funcionamiento:** Generalmente obtienen accesos no autorizados a servidores con CPANEL (páginas reales y en uso), allí crean un subdominio y suben la fake sucursal virtual personas. El proceso de envío de email no lo explicaré, es muy cambiante, pero la sucursal virtual si es el mismo patrón desde hace 2 años.

1. Página fake pide username
2. Redirecciona a otra que pide clave principal
3. Redirecciona a otra para solicitar:
    1. Email y password 🙄
    2. Número de teléfono
4. Redirecciona a otra página que pide Número de tarjeta de crédito, exp y cvv
5. Nueva redirección y pide clave dinámica, al enviarse dice que hubo un error y piden nuevamente la clave dinámica, seguro con el objetivo de jugar con el tiempo entre cambio de claves.


## Funcionamiento del script
![App Screenshot](https://i.ytimg.com/vi/i_pHBMDNjqk/maxresdefault.jpg)(https://youtu.be/i_pHBMDNjqk)

**Funcionamiento:** El payload total de datos que ellos roban desde el formulario son:

* username bancolombia
* Clave principal
* email
* password (email)
* phone
* Número de cédula
* Clave dinámica
* Una segunda clave dinámica

En este caso lo que hace el script es generar una petición por segundo con cada uno de estos datos con diferentes funciones que generan datos únicos por petición:

* username: 
  * Utiliza faker.js en español
* Clave principal: 
  * Genera un número random de 6 dígitos
* email
  * Toma el nombre generado y crea uno relacionado
* password (email)
  * Utiliza faker.js
* phone
  * Tiene una función con los números telefónicos de colombia tipo 310, 311, etc y luego le rellena con un número de 7 dígitos
* Número de cédula
  * Tiene una función para generar aleatoriamente dos tipos de cédula una de 10 dígitos que comienza con 1 y otra de 8 dígitos (antigua)
* Clave dinámica
  * Genera un número de 6 dígitos
* Una segunda clave dinámica
  * Número diferente de 6 dígitos
* El envío de datos es una petición http
  * Utiliza axios.js

Al ejecutar el script ataca enviando estos datos falsos por medio de una petición http en metodo POST, especificando headers y demás para hacerla lo más real posible la solicitud (envío de datos)

En minutos se pueden enviar miles de datos que les llenará de SPAM el correo donde reciben esto y con suerte en el camino invisibilizar algún dato real que algún usuario hubiera enviado.


![App Screenshot](https://i.ytimg.com/vi/-zxLdyBiLJc/maxresdefault.jpg)(https://youtu.be/-zxLdyBiLJc)
____________________

## Posibles fallas
Los atacantes pueden (y seguramente) perfeccionarse para filtrar este tipo de herramientas, por lo tanto puede que se presenten alguno de los siguientes errores:

* Te baneen la IP, ya sea el server de forma automática o ellos desde el backend
  * Recomendable usar un proxy como http://pubproxy.com/api/proxy para cambiar de IP y seguir enviando las peticiones
* Los atacantes pueden que filtren el User-Agent pues aquí usa el mismo para todas las solicitudes, pero este lo puedes cambiar en los headers de la solicitud
* Filtrar por cookie de sesión, para estos casos se puede usar puppeteer.js (ya se hace muy pesado)
* Este es solo un tipo de ataque seguramente existan otros más y con diferentes request, inputs, etc, por lo tanto puede que en el futuro cambie por completo.


@charliezstong

## 🔗
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/charliezstong)
