package main

import "strconv"

func main() {
	println(recursiveFunc(9))
	println("----------")

	println(recursiveFunc(1048))
	println("----------")

	println(recursiveFunc(256))
	println("----------")

}

// recursive function for returing a string line by line numbers
func recursiveFunc(i int) string {
	// exit cundition
	if i <= 2 {
		return strconv.Itoa(i)
	}
	var endString string = ""
	// recursive call
	endString += recursiveFunc(i/2) + "\n"
	return endString + strconv.Itoa(i)
}
