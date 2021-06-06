#!/bin/bash

API="http://localhost:4741"
URL_PATH="/gameboards"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo

# TOKEN="ab5ddf06ce16fd8c1211af9211789e92" sh create.sh
# TOKEN="ae178317a81cca5c9aea388146b699f6" sh create.sh
