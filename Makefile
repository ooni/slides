DIRS := $(filter-out node_modules/yarn, $(wildcard */*))

clean:
	rm -rf public
	mkdir public

all: clean $(DIRS)

$(DIRS):
	@echo $@
	./build.sh $@

.PHONY: clean $(DIRS)
