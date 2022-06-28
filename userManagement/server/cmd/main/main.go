package main

import (
	"example/server/pkg/routes"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()
	routes.RootHandler(r)
	http.Handle("/", r)
	handler := cors.AllowAll().Handler(r)
	log.Fatal(http.ListenAndServe("localhost:3001", handler))

}
