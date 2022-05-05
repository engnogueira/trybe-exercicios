SELECT JOB_ID, FORMAT(SUM(SALARY), 2, 'de_DE') as TotalSalarioFuncao FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
