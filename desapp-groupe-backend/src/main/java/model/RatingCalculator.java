package model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class RatingCalculator {
	
	private List<Rating> ratings = new ArrayList<Rating>();;
	private Map<Integer,Integer> weightedAverage;
	private Double currentRating = 0.00;
	
	public RatingCalculator() {
		this.weightedAverage = new HashMap<Integer, Integer>();
		this.weightedAverage.put(5, 0);
		this.weightedAverage.put(4, 0);
		this.weightedAverage.put(3, 0);
		this.weightedAverage.put(2, 0);
		this.weightedAverage.put(1, 0);
	}
	
	public Double getCurrentRating() {
		return this.currentRating;
	}

	public List<Rating> getRatings() {
		return ratings;
	}

	public void setWeightedAverage(Map<Integer, Integer> weightedAverage) {
		this.weightedAverage = weightedAverage;
	}

	public void addNewRating(Rating newRating) {
		Integer key = newRating.getValue();
		this.ratings.add(newRating);
		this.weightedAverage.put(key, (this.weightedAverage.get(key))+1);
		this.calculateRating();
	}
	
	public void calculateRating() {
		if(weightedAverage.isEmpty())
			currentRating = 0.00;
		else {
			Integer one = this.weightedAverage.get(1);
			Integer two = this.weightedAverage.get(2);
			Integer three = this.weightedAverage.get(3);
			Integer four = this.weightedAverage.get(4);
			Integer five = this.weightedAverage.get(5);
			
			currentRating =  Math.floor((double) (5*five + 4*four + 3*three + 2*two + 1*one) / (double) (one+two+three+four+five) * 100) / 100;
		}
	}

}
