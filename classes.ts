/* interfaces                         classes
define a new type                     define a new type
properties(signature)                 properties(with manupilation)
methods(signatures)                   methods(manupilation)
cannot be instatiated                 can be instatiated
*/
//an interface
interface Employee {
    name: string;
    title : string;
}

interface Manager extends Employee {
    departmentName : string;
    numOfEmployee : number;

    scheculeMeeting : (topic: string) => void;
}

let developer = {
    name : " Eric Coleman",
    title : "Typesript analyst",
    editor: "vscode"
}

let newEmployee: Employee = developer;