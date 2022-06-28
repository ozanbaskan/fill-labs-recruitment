package main

import (
	"fmt"
	"strings"
)

func main() {
	// example string array
	var stringArray []string = []string{"asdsad", "wqewqe", "qwqaaaaa", "aads", "aaqwewq", "aax"}

	// unsorted string array
	fmt.Println(stringArray)
	stringArray = mergeSort(stringArray)

	// sorted string array
	fmt.Println(stringArray)
}

// create a function for custom comparison of strings in our sort algorithm
// compare the counts of char "a" in strings, if equal compare the lengths
// preprocessing the string array and turning the string array a tuple array with 2 integers
// number of char "a" and string length respectively would decrease the space complexity greatly for large input
func customCompareStrings(s1 string, s2 string) bool {
	i1, i2 := strings.Count(s1, "a"), strings.Count(s2, "a")
	if i1 == i2 {
		return strings.Count(s1, "") > strings.Count(s2, "")
	} else {
		return i1 > i2
	}
}

// golang implementation of mergeSort algorithm
func mergeSort(items []string) []string {
	var num = len(items)

	if num == 1 {
		return items
	}

	middle := int(num / 2)
	var (
		left  = make([]string, middle)
		right = make([]string, num-middle)
	)
	for i := 0; i < num; i++ {
		if i < middle {
			left[i] = items[i]
		} else {
			right[i-middle] = items[i]
		}
	}

	return merge(mergeSort(left), mergeSort(right))
}

func merge(left, right []string) (result []string) {
	result = make([]string, len(left)+len(right))

	i := 0
	for len(left) > 0 && len(right) > 0 {
		if customCompareStrings(left[0], right[0]) {
			result[i] = left[0]
			left = left[1:]
		} else {
			result[i] = right[0]
			right = right[1:]
		}
		i++
	}

	for j := 0; j < len(left); j++ {
		result[i] = left[j]
		i++
	}

	for j := 0; j < len(right); j++ {
		result[i] = right[j]
		i++
	}

	return
}
