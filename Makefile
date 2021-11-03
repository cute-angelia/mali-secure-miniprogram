define GetFromPkg
$(shell node -p "require('./package.json').$(1)")
endef

PROJECT      := $(call GetFromPkg,name)
LAST_VERSION := $(call GetFromPkg,version)


.PHONY: up

up:
	git add .
	git commit -am "update"
	git pull origin master
	git push origin master
	@echo "\n 代码提交发布..."

.PHONY: pubish

pubish:
	git pull origin master
	git add .
	git commit -am "${PROJECT} ${LAST_VERSION} release"
	git push origin master
	@echo "\n 发布中..."%
