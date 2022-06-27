package main

func main() {
	println(findMostFrequent([]string{"asdsa", "asdqwe", "a", "a", "b", "b", "b"}))
	println("----------")

	println(findMostFrequent([]string{"asdsa", "asdqwe", "a", "a", "as", "as", "as", "qqqqq", "qqqqq", "qqqqq", "qqqqq", "qqqqq"}))
	println("----------")

	println(findMostFrequent([]string{"apple", "pie", "apple", "red", "red", "red"}))
	println("----------")

}

// create a hashmap for counting number of occurences of strings,
// check largest count on first iteration for less time complexity
func findMostFrequent(a []string) string {
	m := make(map[string]int)
	var largest int
	var resultString string

	for _, s := range a {
		m[s] = m[s] + 1
		if m[s] > largest {
			largest = m[s]
			resultString = s
		}
	}

	return resultString
}
