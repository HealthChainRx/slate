---
title: HealthChain Portage API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - javascript--nodejs: Node.JS
  - ruby: Ruby
  - python: Python
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<h1 id="healthchain-portage-api">HealthChain Portage API v1.2.0-oas3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Introduction
HealthChain Portage is a medication management platform designed to support doctors, pharmacists, patients and our healthcare system.

This dashboard provides interactive developer tools and sample applications that demonstrate how existing Electronic Medical Record (EMR) and Pharmacy Management Software (PMS) systems can integrate with HealthChain Portage (Portage) to support e-prescribing in Canada.
# Authentication
Only users of a trusted application may use the HealthChain Portage API.
## Application
HealthChain applications are authenticated using a certificate and private key; which is used to establish trusted communications between the application instance.
## Practitioner
Practitioners; or agents; of a Health Information Custodian communicate with the HealthChain Portage API by using an authorization token.

Base URLs:

* <a href="//localhost:3000/">//localhost:3000/</a>

<h1 id="healthchain-portage-api-quick-reference">Quick Reference</h1>

## get__clinics_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinics/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinics/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinics/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinics/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinics/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinics/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinics/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinics/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinics/{assigner}/{value}`

*Get a Clinic by Identifier assigner and value*

Get a Clinic by Identifier assigner and value

<h3 id="get__clinics_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|

> Example responses

<h3 id="get__clinics_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__clinics_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocations_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocations/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocations/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocations/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocations/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocations/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocations/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocations/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocations/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocations/{assigner}/{value}`

*Get a ClinicLocation by Identifier properties assigner and value*

Get a ClinicLocation by Identifier properties assigner and value.

<h3 id="get__cliniclocations_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|partOf|

> Example responses

<h3 id="get__cliniclocations_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|default|Default|Unexpected error|None|

<h3 id="get__cliniclocations_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__patients_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/patients/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/patients/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/patients/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/patients/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/patients/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/patients/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /patients/{assigner}/{value}`

*Get a Patient assigner and value*

Get a Patient by assigner and value.  See Patient list for test ca-on-patient-hcn HINs

<h3 id="get__patients_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|assigner|path|string|true|none|
|value|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|prescribers|
|_include|clinicLocations|
|_include|dispensers|
|_include|pharmacyLocations|

> Example responses

<h3 id="get__patients_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__patients_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocations_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocations/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocations/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocations/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocations/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocations/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocations/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocations/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocations/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocations/{assigner}/{value}`

*Get a PharmacyLocation by Identifier properties assigner and value*

Get a PharmacyLocation by Identifier properties assigner and value.

<h3 id="get__pharmacylocations_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|

> Example responses

<h3 id="get__pharmacylocations_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__pharmacylocations_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationRequests

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationRequests \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/medicationRequests HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationRequests',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/medicationRequests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/medicationRequests', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationRequests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationRequests`

*Get MedicationRequests by patientId, onBehalfOf, pharmacyLocation and status*

Get MedicationRequests by patientId and/or status

<h3 id="get__medicationrequests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patientId|query|string|false|The unique HealthChain ID of a patient|
|status|query|string|false|The status of the medication request|
|onBehalfOf|query|string|false|The clinic this medicaiton request was prescribed from|
|assignedPharmacy|query|string|false|The pharmacy location this medication request is assigned to|
|acknowledged|query|boolean|false|Only return Medication Requests that are or aren't acknowledged|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|draft|
|status|active|
|status|duplicate|
|status|completed|
|status|cancelled|
|_include|prescriber|
|_include|onBehalfOf|
|_include|patient|
|_include|recorder|
|_include|dispenser|
|_include|assignedPharmacy|
|_include|medicationDispenses|
|_include|medication|

> Example responses

<h3 id="get__medicationrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__medicationrequests-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__medicationRequests

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/medicationRequests \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/medicationRequests HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/medicationRequests',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/medicationRequests',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/medicationRequests', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/medicationRequests", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /medicationRequests`

*Prescribe a medication*

The Prescribe action accepts a PrescribeTxn and creates a MedicationRequest.

> Body parameter

```json
false
```

<h3 id="post__medicationrequests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationDispenses

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationDispenses \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/medicationDispenses HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationDispenses',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationDispenses',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/medicationDispenses',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/medicationDispenses', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationDispenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationDispenses`

*Query dispenses by patientId, pharmacyLocation, medicationRequestId and status*

Returns all MedicationDispense to the caller, filtered according to ACL rules.

<h3 id="get__medicationdispenses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pharmacyLocationId|query|string|false|The unique HealthChain ID of a pharmacy location.|
|patientId|query|string|false|The unique HealthChain ID of a patient|
|medicationRequestId|query|string|false|Return MedicationDispenses associated with a specific medication request|
|status|query|string|false|The status of the medication dispense|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|preparation|
|status|in_progress|
|status|on_hold|
|status|completed|
|status|entered_in_error|
|status|stopped|
|_include|medicationRequest|
|_include|dispenser|
|_include|patient|
|_include|pharmacyLocation|
|_include|medication|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__medicationdispenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__medicationdispenses-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post__medicationDispenses

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/medicationDispenses \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/medicationDispenses HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationDispenses',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/medicationDispenses',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/medicationDispenses',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/medicationDispenses', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/medicationDispenses", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /medicationDispenses`

*Dispense a medication*

The AddMedicationDispense transaction

> Body parameter

```json
false
```

<h3 id="post__medicationdispenses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocationApplications_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocationApplications/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocationApplications/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocationApplications/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocationApplications/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocationApplications/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocationApplications/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocationApplications/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocationApplications/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocationApplications/{assigner}/{value}`

*Get a ClinicLocationApplication by Identifier properties assigner and value*

Get a ClinicLocationApplication by Identifier properties assigner and value.

<h3 id="get__cliniclocationapplications_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|owner|
|_include|recorder|
|_include|clinicLocation|

> Example responses

<h3 id="get__cliniclocationapplications_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|default|Default|Unexpected error|None|

<h3 id="get__cliniclocationapplications_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocationApplications_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocationApplications/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocationApplications/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocationApplications/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocationApplications/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocationApplications/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocationApplications/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocationApplications/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocationApplications/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocationApplications/{assigner}/{value}`

*Get a PharmacyLocationApplication by Identifier properties assigner and value*

Get a PharmacyLocationApplication by Identifier properties assigner and value.

<h3 id="get__pharmacylocationapplications_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|owner|
|_include|recorder|
|_include|pharmacyLocation|

> Example responses

<h3 id="get__pharmacylocationapplications_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|default|Default|Unexpected error|None|

<h3 id="get__pharmacylocationapplications_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="healthchain-portage-api-portage-api-papi-">Portage API (PAPI)</h1>

## post__clinics

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/clinics \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/clinics HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinics',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/clinics',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/clinics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/clinics', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinics");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/clinics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /clinics`

*Create a clinic*

Create a clinic.

> Body parameter

```json
false
```

<h3 id="post__clinics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__clinicLocations

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/clinicLocations \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/clinicLocations HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocations',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/clinicLocations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/clinicLocations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/clinicLocations', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/clinicLocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /clinicLocations`

*Create a clinic location*

Create a clinic location.

> Body parameter

```json
false
```

<h3 id="post__cliniclocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__dispensers

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/dispensers \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/dispensers HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/dispensers',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/dispensers',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/dispensers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/dispensers', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/dispensers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/dispensers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /dispensers`

*Create a dispenser*

Create a dispenser.

> Body parameter

```json
false
```

<h3 id="post__dispensers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__dispensers_{dispenserId}_pharmacyLocations_{pharmacyLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /dispensers/{dispenserId}/pharmacyLocations/{pharmacyLocationId}`

*Create a dispenser-pharmacyLocation relationship*

Create a dispenser-pharmacyLocation relationship

> Body parameter

```json
false
```

<h3 id="put__dispensers_{dispenserid}_pharmacylocations_{pharmacylocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dispenserId|path|string|true|none|
|pharmacyLocationId|path|string|true|none|

<h3 id="put__dispensers_{dispenserid}_pharmacylocations_{pharmacylocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__prescribers

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/prescribers \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/prescribers HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/prescribers',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/prescribers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/prescribers', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/prescribers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /prescribers`

*Create a prescriber*

Create a prescriber.

> Body parameter

```json
false
```

<h3 id="post__prescribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__prescribers_{prescriberId}_clinicLocations_{clinicLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/prescribers/{prescriberId}/clinicLocations/{clinicLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /prescribers/{prescriberId}/clinicLocations/{clinicLocationId}`

*Create a prescriber-clinicLocation relationship*

Create a prescriber-clinicLocation relationship

> Body parameter

```json
false
```

<h3 id="put__prescribers_{prescriberid}_cliniclocations_{cliniclocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|prescriberId|path|string|true|none|
|clinicLocationId|path|string|true|none|

<h3 id="put__prescribers_{prescriberid}_cliniclocations_{cliniclocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__clinicAdmins

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/clinicAdmins \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/clinicAdmins HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/clinicAdmins',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/clinicAdmins',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/clinicAdmins', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/clinicAdmins", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /clinicAdmins`

*Create a ClinicAdmin*

Create a ClinicAdmin.

> Body parameter

```json
false
```

<h3 id="post__clinicadmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__clinicAdmins_{clinicAdminId}_clinicLocations_{clinicLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /clinicAdmins/{clinicAdminId}/clinicLocations/{clinicLocationId}`

*Create a clinicAdmin-clinicLocation relationship*

Create a clinicAdmin-clinicLocation relationship

> Body parameter

```json
false
```

<h3 id="put__clinicadmins_{clinicadminid}_cliniclocations_{cliniclocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|clinicAdminId|path|string|true|none|
|clinicLocationId|path|string|true|none|

<h3 id="put__clinicadmins_{clinicadminid}_cliniclocations_{cliniclocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__patients

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/patients \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/patients HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/patients',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/patients',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/patients', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/patients", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /patients`

*Register a patient*

Register a patient

> Body parameter

```json
false
```

<h3 id="post__patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__bulkPatients

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/bulkPatients \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/bulkPatients HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/bulkPatients',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/bulkPatients',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/bulkPatients',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/bulkPatients', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/bulkPatients");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/bulkPatients", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /bulkPatients`

*Register many patients*

Regsiter many patients

> Body parameter

```json
false
```

<h3 id="post__bulkpatients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__patients_{patientId}_clinicLocations_{clinicLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/patients/{patientId}/clinicLocations/{clinicLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /patients/{patientId}/clinicLocations/{clinicLocationId}`

*Create a patient-clinicLocation relationship*

Create a patient-clinicLocation relationship

> Body parameter

```json
false
```

<h3 id="put__patients_{patientid}_cliniclocations_{cliniclocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patientId|path|string|true|none|
|clinicLocationId|path|string|true|none|

<h3 id="put__patients_{patientid}_cliniclocations_{cliniclocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__patients_{patientId}_pharmacyLocations_{pharmacyLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/patients/{patientId}/pharmacyLocations/{pharmacyLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /patients/{patientId}/pharmacyLocations/{pharmacyLocationId}`

*Create a patient-pharmacyLocation relationship*

Create a patient-pharmacyLocation relationship

> Body parameter

```json
false
```

<h3 id="put__patients_{patientid}_pharmacylocations_{pharmacylocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|patientId|path|string(uuid)|true|none|
|pharmacyLocationId|path|string(uuid)|true|none|

<h3 id="put__patients_{patientid}_pharmacylocations_{pharmacylocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__pharmacyLocations

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/pharmacyLocations \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/pharmacyLocations HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocations',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/pharmacyLocations',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/pharmacyLocations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/pharmacyLocations', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/pharmacyLocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /pharmacyLocations`

*Create a pharmacy location*

Create a pharmacy location.

> Body parameter

```json
false
```

<h3 id="post__pharmacylocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete__medicationRequests_{id}

> Code samples

```shell
# You can also use wget
curl -X DELETE /localhost:3000/medicationRequests/{id}

```

```http
DELETE /localhost:3000/medicationRequests/{id} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}',
  method: 'delete',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationRequests/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/localhost:3000/medicationRequests/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/localhost:3000/medicationRequests/{id}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/localhost:3000/medicationRequests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /medicationRequests/{id}`

*Cancel a medication request.*

Cancel a medication request.

<h3 id="delete__medicationrequests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="delete__medicationrequests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_cancel

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/cancel

```

```http
PUT /localhost:3000/medicationRequests/{id}/cancel HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/cancel',
  method: 'put',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationRequests/{id}/cancel',
{
  method: 'PUT'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.put '/localhost:3000/medicationRequests/{id}/cancel',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.put('/localhost:3000/medicationRequests/{id}/cancel', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/cancel");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/cancel", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/cancel`

*Cancels a MedicationRequest*

<h3 id="put__medicationrequests_{id}_cancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="put__medicationrequests_{id}_cancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_approve

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/approve

```

```http
PUT /localhost:3000/medicationRequests/{id}/approve HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/approve',
  method: 'put',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationRequests/{id}/approve',
{
  method: 'PUT'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.put '/localhost:3000/medicationRequests/{id}/approve',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.put('/localhost:3000/medicationRequests/{id}/approve', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/approve");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/approve", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/approve`

*Approves a MedicationRequest*

<h3 id="put__medicationrequests_{id}_approve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="put__medicationrequests_{id}_approve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_acknowledge

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/acknowledge \
  -H 'Accept: application/json'

```

```http
PUT /localhost:3000/medicationRequests/{id}/acknowledge HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/acknowledge',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationRequests/{id}/acknowledge',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.put '/localhost:3000/medicationRequests/{id}/acknowledge',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('/localhost:3000/medicationRequests/{id}/acknowledge', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/acknowledge");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/acknowledge", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/acknowledge`

*Acknowledges a MedicationRequest*

<h3 id="put__medicationrequests_{id}_acknowledge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="put__medicationrequests_{id}_acknowledge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<h3 id="put__medicationrequests_{id}_acknowledge-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_acknowledge_{type}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/acknowledge/{type} \
  -H 'Accept: application/json'

```

```http
PUT /localhost:3000/medicationRequests/{id}/acknowledge/{type} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/acknowledge/{type}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationRequests/{id}/acknowledge/{type}',
{
  method: 'PUT',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.put '/localhost:3000/medicationRequests/{id}/acknowledge/{type}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.put('/localhost:3000/medicationRequests/{id}/acknowledge/{type}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/acknowledge/{type}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/acknowledge/{type}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/acknowledge/{type}`

*Acknowledges a MedicationRequest*

<h3 id="put__medicationrequests_{id}_acknowledge_{type}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|type|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|MedicationRequestAdded|
|type|MedicationRequestCancelled|

> Example responses

<h3 id="put__medicationrequests_{id}_acknowledge_{type}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<h3 id="put__medicationrequests_{id}_acknowledge_{type}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_note

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/note \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/medicationRequests/{id}/note HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/note',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/medicationRequests/{id}/note',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/medicationRequests/{id}/note',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/medicationRequests/{id}/note', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/note");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/note", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/note`

*Adds a note to a MedicationRequest*

> Body parameter

```json
false
```

```yaml
false

```

<h3 id="put__medicationrequests_{id}_note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="put__medicationrequests_{id}_note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationRequests_{id}_pharmacyLocation_{pharmacyLocationId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}

```

```http
PUT /localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}',
  method: 'put',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}',
{
  method: 'PUT'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.put '/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.put('/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationRequests/{id}/pharmacyLocation/{pharmacyLocationId}`

*Assign a MedicationRequest to a PharmacyLocation*

<h3 id="put__medicationrequests_{id}_pharmacylocation_{pharmacylocationid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|pharmacyLocationId|path|string|true|none|

<h3 id="put__medicationrequests_{id}_pharmacylocation_{pharmacylocationid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationDispenses_{id}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationDispenses/{id} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/medicationDispenses/{id} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationDispenses/{id}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/medicationDispenses/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/medicationDispenses/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/medicationDispenses/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationDispenses/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationDispenses/{id}`

*Execute transactions related to a MedicaitonDispense*

Currently supports AddMedicationDispense and ImportMedicationDispense transactions.

> Body parameter

```json
false
```

<h3 id="put__medicationdispenses_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="put__medicationdispenses_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__medicationDispenses_{id}_note

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/medicationDispenses/{id}/note \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/medicationDispenses/{id}/note HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationDispenses/{id}/note',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/medicationDispenses/{id}/note',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/medicationDispenses/{id}/note',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/medicationDispenses/{id}/note', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses/{id}/note");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/medicationDispenses/{id}/note", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /medicationDispenses/{id}/note`

*Adds a note to a MedicationDispense*

> Body parameter

```json
false
```

```yaml
false

```

<h3 id="put__medicationdispenses_{id}_note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="put__medicationdispenses_{id}_note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__sigs

> Code samples

```shell
# You can also use wget
curl -X POST /localhost:3000/sigs \
  -H 'Content-Type: application/json'

```

```http
POST /localhost:3000/sigs HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/sigs',
  method: 'post',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = 'false';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/sigs',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/localhost:3000/sigs',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/localhost:3000/sigs', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/sigs");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/localhost:3000/sigs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /sigs`

*Create a Sig*

Create a Sig.

> Body parameter

```json
false
```

<h3 id="post__sigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Sig {sigURI} successfully created|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Conflict|None|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="healthchain-portage-api-portage-queries">Portage Queries</h1>

## get__clinics

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinics \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinics HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinics',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinics',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinics',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinics', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinics");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinics", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinics`

*Get clinics*

Get clinics

<h3 id="get__clinics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the clinic|
|city|query|string|false|The city of the clinic location|
|state|query|string|false|The state or province of the clinic location|
|postalCode|query|string|false|The postalCode of the clinic location|
|address|query|string|false|The address of the clinic location|
|country|query|string|false|The country of the clinic location|
|status|query|string|false|The status of the clinic|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|status|sold|
|status|closed|
|status|relocated|

> Example responses

<h3 id="get__clinics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__clinics-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinics_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinics/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinics/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinics/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinics/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinics/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinics/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinics/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinics/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinics/{id}`

*Get a Clinic based on unique HealthChain ID.*

Get a Clinic based on it's unique HealthChain identifier

<h3 id="get__clinics_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="get__clinics_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__clinics_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocations

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocations \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocations HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocations',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocations', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocations`

*Query clinicLocations*

Returns clinicLocations to the caller

<h3 id="get__cliniclocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the clinic location|
|city|query|string|false|The city of the clinic location|
|state|query|string|false|The state or province of the clinic location|
|postalCode|query|string|false|The postalCode of the clinic location|
|address|query|string|false|The address of the clinic location|
|country|query|string|false|The country of the clinic location|
|status|query|string|false|The status of the clinic location|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|status|sold|
|status|closed|
|status|relocated|
|_include|partOf|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__cliniclocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__cliniclocations-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocations/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocations/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocations/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocations/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocations/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocations/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocations/{id}`

*Get a ClinicLocation by unique HealthChain id.*

Get a ClinicLocation by unique HealthChain id.

<h3 id="get__cliniclocations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|partOf|

> Example responses

<h3 id="get__cliniclocations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__cliniclocations_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__dispensers

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/dispensers \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/dispensers HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/dispensers',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/dispensers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/dispensers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/dispensers', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/dispensers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/dispensers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /dispensers`

*Query dispensers*

Returns dispensers based on the following criteria

<h3 id="get__dispensers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The unique name of the dispenser|
|city|query|string|false|The city of the dispenser|
|state|query|string|false|The state or province of the dispenser|
|postalCode|query|string|false|The postalCode of the dispenser|
|address|query|string|false|The address of the dispenser|
|country|query|string|false|The country of the dispenser|
|gender|query|string|false|The gender of the dispenser|
|pharmacyLocationId|query|string|false|The pharmacyLocation of this Dispenser|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gender|male|
|gender|female|
|gender|other|
|gender|unknown|
|_include|pharmacyLocations|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__dispensers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__dispensers-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__dispensers_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/dispensers/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/dispensers/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/dispensers/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/dispensers/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/dispensers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/dispensers/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/dispensers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/dispensers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /dispensers/{id}`

*Get a Dispenser by id*

Get a Dispenser by id.

<h3 id="get__dispensers_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|pharmacyLocations|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__dispensers_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__dispensers_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__dispensers_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/dispensers/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/dispensers/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/dispensers/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/dispensers/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/dispensers/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/dispensers/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/dispensers/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/dispensers/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /dispensers/{assigner}/{value}`

*Get a Dispenser by assigner and value*

Get a Dispenser by assigner and value.

<h3 id="get__dispensers_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|pharmacyLocations|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__dispensers_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__dispensers_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__prescribers

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/prescribers \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/prescribers HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/prescribers',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/prescribers',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/prescribers', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/prescribers", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /prescribers`

*Query prescribers*

Returns prescribers based on the following criteria

<h3 id="get__prescribers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The unique name of the prescriber|
|city|query|string|false|The city of the prescriber|
|state|query|string|false|The state or province of the prescriber|
|postalCode|query|string|false|The postalCode of the prescriber|
|address|query|string|false|The address of the prescriber|
|country|query|string|false|The country of the prescriber|
|gender|query|string|false|The gender of the prescriber|
|clinicLocationId|query|string|false|The clinicLocation of this Prescriber|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gender|male|
|gender|female|
|gender|other|
|gender|unknown|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__prescribers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__prescribers-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__prescribers_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/prescribers/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/prescribers/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/prescribers/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/prescribers/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/prescribers/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/prescribers/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /prescribers/{id}`

*Get a Prescriber by id*

Get a Prescriber by id.

<h3 id="get__prescribers_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

<h3 id="get__prescribers_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__prescribers_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__prescribers_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/prescribers/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/prescribers/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/prescribers/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/prescribers/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/prescribers/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/prescribers/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /prescribers/{assigner}/{value}`

*Get a Prescriber assigner and value*

Get a Prescriber by assigner and value.

<h3 id="get__prescribers_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|assigner|path|string|true|none|
|value|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

<h3 id="get__prescribers_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__prescribers_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicAdmins

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicAdmins \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicAdmins HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicAdmins',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicAdmins',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicAdmins', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicAdmins", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicAdmins`

*Query ClinicAdmin*

Returns ClinicAdmin based on the following criteria

<h3 id="get__clinicadmins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The unique name of the prescriber|
|city|query|string|false|The city of the prescriber|
|state|query|string|false|The state or province of the prescriber|
|postalCode|query|string|false|The postalCode of the prescriber|
|address|query|string|false|The address of the prescriber|
|country|query|string|false|The country of the prescriber|
|gender|query|string|false|The gender of the prescriber|
|clinicLocationId|query|string|false|The clinicLocation of this ClinicAdmin|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|gender|male|
|gender|female|
|gender|other|
|gender|unknown|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__clinicadmins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__clinicadmins-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicAdmins_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicAdmins/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicAdmins/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicAdmins/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicAdmins/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicAdmins/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicAdmins/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicAdmins/{id}`

*Get a ClinicAdmin by id*

Get a ClinicAdmin by id.

<h3 id="get__clinicadmins_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

<h3 id="get__clinicadmins_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__clinicadmins_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicAdmins_{assigner}_{value}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicAdmins/{assigner}/{value} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicAdmins/{assigner}/{value} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins/{assigner}/{value}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicAdmins/{assigner}/{value}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicAdmins/{assigner}/{value}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicAdmins/{assigner}/{value}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins/{assigner}/{value}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicAdmins/{assigner}/{value}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicAdmins/{assigner}/{value}`

*Get a Prescriber assigner and value*

Get a Prescriber by assigner and value.

<h3 id="get__clinicadmins_{assigner}_{value}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|assigner|path|string|true|none|
|value|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|favoriteSigs|
|_include|clinicLocations|

> Example responses

<h3 id="get__clinicadmins_{assigner}_{value}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__clinicadmins_{assigner}_{value}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__patients

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/patients \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/patients HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/patients',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/patients',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/patients', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/patients", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /patients`

*Find patients*

Find patients

<h3 id="get__patients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of patient|
|clinicLocationId|query|string|false|The clinicLocation of this patient|
|pharmacyLocationId|query|string|false|The pharmacyLocation of this patient|
|direct|query|boolean|false|If true filters out patients without a direct relationship|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|prescribers|
|_include|clinicLocations|
|_include|dispensers|
|_include|pharmacyLocations|

> Example responses

<h3 id="get__patients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__patients-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__patients_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/patients/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/patients/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/patients/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/patients/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/patients/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/patients/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/patients/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /patients/{id}`

*Get a Patient assigner and value*

Get a Patient by assigner and value.

<h3 id="get__patients_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|prescribers|
|_include|clinicLocations|
|_include|dispensers|
|_include|pharmacyLocations|

> Example responses

<h3 id="get__patients_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__patients_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__patients_{id}_mme

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/patients/{id}/mme

```

```http
GET /localhost:3000/patients/{id}/mme HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/patients/{id}/mme',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/patients/{id}/mme',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/patients/{id}/mme',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/patients/{id}/mme', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/patients/{id}/mme");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/patients/{id}/mme", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /patients/{id}/mme`

*Get MME for a Patient's current active medications*

Get MME for a Patient's current active medications.

<h3 id="get__patients_{id}_mme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get__patients_{id}_mme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocations

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocations \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocations HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocations',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocations',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocations',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocations', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocations");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocations", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocations`

*Query pharmacyLocations*

Returns pharmacyLocations to the caller

<h3 id="get__pharmacylocations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the pharmacy|
|city|query|string|false|The city of the pharmacy|
|state|query|string|false|The state or province of the pharmacy|
|postalCode|query|string|false|The postalCode of the pharmacy|
|address|query|string|false|The address of the pharmacy|
|country|query|string|false|The country of the pharmacy|
|status|query|string|false|The status of the pharmacy|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|status|sold|
|status|closed|
|status|relocated|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__pharmacylocations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__pharmacylocations-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocations_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocations/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocations/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocations/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocations/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocations/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocations/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocations/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocations/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocations/{id}`

*Get a PharmacyLocation by unique HealthChain id.*

Get a PharmacyLocation by unique HealthChain id.

<h3 id="get__pharmacylocations_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="get__pharmacylocations_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__pharmacylocations_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationRequests_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationRequests/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/medicationRequests/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationRequests/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/medicationRequests/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/medicationRequests/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationRequests/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationRequests/{id}`

*Get medication request*

Return a MedicationRequest record with specified id.

<h3 id="get__medicationrequests_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|prescriber|
|_include|onBehalfOf|
|_include|patient|
|_include|recorder|
|_include|dispenser|
|_include|assignedPharmacy|
|_include|medicationDispenses|
|_include|medication|

> Example responses

<h3 id="get__medicationrequests_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<h3 id="get__medicationrequests_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationRequests_{id}_mme

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationRequests/{id}/mme

```

```http
GET /localhost:3000/medicationRequests/{id}/mme HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/mme',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationRequests/{id}/mme',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/medicationRequests/{id}/mme',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/medicationRequests/{id}/mme', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/mme");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationRequests/{id}/mme", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationRequests/{id}/mme`

*Get MME for the medication request*

Return the MME value for the MedicationRequest record with specified id.

<h3 id="get__medicationrequests_{id}_mme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get__medicationrequests_{id}_mme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationRequests_{id}_note

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationRequests/{id}/note \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/medicationRequests/{id}/note HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationRequests/{id}/note',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationRequests/{id}/note',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/medicationRequests/{id}/note',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/medicationRequests/{id}/note', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationRequests/{id}/note");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationRequests/{id}/note", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationRequests/{id}/note`

*Get medication request notes*

Return a MedicationRequest record's notes with specified id.

<h3 id="get__medicationrequests_{id}_note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="get__medicationrequests_{id}_note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<h3 id="get__medicationrequests_{id}_note-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationDispenses_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationDispenses/{id}

```

```http
GET /localhost:3000/medicationDispenses/{id} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medicationDispenses/{id}',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medicationDispenses/{id}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/medicationDispenses/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/medicationDispenses/{id}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationDispenses/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationDispenses/{id}`

*Query medication requests*

Return a list of MedicationRequest records based on the following criteria.

<h3 id="get__medicationdispenses_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|
|id|path|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|medicationRequest|
|_include|dispenser|
|_include|patient|
|_include|pharmacyLocation|
|_include|medication|

<h3 id="get__medicationdispenses_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__medicationDispenses_{id}_note

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medicationDispenses/{id}/note \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/medicationDispenses/{id}/note HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/medicationDispenses/{id}/note',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/medicationDispenses/{id}/note',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/medicationDispenses/{id}/note',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/medicationDispenses/{id}/note', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medicationDispenses/{id}/note");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medicationDispenses/{id}/note", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medicationDispenses/{id}/note`

*Get medication dispense notes*

Return a MedicationDispense record's notes with specified id.

<h3 id="get__medicationdispenses_{id}_note-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

<h3 id="get__medicationdispenses_{id}_note-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<h3 id="get__medicationdispenses_{id}_note-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__medications_{din}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medications/{din}

```

```http
GET /localhost:3000/medications/{din} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medications/{din}',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medications/{din}',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/medications/{din}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/medications/{din}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medications/{din}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medications/{din}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medications/{din}`

*Query medication by DIN*

Return the Medication information for a drug.

<h3 id="get__medications_{din}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|din|path|string|true|none|

<h3 id="get__medications_{din}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__medications_{din}_mme

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medications/{din}/mme

```

```http
GET /localhost:3000/medications/{din}/mme HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medications/{din}/mme',
  method: 'get',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medications/{din}/mme',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/medications/{din}/mme',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/medications/{din}/mme', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medications/{din}/mme");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medications/{din}/mme", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medications/{din}/mme`

*Query MME for a DIN*

Return the MME value for a unit of chosen drug.

<h3 id="get__medications_{din}_mme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|din|path|string|true|none|

<h3 id="get__medications_{din}_mme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__medications

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/medications?query=Tylenol

```

```http
GET /localhost:3000/medications?query=Tylenol HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/medications',
  method: 'get',
  data: '?query=Tylenol',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/medications?query=Tylenol',
{
  method: 'GET'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get '/localhost:3000/medications',
  params: {
  'query' => 'string'
}

p JSON.parse(result)

```

```python
import requests

r = requests.get('/localhost:3000/medications', params={
  'query': 'Tylenol'
)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/medications?query=Tylenol");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/medications", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /medications`

*Return Medication information for chosen drugs.*

Return Medication information for chosen drugs.

<h3 id="get__medications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|none|

<h3 id="get__medications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocationApplications

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocationApplications \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocationApplications HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocationApplications',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocationApplications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocationApplications',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocationApplications', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocationApplications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocationApplications", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocationApplications`

*Query ClinicLocationApplication*

Returns ClinicLocationApplication to the caller

<h3 id="get__cliniclocationapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|The status of the clinic|
|recorderId|query|string|false|The recorder of this Application|
|clinicLocationId|query|string|false|The clinicLocation of this Application|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|_include|owner|
|_include|recorder|
|_include|clinicLocation|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__cliniclocationapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__cliniclocationapplications-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__clinicLocationApplications_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/clinicLocationApplications/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/clinicLocationApplications/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicLocationApplications/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/clinicLocationApplications/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/clinicLocationApplications/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/clinicLocationApplications/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicLocationApplications/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/clinicLocationApplications/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /clinicLocationApplications/{id}`

*Get a ClinicLocationApplication by unique HealthChain id.*

Get a ClinicLocationApplication by unique HealthChain id.

<h3 id="get__cliniclocationapplications_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|owner|
|_include|recorder|
|_include|clinicLocation|

> Example responses

<h3 id="get__cliniclocationapplications_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__cliniclocationapplications_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocationApplications

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocationApplications \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocationApplications HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocationApplications',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocationApplications',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocationApplications',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocationApplications', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocationApplications");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocationApplications", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocationApplications`

*Query PharmacyLocationApplication*

Returns PharmacyLocationApplication to the caller

<h3 id="get__pharmacylocationapplications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|The status of the PharmacyLocationApplication|
|recorderId|query|string|false|The recorder of this Application|
|pharmacyLocationId|query|string|false|The pharmacyLocation of this Application|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|status|active|
|status|inactive|
|_include|owner|
|_include|recorder|
|_include|pharmacyLocation|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get__pharmacylocationapplications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|default|Default|Error|[ErrorResponse](#schemaerrorresponse)|

<h3 id="get__pharmacylocationapplications-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__pharmacyLocationApplications_{id}

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/pharmacyLocationApplications/{id} \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/pharmacyLocationApplications/{id} HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/pharmacyLocationApplications/{id}',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/pharmacyLocationApplications/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/pharmacyLocationApplications/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/pharmacyLocationApplications/{id}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/pharmacyLocationApplications/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/pharmacyLocationApplications/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /pharmacyLocationApplications/{id}`

*Get a PharmacyLocationApplication by unique HealthChain id.*

Get a PharmacyLocationApplication by unique HealthChain id.

<h3 id="get__pharmacylocationapplications_{id}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|_include|query|array[string]|false|A list of URI properties to be resolved/included in result|

#### Enumerated Values

|Parameter|Value|
|---|---|
|_include|owner|
|_include|recorder|
|_include|pharmacyLocation|

> Example responses

<h3 id="get__pharmacylocationapplications_{id}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__pharmacylocationapplications_{id}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get__sigs

> Code samples

```shell
# You can also use wget
curl -X GET /localhost:3000/sigs \
  -H 'Accept: application/json'

```

```http
GET /localhost:3000/sigs HTTP/1.1

Accept: application/json

```

```javascript
var headers = {
  'Accept':'application/json'

};

$.ajax({
  url: '/localhost:3000/sigs',
  method: 'get',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

const headers = {
  'Accept':'application/json'

};

fetch('/localhost:3000/sigs',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/localhost:3000/sigs',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/localhost:3000/sigs', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/sigs");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/localhost:3000/sigs", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /sigs`

*Get Sigs*

Get Sigs

> Example responses

<h3 id="get__sigs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|

<h3 id="get__sigs-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="healthchain-portage-api-prescriber-preferences">Prescriber Preferences</h1>

## put__prescribers_favoriteSigs_{sigId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/prescribers/favoriteSigs/{sigId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/prescribers/favoriteSigs/{sigId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/prescribers/favoriteSigs/{sigId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/prescribers/favoriteSigs/{sigId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/prescribers/favoriteSigs/{sigId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/prescribers/favoriteSigs/{sigId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers/favoriteSigs/{sigId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/prescribers/favoriteSigs/{sigId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /prescribers/favoriteSigs/{sigId}`

*Add a prescriber's favorite sig*

If a specific sigId is specified, a relationship to the existing sig will be created.  Otherwise, a Sig described in the body will be created and added as a favorite.
A prescriber can only ever run this for themselves.

> Body parameter

```json
{}
```

<h3 id="put__prescribers_favoritesigs_{sigid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[x-any](#schemax-any)|false|Sig|
|sigId|path|string|true|none|

<h3 id="put__prescribers_favoritesigs_{sigid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete__prescribers_favoriteSigs_{sigId}

> Code samples

```shell
# You can also use wget
curl -X DELETE /localhost:3000/prescribers/favoriteSigs/{sigId}

```

```http
DELETE /localhost:3000/prescribers/favoriteSigs/{sigId} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/prescribers/favoriteSigs/{sigId}',
  method: 'delete',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/prescribers/favoriteSigs/{sigId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/localhost:3000/prescribers/favoriteSigs/{sigId}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/localhost:3000/prescribers/favoriteSigs/{sigId}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/prescribers/favoriteSigs/{sigId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/localhost:3000/prescribers/favoriteSigs/{sigId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /prescribers/favoriteSigs/{sigId}`

*Remove a prescriber's favorite sig*

Remove a prescriber's favorite sig

<h3 id="delete__prescribers_favoritesigs_{sigid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sigId|path|string|true|none|

<h3 id="delete__prescribers_favoritesigs_{sigid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__clinicAdmins_favoriteSigs_{sigId}

> Code samples

```shell
# You can also use wget
curl -X PUT /localhost:3000/clinicAdmins/favoriteSigs/{sigId} \
  -H 'Content-Type: application/json'

```

```http
PUT /localhost:3000/clinicAdmins/favoriteSigs/{sigId} HTTP/1.1

Content-Type: application/json

```

```javascript
var headers = {
  'Content-Type':'application/json'

};

$.ajax({
  url: '/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
  method: 'put',

  headers: headers,
  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json'

};

fetch('/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.put '/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.put('/localhost:3000/clinicAdmins/favoriteSigs/{sigId}', params={

}, headers = headers)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins/favoriteSigs/{sigId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/localhost:3000/clinicAdmins/favoriteSigs/{sigId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /clinicAdmins/favoriteSigs/{sigId}`

*Add a prescriber's favorite sig*

If a specific sigId is specified, a relationship to the existing sig will be created.  Otherwise, a Sig described in the body will be created and added as a favorite.
A prescriber can only ever run this for themselves.

> Body parameter

```json
{}
```

<h3 id="put__clinicadmins_favoritesigs_{sigid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[x-any](#schemax-any)|false|Sig|
|sigId|path|string|true|none|

<h3 id="put__clinicadmins_favoritesigs_{sigid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete__clinicAdmins_favoriteSigs_{sigId}

> Code samples

```shell
# You can also use wget
curl -X DELETE /localhost:3000/clinicAdmins/favoriteSigs/{sigId}

```

```http
DELETE /localhost:3000/clinicAdmins/favoriteSigs/{sigId} HTTP/1.1

```

```javascript

$.ajax({
  url: '/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
  method: 'delete',

  success: function(data) {
    console.log(JSON.stringify(data));
  }
})

```

```javascript--nodejs
const fetch = require('node-fetch');

fetch('/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/localhost:3000/clinicAdmins/favoriteSigs/{sigId}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/localhost:3000/clinicAdmins/favoriteSigs/{sigId}', params={

)

print r.json()

```

```java
URL obj = new URL("/localhost:3000/clinicAdmins/favoriteSigs/{sigId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/localhost:3000/clinicAdmins/favoriteSigs/{sigId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /clinicAdmins/favoriteSigs/{sigId}`

*Remove a prescriber's favorite sig*

Remove a prescriber's favorite sig

<h3 id="delete__clinicadmins_favoritesigs_{sigid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sigId|path|string|true|none|

<h3 id="delete__clinicadmins_favoritesigs_{sigid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Request was successful|None|
|409|[Conflict](https://tools.ietf.org/html/rfc7231#section-6.5.8)|Server error|None|
|default|Default|Unexpected error|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocSerrorresponse">ErrorResponse</h2>

<a id="schemaerrorresponse"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

<h2 id="tocSx-any">x-any</h2>

<a id="schemax-any"></a>

```json
{}

```

### Properties

*None*

