SELECT t1.title, t2.domestic_sales, t2.international_sales
FROM pixar.movies AS t1
INNER JOIN pixar.boxoffice AS t2
ON t1.id = t2.movie_id;
