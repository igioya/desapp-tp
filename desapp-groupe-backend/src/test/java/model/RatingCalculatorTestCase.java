package model;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import org.junit.Test;

public class RatingCalculatorTestCase {
	

	@Test
	public void test() {
		
		RatingCalculator calculator = new RatingCalculator();
		
		Map<Integer,Integer> map = new HashMap<Integer,Integer>();
		map.put(5, 252);
		map.put(4, 124);
		map.put(3, 40);
		map.put(2, 29);
		map.put(1, 33);
		calculator.setWeightedAverage(map);
		
		calculator.calculateRating();
		System.out.println(calculator.getCurrentRating());
		assertTrue(calculator.getCurrentRating().equals(4.11));

	}

}
