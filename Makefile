DIRS := $(wildcard */*)
ROOT := $(shell pwd)

all:
	for dir in $(DIRS); do \
		echo "==> Building $$dir"; \
		cd $$dir && yarn install && yarn run build && cd $(ROOT); \
	done
