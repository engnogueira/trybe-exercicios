SELECT
FORMAT(MAX(SALARY), 2, 'de_DE') AS MaiorSalario,
FORMAT(MIN(SALARY), 2, 'de_DE') AS MenorSalario,
FORMAT(SUM(SALARY), 2, 'de_DE') AS TotalSalario,
FORMAT(AVG(SALARY), 2, 'de_DE') AS MediaSalarios
FROM hr.employees;
