package model;

public class Rating {
	
	private Integer value;
	private String description;
	
	public Rating(Integer value) {
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public String getDescription() {
		return description;
	}
	
}
