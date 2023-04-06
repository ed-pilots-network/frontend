
# Runs local php built-in web service for local dev/test
PHONY: run-local
run-local:
	@cd web/public_root; php -S localhost:8080