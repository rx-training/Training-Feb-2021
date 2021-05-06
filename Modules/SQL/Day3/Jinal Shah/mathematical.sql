/* A mathematical function that returns the absolute (positive) value of the specified numeric expression.  */
								SELECT ABS(-1.0), ABS(0.0), ABS(1.0);

/* This function returns the smallest integer greater than, or equal to, the specified numeric expression. */
				SELECT CEILING($123.45), CEILING($-123.45), CEILING($0.0);  

	/* Returns the largest integer less than or equal to the specified numeric expression. */
				SELECT FLOOR(123.45), FLOOR(-123.45), FLOOR($123.45);  

		/*		EXP - Returns the exponential value of the specified float expression.   */
									 SELECT PI();  

									SELECT EXP(10);  

							SELECT EXP(LOG(20)), LOG(EXP(20))  

		/* Returns a numeric value, rounded to the specified length or precision. */
					SELECT ROUND(123.9994, 3), ROUND(123.9995, 3);  

					SELECT ROUND(123.4545, 2), ROUND(123.45, -2);

	/* Returns the positive (+1), zero (0), or negative (-1) sign of the specified expression. */
						SELECT SIGN(-125), SIGN(0), SIGN(564);

				/* Returns the square root of the specified float value. */
						SELECT SQRT(1.00), SQRT(10.00);

					/* Returns the square of the specified float value. */
							SELECT SQUARE(1.00), SQUARE(10.00);

							SELECT POWER(4,3)