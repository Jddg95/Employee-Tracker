const inquirer = require('inquirer');

// Function to display the main menu
async function mainMenu() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
        ]
    });

    // Call function based on user's choice
    switch (answer.option) {
        case 'View all departments':
            // Call function to view all departments
            break;
        case 'View all roles':
            // Call function to view all roles
            break;
        case 'View all employees':
            // Call function to view all employees
            break;
        case 'Add a department':
            // Call function to add a department
            break;
        case 'Add a role':
            // Call function to add a role
            break;
        case 'Add an employee':
            // Call function to add an employee
            break;
        case 'Update an employee role':
            // Call function to update an employee role
            break;
        case 'Exit':
            console.log('Exiting...');
            process.exit(0);
            break;
        default:
            console.log('Invalid option');
            break;
    }
}

// Call the main menu function to start the application
mainMenu();
