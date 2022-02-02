#!/bin/bash
curl  localhost:3000/users
echo
curl -X DELETE localhost:3000/users
echo
curl -X PUT localhost:3000/users
echo
curl -X POST localhost:3000/users
echo
curl  localhost:3000/resource
echo
curl -X DELETE localhost:3000/resource
echo
curl -X PUT localhost:3000/resource
echo
curl -X POST localhost:3000/resource
echo