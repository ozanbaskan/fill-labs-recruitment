package main

import (
	"example/server/pkg/routes"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterUser(r)
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:3000", r))

}
