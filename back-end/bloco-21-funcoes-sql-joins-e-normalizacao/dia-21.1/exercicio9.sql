SELECT JOB_ID, format(avg(SALARY), 2, 'de_DE') AS MediaSalarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY avg(SALARY) DESC;
