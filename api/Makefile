help:
	@echo 'Makefile for Tea-store API                                            '
	@echo '                                                                      '
	@echo 'Usage:                                                                '
	@echo '   setup                   setup project to development               '
	@echo '   auto-test               run automated tests env                    '
	@echo '   run                     run api development ev                     '

setup:
	rake db:create db:migrate db:seed RAILS_ENV=test

auto-test:
	bundle exec guard

run:
	make setup
	make auto-test

.PHONY: setup, auto-test, run
