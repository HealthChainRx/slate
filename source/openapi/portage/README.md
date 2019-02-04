# Dependencies
npm install -g yamljs
npm install -g widdershins
npm install -g swagger-combine

# Fork Slate
https://github.com/HealthChainRx/slate

# Convert openapi yaml to json
yaml2json portage-openapi.yaml > portage-oas3.json

widdershins --search true portage-oas3.json -o ../../index.html.md

yaml2json admin-openapi.yaml > admin-oas3.json
widdershins --search true admin-oas3.json -o ../../index.html.md
