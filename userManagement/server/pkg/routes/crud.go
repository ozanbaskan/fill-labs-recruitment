package routes

import (
	"example/server/pkg/controllers"

	"github.com/gorilla/mux"
)

var RootHandler = func(router *mux.Router) {
	router.HandleFunc("/users", controllers.GetUsers).Methods("GET")
	router.HandleFunc("/user/{userId}", controllers.GetUserById).Methods("GET")
	router.HandleFunc("/user/{userId}", controllers.UpdateUser).Methods("PUT")
	router.HandleFunc("/user", controllers.CreateUser).Methods("POST")
	router.HandleFunc("/user/{userId}", controllers.DeleteUserById).Methods("DELETE")

}
