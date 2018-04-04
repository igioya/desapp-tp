package model;

import static org.junit.Assert.assertTrue;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

public class RatingCalculatorTestCase {
	

	@Test
	public void CheckThatARatingIsProperlyCalculated() {
		
		RatingCalculator calculator = new RatingCalculator();
		
		Map<Integer,Integer> map = new HashMap<Integer,Integer>();
		map.put(5, 252);
		map.put(4, 124);
		map.put(3, 40);
		map.put(2, 29);
		map.put(1, 33);
		calculator.setWeightedAverage(map);
		
		calculator.calculateRating();
		assertTrue(calculator.getCurrentRating().equals(4.11));

	}
	
	@Test
	public void CheckThatARatingIsProperlyAdded() {
		
		RatingCalculator calculator = new RatingCalculator();
		
		Rating rating = new Rating(3);
		calculator.addNewRating(rating);

		assertTrue(calculator.getRatings().contains(rating));
	}
	
	@Test
	public void CheckThatIfAnEmptyRatingsAreZeroAsDefault () {
		
		RatingCalculator calculator = new RatingCalculator();

		assertTrue(calculator.getCurrentRating().equals(0.0));
	}
}
