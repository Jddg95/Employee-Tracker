DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
\c employee_tracker

CREATE TABLE department_table(
    id serial primary key,
    name VARCHAR(32)
);

CREATE TABLE roles (
    id serial primary key,
    title VARCHAR(10),
    salary DECIMAL,
    department_id INTEGER NOT NULL,
    constraint fk_department foreign key(department_id) references department_table(id) on delete cascade
);

CREATE TABLE employees(
    id serial primary key,
    full_name VARCHAR(32),
    manager_id INTEGER,
    constraint fk_manager foreign key(manager_id) references employees(id) on delete cascade,
    role_id INTEGER NOT NULL,
    constraint fk_role foreign key(role_id) references roles(id) on delete cascade
);