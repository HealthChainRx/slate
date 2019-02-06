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
includes:
  - introduction
  - errors
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

* <a href="//https://dev.healthchain.ca/portage/v1/">//https://dev.healthchain.ca/portage/v1/</a>

<h1 id="healthchain-portage-api-pharmacy-locations">Pharmacy Locations</h1>

## List all Pharmacy Locations

<a id="opIdList all Pharmacy Locations"></a>

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

some description here

<h3 id="list-all-pharmacy-locations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int32)|false|How many items to return at one time (max 100)|

> Example responses

> 200 Response

```json
[
  {
    "id": "dc98e40a-1c02-4ce6-a656-f28910c66aaa",
    "resourceType": "org.healthchain.PharmacyLocation",
    "identifier": [
      {
        "resourceType": "org.fhir.Identifier",
        "assigner": "HealthChain",
        "value": "42766d55-d2cf-4de7-9a8c-7816a529f370",
        "system": "https://healthahain.ca/path"
      }
    ],
    "status": "active",
    "name": "Pharma Mart",
    "endpoint": "string",
    "line": [
      "3630 Victoria Park Ave."
    ],
    "city": "Toronto",
    "state": "ON",
    "postalCode": "Z9Z 9Z9",
    "country": "CA",
    "telecom": [
      {
        "resourceType": "org.fhir.ContactPoint",
        "system": "phone",
        "value": "416-555-1212",
        "use": "mobile",
        "rank": 1
      }
    ]
  }
]
```

<h3 id="list-all-pharmacy-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A paged array of pharmacyLocations|Inline|
|default|Default|Unexpected Error|Inline|

<h3 id="list-all-pharmacy-locations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[allOf]|false|none|[A participant named PharmacyLocation]|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» id|string|false|none|none|
|»» resourceType|string|false|none|The class identifier for this type|
|»» identifier|[any]|false|none|External identifiers for this pharmacy location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» assigner|string|true|none|Organization that issued id|
|»»» value|string|true|none|The value that is unique to the assigning organization|
|»»» system|string|false|none|The namespace for the identifier value|
|»» status|string|false|none|Status of the pharmacy location|
|»» name|string|false|none|Name of the pharmacy location|
|»» endpoint|string|false|none|Technical endpoints providing access to services operated for the organization|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|A Location|
|»» line|[string]|false|none|Address details for the location|
|»» city|string|false|none|City of the location|
|»» state|string|false|none|State or province of the location|
|»» postalCode|string(^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$)|false|none|Postal code of the location|
|»» country|string|false|none|Country of the location|
|»» telecom|[any]|false|none|A contact detail for the location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» system|string|true|none|none|
|»»» value|string(^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$)|true|none|none|
|»»» use|string|false|none|none|
|»»» rank|number(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|CA|
|country|US|
|system|phone|
|system|fax|
|system|email|
|system|pager|
|system|url|
|system|sms|
|system|other|
|use|home|
|use|work|
|use|business|
|use|temp|
|use|mobile|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|true|none|none|
|» errors|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## Info for a specific pharmacyLocation

<a id="opIdRetrieve Pharmacy Location"></a>

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

<h3 id="info-for-a-specific-pharmacylocation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the pharmacyLocation to retrieve|

> Example responses

> 200 Response

```json
{
  "id": "dc98e40a-1c02-4ce6-a656-f28910c66aaa",
  "resourceType": "org.healthchain.PharmacyLocation",
  "identifier": [
    {
      "resourceType": "org.fhir.Identifier",
      "assigner": "HealthChain",
      "value": "42766d55-d2cf-4de7-9a8c-7816a529f370",
      "system": "https://healthahain.ca/path"
    }
  ],
  "status": "active",
  "name": "Pharma Mart",
  "endpoint": "string",
  "line": [
    "3630 Victoria Park Ave."
  ],
  "city": "Toronto",
  "state": "ON",
  "postalCode": "Z9Z 9Z9",
  "country": "CA",
  "telecom": [
    {
      "resourceType": "org.fhir.ContactPoint",
      "system": "phone",
      "value": "416-555-1212",
      "use": "mobile",
      "rank": 1
    }
  ]
}
```

<h3 id="info-for-a-specific-pharmacylocation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Expected response to a valid request|Inline|
|default|Default|Unexpected Error|Inline|

<h3 id="info-for-a-specific-pharmacylocation-responseschema">Response Schema</h3>

Status Code **200**

*A participant named PharmacyLocation*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» id|string|false|none|none|
|»» resourceType|string|false|none|The class identifier for this type|
|»» identifier|[any]|false|none|External identifiers for this pharmacy location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» assigner|string|true|none|Organization that issued id|
|»»» value|string|true|none|The value that is unique to the assigning organization|
|»»» system|string|false|none|The namespace for the identifier value|
|»» status|string|false|none|Status of the pharmacy location|
|»» name|string|false|none|Name of the pharmacy location|
|»» endpoint|string|false|none|Technical endpoints providing access to services operated for the organization|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|A Location|
|»» line|[string]|false|none|Address details for the location|
|»» city|string|false|none|City of the location|
|»» state|string|false|none|State or province of the location|
|»» postalCode|string(^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$)|false|none|Postal code of the location|
|»» country|string|false|none|Country of the location|
|»» telecom|[any]|false|none|A contact detail for the location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» system|string|true|none|none|
|»»» value|string(^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$)|true|none|none|
|»»» use|string|false|none|none|
|»»» rank|number(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|CA|
|country|US|
|system|phone|
|system|fax|
|system|email|
|system|pager|
|system|url|
|system|sms|
|system|other|
|use|home|
|use|work|
|use|business|
|use|temp|
|use|mobile|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|true|none|none|
|» errors|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## Get a PharmacyLocation by Identifier properties assigner and value

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

Get a PharmacyLocation by Identifier properties assigner and value.

<h3 id="get-a-pharmacylocation-by-identifier-properties-assigner-and-value-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assigner|path|string|true|none|
|value|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "dc98e40a-1c02-4ce6-a656-f28910c66aaa",
  "resourceType": "org.healthchain.PharmacyLocation",
  "identifier": [
    {
      "resourceType": "org.fhir.Identifier",
      "assigner": "HealthChain",
      "value": "42766d55-d2cf-4de7-9a8c-7816a529f370",
      "system": "https://healthahain.ca/path"
    }
  ],
  "status": "active",
  "name": "Pharma Mart",
  "endpoint": "string",
  "line": [
    "3630 Victoria Park Ave."
  ],
  "city": "Toronto",
  "state": "ON",
  "postalCode": "Z9Z 9Z9",
  "country": "CA",
  "telecom": [
    {
      "resourceType": "org.fhir.ContactPoint",
      "system": "phone",
      "value": "416-555-1212",
      "use": "mobile",
      "rank": 1
    }
  ]
}
```

<h3 id="get-a-pharmacylocation-by-identifier-properties-assigner-and-value-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Expected response to a valid request|Inline|
|default|Default|Unexpected Error|Inline|

<h3 id="get-a-pharmacylocation-by-identifier-properties-assigner-and-value-responseschema">Response Schema</h3>

Status Code **200**

*A participant named PharmacyLocation*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» id|string|false|none|none|
|»» resourceType|string|false|none|The class identifier for this type|
|»» identifier|[any]|false|none|External identifiers for this pharmacy location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» assigner|string|true|none|Organization that issued id|
|»»» value|string|true|none|The value that is unique to the assigning organization|
|»»» system|string|false|none|The namespace for the identifier value|
|»» status|string|false|none|Status of the pharmacy location|
|»» name|string|false|none|Name of the pharmacy location|
|»» endpoint|string|false|none|Technical endpoints providing access to services operated for the organization|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|A Location|
|»» line|[string]|false|none|Address details for the location|
|»» city|string|false|none|City of the location|
|»» state|string|false|none|State or province of the location|
|»» postalCode|string(^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]●?[0-9][A-Z][0-9]$)|false|none|Postal code of the location|
|»» country|string|false|none|Country of the location|
|»» telecom|[any]|false|none|A contact detail for the location|
|»»» resourceType|string|false|none|The class identifier for this type|
|»»» system|string|true|none|none|
|»»» value|string(^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$)|true|none|none|
|»»» use|string|false|none|none|
|»»» rank|number(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|country|CA|
|country|US|
|system|phone|
|system|fax|
|system|email|
|system|pager|
|system|url|
|system|sms|
|system|other|
|use|home|
|use|work|
|use|business|
|use|temp|
|use|mobile|

Status Code **default**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int32)|false|none|none|
|» message|string|true|none|none|
|» errors|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

