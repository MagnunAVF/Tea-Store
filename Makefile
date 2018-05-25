help:
	@echo 'Makefile for Tea-store                                                '
	@echo '                                                                      '
	@echo 'Usage:                                                                '
	@echo '   setup                   Setup all containers                       '
	@echo '   reset                   Delete all containers                      '
	@echo '   run                     Run all container localy                   '
	@echo '   run-dev-env-api         Run env for backend development            '
	@echo '   run-dev-env-client      Run env for frontend development           '

setup:
	docker-compose build
	docker-compose run --rm api rails db:create db:migrate db:seed

reset:
	docker-compose down

run:
	docker-compose up

run-dev-env-api:
	docker-compose run api sh

run-dev-env-client:
	docker-compose run client bash

.PHONY: setup, reset, run, run-dev-env-api, run-dev-env-client
