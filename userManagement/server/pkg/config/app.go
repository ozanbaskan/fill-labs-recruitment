package config

import (
	"os"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/joho/godotenv"
)

var (
	db *gorm.DB
)

//read env variables from the .env file and use when connecting to database
func Connect() {

	err := godotenv.Load(".env")

	if err != nil {
		panic(err)
	}

	hostDB := os.Getenv("DB_HOST")
	portDB := os.Getenv("DB_PORT")
	usernameDB := os.Getenv("DB_USERNAME")
	passwordDB := os.Getenv("DB_PASSWORD")
	nameDB := os.Getenv("DB_NAME")
	d, err := gorm.Open("mysql", usernameDB+":"+passwordDB+"@tcp("+hostDB+":"+portDB+")/"+nameDB+"?charset=utf8mb4&parseTime=True&loc=Local")

	if err != nil {
		panic(err)
	}
	db = d
}

func GetDB() *gorm.DB {
	return db
}
