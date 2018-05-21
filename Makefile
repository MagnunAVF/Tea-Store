help:
	@echo 'Makefile for Tea-store                                                '
	@echo '                                                                      '
	@echo 'Usage:                                                                '
	@echo '   setup                   Setup all containers                       '
	@echo '   reset                   Delete all containers                      '
	@echo '   run                     Run all container localy                   '

setup:
	docker-compose build
	docker-compose run --rm api rails db:create db:migrate db:seed

reset:
	docker-compose down

run:
	docker-compose up

.PHONY: setup, reset, run

