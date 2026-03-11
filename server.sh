#! /bin/sh
set -eu
if [ ! -d .bundle ]
	then
	bundle config set --local path '.bundle/gems'	
	bundle install
	fi
exec bundle exec jekyll serve
