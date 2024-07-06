# API de Gerenciamento de Pedidos

Este repositório contém uma API simples para gerenciar pedidos, desenvolvida em Node.js com MongoDB como banco de dados.

## Endpoints

- **POST /order**: Cria um novo pedido.
- **GET /order/:orderId**: Obtém os dados de um pedido específico.
- **GET /order/list**: Lista todos os pedidos.
- **PUT /order/:orderId**: Atualiza um pedido existente.
- **DELETE /order/:orderId**: Deleta um pedido.

## Documentação da API[order.postman_collection.json](https://github.com/user-attachments/files/16117425/order.postman_collection.json){
	"info": {
		"_postman_id": "0b3edda1-80af-4df5-bd0e-204e59bcbe35",
		"name": "order",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "18570226"
	},
	"item": [
		{
			"name": "add order",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"numeroPedido\": \"v10089015vdb-01\",\n    \"valorTotal\": 10000,\n    \"dataCriacao\": \"2023-07-19T12:24:11.5299601+00:00\",\n    \"items\": [\n        {\n            \"idItem\": \"2434\",\n            \"quantidadeItem\": 1,\n            \"valorItem\": 1000\n        }\n    ]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "curl --location --request POST 'http://localhost:3000/order' \\--header 'Content-Type: application/json' \\--data-raw '{    \"numeroPedido\": \"v10089015vdb-01\",    \"valorTotal\": 10000,    \"dataCriacao\": \"2023-07-19T12:24:11.5299601+00:00\",    \"items\": [        {            \"idItem\": \"2434\",            \"quantidadeItem\": 1,            \"valorItem\": 1000        }    ]}'",
					"protocol": "curl --location --request POST 'http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"order' ",
						"--header 'Content-Type: application",
						"json' ",
						"--data-raw '{    \"numeroPedido\": \"v10089015vdb-01\",    \"valorTotal\": 10000,    \"dataCriacao\": \"2023-07-19T12:24:11.5299601+00:00\",    \"items\": [        {            \"idItem\": \"2434\",            \"quantidadeItem\": 1,            \"valorItem\": 1000        }    ]}'"
					]
				}
			},
			"response": []
		},
		{
			"name": "get order by id",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/order/list/v10089015vdb-01",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"order",
						"list",
						"v10089015vdb-01"
					]
				}
			},
			"response": []
		},
		{
			"name": "change order",
			"request": {
				"method": "PUT",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n    \"valorTotal\": 15000,\n    \"dataCriacao\": \"2023-07-20T12:24:11.5299601+00:00\",\n    \"items\": [\n        {\n            \"idItem\": \"2434\",\n            \"quantidadeItem\": 2,\n            \"valorItem\": 2000\n        }\n    ]\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "curl --location --request PUT 'http://localhost:3000/order/v10089015vdb-01' \\--header 'Content-Type: application/json' \\--data-raw '{    \"valorTotal\": 15000,    \"dataCriacao\": \"2023-07-20T12:24:11.5299601+00:00\",    \"items\": [        {            \"idItem\": \"2434\",            \"quantidadeItem\": 2,            \"valorItem\": 2000        }    ]}'",
					"protocol": "curl --location --request PUT 'http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"order",
						"v10089015vdb-01' ",
						"--header 'Content-Type: application",
						"json' ",
						"--data-raw '{    \"valorTotal\": 15000,    \"dataCriacao\": \"2023-07-20T12:24:11.5299601+00:00\",    \"items\": [        {            \"idItem\": \"2434\",            \"quantidadeItem\": 2,            \"valorItem\": 2000        }    ]}'"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete order",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "curl --location --request DELETE 'http://localhost:3000/order/v10089015vdb-01'",
					"protocol": "curl --location --request DELETE 'http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"order",
						"v10089015vdb-01'"
					]
				}
			},
			"response": []
		},
		{
			"name": "get all orders",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "curl --location --request GET 'http://localhost:3000/order/list'",
					"protocol": "curl --location --request GET 'http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"order",
						"list'"
					]
				}
			},
			"response": []
		}
	]
}


A documentação detalhada da API pode ser encontrada [aqui](link-para-sua-documentacao-postman).

## Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
