#!/usr/bin/env bash

set -e

ab -k -c 100 -n 500 -v 2 http://localhost:3000/
