SELECT empregados.DEPARTMENT_ID, departamentos.DEPARTMENT_NAME, FORMAT(AVG(empregados.SALARY), 2, 'de_DE') AS MediaSalarial, COUNT(empregados.EMPLOYEE_ID) AS TotalFuncionarios FROM hr.employees AS empregados
INNER JOIN hr.departments AS departamentos
ON empregados.DEPARTMENT_ID = departamentos.DEPARTMENT_ID
GROUP BY DEPARTMENT_ID
HAVING COUNT(EMPLOYEE_ID) > 10;
