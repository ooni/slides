DIRS := $(filter-out public/%, $(filter-out node_modules/%, $(wildcard */*)))

clean:
	rm -rf public
	mkdir public

all: clean $(DIRS)

$(DIRS):
	@echo $(DIRS)
	@echo $@
	./build.sh $@

.PHONY: clean $(DIRS)
