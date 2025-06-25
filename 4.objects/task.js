"use strict";

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || !Array.isArray(this.marks) || this.marks.length === 0) {
		return 0;
	}

	let sum = this.marks.reduce((acc, element) => acc + element, 0);
	return parseFloat((sum / this.marks.length).toFixed(2));
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}