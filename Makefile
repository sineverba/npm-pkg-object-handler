SONARSCANNER_VERSION=11.0.1.1589_6.1.0

sonar:
	docker run \
		--rm \
		-it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL=$(SONAR_HOST_URL) \
		-e SONAR_TOKEN=$(SONAR_TOKEN) \
		-e SONAR_SCANNER_OPTS="-Xmx1024m" \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npx update-browserslist-db@latest
	npm install
	npm audit fix || exit 0;