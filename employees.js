/*{
	"employees" : [
		{
			"name" : "Siddhi",
			"age" : 32,
			"department" : "Applications",
			"salary" : 100000
		},
		{
			"name" : "Ishani",
			"age" : 28,
			"department" : "Data Science",
			"salary" : 120000
		},
		{
			"name" : "Anil",
			"age" : 30,
			"department" : "Applications",
			"salary" :130000
		},
		{
			"name" : "John",
			"age" : 40,
			"department" : "Data Science",
			"salary" : 100000
		}
	]
}*/

function loadData(){

	var employees = [
		{
			"name" : "Siddhi",
			"age" : 32,
			"department" : "Applications",
			"salary" : 100000
		},
		{
			"name" : "Ishani",
			"age" : 28,
			"department" : "Data Science",
			"salary" : 120000
		},
		{
			"name" : "Anil",
			"age" : 30,
			"department" : "Applications",
			"salary" :130000
		},
		{
			"name" : "John",
			"age" : 40,
			"department" : "Data Science",
			"salary" : 100000
		}
	]

	let employees_department = employees.map((employee,index,employees) => {
			return employee.name
	})

	console.log(employees_department);

	let employees_salary = employees.filter((employee) => {
		//return employee.salary > 100000?employee.name:""
		return employee.salary === 100000
	})

	console.log(employees_salary)

	let employees_salary_application = employees.reduce((totalsal,employee,index,employees) => {

		return totalsal += (employee.department==="Applications"?employee.salary:0)

	},0)
	
	console.log(employees_salary_application)		
}

