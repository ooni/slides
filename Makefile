DIRS := $(filter-out node_modules/yarn, $(wildcard */*))
ROOT := $(shell pwd)

all:
	@echo $(DIRS)
	for dir in $(DIRS); do \
		echo "==> Building $$dir"; \
		cd $$dir && yarn install && yarn run build && cd $(ROOT); \
	done
