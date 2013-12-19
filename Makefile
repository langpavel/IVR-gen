
all: build/ivr-explain.js

clean:
	$(RM) build/ivr-explain.js

test: all
	node ./test/explain/test.js

build/ivr-explain.js: grammar/ivr-explain.grammar
	./node_modules/.bin/pegjs ./grammar/ivr-explain.grammar ./build/ivr-explain.js

.PHONY: all clean test
